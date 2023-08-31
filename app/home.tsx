"use client"
import Navbar from "@/components/Navbar"
import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";
import axios from "axios";
import Footer from "@/components/Footer";
import ResultsSection from "@/components/ResultsSection";
import StartSection from "@/components/StartSection";
import Loading from "@/components/Loading";

export default function Home() {
  const startSectionCSS: string = `bg-white drop-shadow-xl md:w-[750px] w-11/12 min-h-[925px] border border-gray-400 
    rounded-md mt-12 justify-center items-center flex flex-col`;
  const resultsSectionCSS: string = `pt-14 bg-white drop-shadow-xl md:w-[750px] w-11/12 min-h-[925px] border border-gray-400 
    rounded-md mt-12 justify-start items-center flex flex-col`;

  const [url, setUrl] = useState<string>("");
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [browser, setBrowser] = useState<string>("");
  const [urlError, setUrlError] = useState<boolean>(false);
  const [elementsError, setElementsError] = useState<boolean>(false);
  const [browserError, setBrowserError] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [scrapedData, setScrapedData] = useState<any>();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingTime, setLoadingTime] = useState<number>(0);

  const [headingData, setHeadingData] = useState<any[]>([]);
  const [paragraphData, setParagraphData] = useState<any[]>([]);
  const [linkData, setLinkData] = useState<any[]>([]);
  const [metaData, setMetaData] = useState<any[]>([]);

  const scrapedDataLength = headingData.length + paragraphData.length + linkData.length + metaData.length; 

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    setUrl(newUrl);
    setUrlError(false);
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (event.target.checked) {
      setSelectedElements((prev) => [...prev, value]);
      setElementsError(false);
    } else {
      setSelectedElements((prev) => prev.filter((element) => element !== value));
    }
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setBrowser(value);
    setBrowserError(false);
  };

  const handleSubmit = async (event: FormEvent) => {
    setLoading(true);
    setLoadingTime(performance.now());
    setSubmitted(true);
    event.preventDefault();
    if (!url) setUrlError(true);
    if (!selectedElements.length) setElementsError(true);
    if (!browser) setBrowserError(true);
    if (!url || !selectedElements.length) return;
    await handleScraper();
    setLoading(false);
  }

  const handleRedo = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(false);
    setScrapedData([]);
    setUrl("");
    setSelectedElements([]);
    setHeadingData([]);
    setParagraphData([]);
    setLinkData([]);
    setMetaData([]);
    setUrlError(false);
    setElementsError(false);
    setBrowserError(false);
    setStatus("");
    setLoadingTime(0);
  }

  const handleScraper = async () => {
    try {
      const requestData = {
        url: url,
        element_types: selectedElements,
        browser: browser
      };
      const res = await axios.post('http://127.0.0.1:5000/scrape', requestData);
      setLoading(false);
      setLoadingTime((prev) => performance.now() - prev);
      setStatus(res.data.error ? res.data.error : res.data.message);
      setScrapedData(res.data.data);
      const heading_data = res.data.data[0].length ? [...res.data.data[0].map((item: any) => [item[0], item[1]])] : [];
      const paragraph_data = res.data.data[1].length ? [...res.data.data[1].map((item: any) => item)] : [];
      const link_data = res.data.data[2].length ? [...res.data.data[2].map((item: any) => [item[0], item[1]])] : [];
      const meta_data = res.data.data[3].length ? [...res.data.data[3].map((item: any) => JSON.stringify(item))] : [];
      setHeadingData(heading_data);
      setParagraphData(paragraph_data);
      setLinkData(link_data);
      setMetaData(meta_data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(scrapedData) 
  }, [loading, scrapedData])

  return (
    <main className="bg-teal-100 relative pb-60">
      <Navbar />
      <div className="w-screen flex justify-center items-center">
        <section className={submitted && !loading ? resultsSectionCSS : startSectionCSS}>
          {
            submitted
            ?
              loading 
              ?
              <Loading />
              :
              <ResultsSection
                status={status}
                scrapedData={scrapedData}
                scrapedDataLength={scrapedDataLength}
                loadingTime={loadingTime}
                selectedElements={selectedElements}
                handleRedo={handleRedo}
                headingData={headingData}
                paragraphData={paragraphData}
                linkData={linkData}
                metaData={metaData}
              />
            :
            <StartSection
              url={url}
              urlError={urlError}
              handleUrlChange={handleUrlChange}
              setUrl={setUrl}
              handleCheckboxChange={handleCheckboxChange}
              elementsError={elementsError}
              browserError={browserError}
              handleRadioChange={handleRadioChange}
              handleSubmit={handleSubmit}
            />
          }
        </section>
      </div>
      <Footer />
    </main>
  )
}
