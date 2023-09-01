import Home from "./home";
import axios from "axios";

export default async function Page() {
  const scraperRequest = async (url: string, selectedElements: any, browser: string) => {
    "use server"
    try {
    "use server"
      const requestData = {
        url: url,
        element_types: selectedElements,
        browser: browser
      };
      const res = await axios.post('https://web-scraper-python-backend.vercel.app/scrape', requestData);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  return <Home scraperRequest={scraperRequest} />
};
