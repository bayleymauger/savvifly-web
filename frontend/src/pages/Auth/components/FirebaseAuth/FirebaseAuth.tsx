import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { auth } from "firebaseui";
import { Box, SystemStyleObject } from "@chakra-ui/react";

export type FirebaseAuthProps = {
  // The Firebase UI Web UI Config object.
  // See: https://github.com/firebase/firebaseui-web#configuration
  uiConfig: auth.Config;
  // Callback that will be passed the FirebaseUi instance before it is
  // started. This allows access to certain configuration options such as
  // disableAutoSignIn().
  uiCallback?(ui: auth.AuthUI): void;
  // The Firebase App auth instance to use.
  firebaseAuth: any; // As firebaseui-web
  className?: string;
};

const FirebaseAuth = ({
  uiConfig,
  firebaseAuth,
  className,
  uiCallback,
}: FirebaseAuthProps) => {
  const [firebaseui, setFirebaseui] = useState<
    typeof import("firebaseui") | null
  >(null);
  const [userSignedIn, setUserSignedIn] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Firebase UI only works on the Client. So we're loading the package only after
    // the component has mounted, so that this works when doing server-side rendering.
    import("firebaseui").then((d) => {
      setFirebaseui(d);
    });
  }, []);

  useEffect(() => {
    if (firebaseui === null) return;

    // Get or Create a firebaseUI instance.
    const firebaseUiWidget =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebaseAuth);
    if (uiConfig.signInFlow === "popup") firebaseUiWidget.reset();

    // We track the auth state to reset firebaseUi if the user signs out.
    const unregisterAuthObserver = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user && userSignedIn) firebaseUiWidget.reset();
      setUserSignedIn(!!user);
    });

    // Trigger the callback if any was set.
    if (uiCallback) uiCallback(firebaseUiWidget);

    // Render the firebaseUi Widget.
    // @ts-ignore
    firebaseUiWidget.start(elementRef.current, uiConfig);

    return () => {
      unregisterAuthObserver();
      firebaseUiWidget.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseui, uiConfig]);

  return <Box className={className} ref={elementRef} sx={FirebaseAuthStyles} />;
};

const FirebaseAuthStyles: SystemStyleObject = {
  button: {
    borderRadius: "20px",
  },
};

export default FirebaseAuth;
