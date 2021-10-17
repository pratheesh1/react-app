import create from "zustand";
import { devtools } from "zustand/middleware";

const api_base_url = "http://localhost:3500";
const countries_api_endpoint = api_base_url + "/countries";

const useCustomStore = create(
  devtools((set) => ({
    countries: [],
    fetchCountries: async () => {
      var response = await fetch(countries_api_endpoint).catch((err) =>
        console.error(err)
      );
      set({ countries: await response.json() });
    },
  }))
);

export default useCustomStore;
