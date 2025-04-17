import axios from "axios";

async function fetchData<T extends string, U>(url: T): Promise<U> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
