
import axios from "axios";
async function LivePriceApi() {
 
  try {
    const response = await axios.get(
      `https://www.goldapi.io/api/XAU/INR`,
      {
        headers: {
        "x-access-token": "goldapi-eooasm50jts42-io",
        //   goldapi-eooasm50jts42-io
        "Content-Type": "application/json",

        },
      }
    );
    console.log(response.data);
   
    return response.data;
  } catch (error) {
    console.error('Error calling Get Live Price');  }
}
export default LivePriceApi;

