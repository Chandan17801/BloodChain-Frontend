import axios from "axios";

export default async function getCurrentLocation() {
  let response = null;
  try {
    response = await axios.get("http://ip-api.com/json/");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return response.data;
}

export async function getLatitude() {
  try {
    const locationData = await getCurrentLocation();
    return locationData.lat;
  } catch (error) {
    console.error("Error getting latitude:", error);
    throw error; // Rethrow the error to handle it outside if needed
  }
}

export async function getLongitude() {
  try {
    const locationData = await getCurrentLocation();
    return locationData.lon;
  } catch (error) {
    console.error("Error getting longitude:", error);
    throw error; // Rethrow the error to handle it outside if needed
  }
}
