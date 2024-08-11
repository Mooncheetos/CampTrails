const searchParamsName = [
  { name: "ac", searchKey: "isAirConditioner" },
  { name: "kitchen", searchKey: "isKitchen" },
    { name: "beds", searchKey: "isBeds" },
  { name: "airConditioner", searchKey: "isAirConditioner" },
{ name: "shower", searchKey: "isShowerOrWC" },
  { name: "tv", searchKey: "isTV" },
];
export const getSearchParams = (searchParams) => {
  const currentSearchParams = searchParamsName.reduce(
    (acc, { name, searchKey }) => {
      const value = searchParams.get(name);
      if (value) {
        acc[searchKey] = !!value;
        return acc;
      }
      return acc;
    },
    {}
  );

  const location = searchParams.get("location");
  const transmission = searchParams.get("automatic");
  const form = searchParams.get("vehicleTypes");

  if (location && location.trim()) {
    currentSearchParams.location = location.trim();
  }
  if (transmission) {
    currentSearchParams.transmission = "automatic";
  }
  if (form) {
    currentSearchParams.form = form;
  }

  return currentSearchParams;
};