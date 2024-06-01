import { Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

export type BenefitProps = {
  title: string;
  listItems: ReactNode[];
};

const Benefit = ({ title, listItems }: BenefitProps) => (
  <Box borderRadius="20px" backgroundColor="#FFCB5D" padding="8">
    <Text as="h4" fontSize="lg" fontWeight="bold" mb="4">
      {title}
    </Text>
    <UnorderedList fontSize="sm" spacing="2">
      {listItems?.map((item, key) => (
        <ListItem key={key}>{item}</ListItem>
      ))}
    </UnorderedList>
  </Box>
);

export default Benefit;
