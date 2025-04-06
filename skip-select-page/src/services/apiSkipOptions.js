export async function fetchSkipOptions() {
  const response = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft",
  );

  if (!response.ok)
    throw new Error("Failed to fetch skip options from the API!");

  const skipOptionsData = await response.json();

  return skipOptionsData;
}
