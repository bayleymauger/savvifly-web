import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

type Inputs = {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  returnDate?: string;
  adults: string;
  children: string;
};

export const useFlightsFiltersQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const originLocationCode = searchParams.get("originLocationCode") as string;
  const destinationLocationCode = searchParams.get(
    "destinationLocationCode"
  ) as string;
  const departureDate = searchParams.get("departureDate") as string;
  const returnDate = searchParams.get("returnDate") as string;
  const adults = searchParams.get("adults") as string;
  const children = searchParams.get("children") as string;

  return {
    setSearchParams,
    searchParams,
    originLocationCode,
    destinationLocationCode,
    departureDate,
    returnDate,
    adults,
    children,
  };
};

export const useFlightsFilters = () => {
  const {
    originLocationCode,
    destinationLocationCode,
    departureDate,
    returnDate,
    adults,
    children,
  } = useFlightsFiltersQueryParams();

  const {
    control,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      originLocationCode,
      destinationLocationCode,
      departureDate,
      returnDate,
      adults,
      children,
    },
  });

  return {
    control,
    register,
    errors,
    originLocationCode,
    destinationLocationCode,
    departureDate,
    returnDate,
    adults,
    children,
  };
};
