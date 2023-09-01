import Home from "./home";
import axios from "axios";

const scraperRequest = async (url: string, selectedElements: any, browser: string) => {
  "use server"
  try {
    const requestData = {
      url: url,
      element_types: selectedElements,
      browser: browser
    };
    const res = await axios.post('/api/scraper', requestData);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default async function Page() {
  return <Home scraperRequest={scraperRequest} />
};