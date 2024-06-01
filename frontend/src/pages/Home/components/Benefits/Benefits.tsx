import { SimpleGrid, Text } from "@chakra-ui/react";
import Benefit from "./Benefit";
import { motion } from "framer-motion";

const Benefits = () => (
  <SimpleGrid
    as={motion.div}
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
    columns={3}
    spacing={10}
  >
    <Text as="h3" fontFamily="display" fontSize="5xl" color="brand.400">
      Stop Chasing Deals, Let Them Find You!
    </Text>
    <Benefit
      title="Effortlessly Track Prices & Book Travel for Less"
      listItems={[
        <>
          <b>Track Flights, Hotels & Activities:</b> Find the perfect flight,
          hotel, and activities for your trip. We'll monitor prices for you.
        </>,
        <>
          <b>Never Miss a Sale:</b> Get notified instantly when prices drop for
          your desired travel components.
        </>,
        <>
          <b>Book with Confidence:</b> Set price alerts and snag the best deals
          before they disappear.
        </>,
      ]}
    />
    <Benefit
      title="Stay Ahead of the Game with Price Alerts"
      listItems={[
        <>
          <b>Set Your Thresholds:</b> Decide the price point you're comfortable
          with for each flight, hotel, and activity you're tracking.
        </>,
        <>
          <b>Get Instant Notifications:</b> Choose your preferred method (email,
          push notification, in-app alert) and receive instant updates when a
          tracked price reaches your desired threshold.
        </>,
      ]}
    />
    <Benefit
      title="Simplify Travel Planning & Take Control of Your Budget"
      listItems={[
        <>
          <b>All-in-One Dashboard:</b> Manage all your tracked prices and alerts
          in one convenient place.
        </>,
        <>
          <b>Travel Smarter:</b> Save time and money by eliminating the need for
          constant price checking.
        </>,
      ]}
    />
  </SimpleGrid>
);

export default Benefits;
