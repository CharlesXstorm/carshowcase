// const fetch = require("node-fetch");

export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "416cacef84msh7da2ae3f6d4dbf9p1b1256jsn6e34d3414541",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}
