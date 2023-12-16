import axios from "axios";

const getCurrentLocation = async () => {
  try {
    // Replace 'YOUR_ACCESS_KEY' with your actual access key
    const accessKey = "8d659473067d70a2e0e508ca3680a6cb";
    // Replace 'YOUR_API_URL' with the actual API endpoint URL
    const apiUrl = `http://api.ipstack.com/check?access_key=${accessKey}`;

    const response = await axios.get(apiUrl);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentLocation;
