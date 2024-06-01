import { Box, Container } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useFlightsFiltersQueryParams } from "../../hooks/useFlightsFilters";
import FlightsForm from "../../components/FlightsForm";

const Flights = () => {
  const test = useFlightsFiltersQueryParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `http://localhost:3000/flights/?${test.searchParams.toString()}`
      ).then((res) => res.json()),
  });

  return (
    <Container minWidth="container.xl" minHeight="95vh">
      <FlightsForm />
      {isPending && <div>Loading...</div>}

      {error && <div>An error has occurred: {error.message}</div>}

      {/* TODO: Use OpenAPI spec to generate TS types for API */}
      {data?.map((flight: any) => {
        return <Box key={flight.id}>{flight.price.total}</Box>;
      })}
    </Container>
  );
};

export default Flights;
