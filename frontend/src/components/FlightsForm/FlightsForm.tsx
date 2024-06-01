import { Box, Input } from "@chakra-ui/react";
import { useFlightsFilters } from "../../hooks/useFlightsFilters";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

const FlightsForm = () => {
  const { control, register } = useFlightsFilters();

  return (
    <Box>
      <Input {...register("from")} />
      <Input {...register("to")} />
      <Input {...register("departureDate")} />
      <Input {...register("returnDate")} />
      <Input {...register("adults")} />
      <Input {...register("children")} />
      <Controller
        control={control}
        name="from"
        render={({ field }) => (
          <DatePicker
            placeholderText="Select date"
            onChange={(date) => field.onChange(date)}
            // selected={field.value}
          />
        )}
      />
    </Box>
  );
};

export default FlightsForm;
