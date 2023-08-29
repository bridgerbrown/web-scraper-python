"use client"
import Navbar from "@/components/Navbar"
import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";
import axios from "axios";
import DataItem from "@/components/DataItem";
import ResultsList from "@/components/ResultsList";

export default function Home() {
  const titleCSS: string = `text-xl font-semibold ml-3`;
  const stepCSS: string = `mb-5 flex justify-center items-center`;
  const stepCircleCSS: string = `w-8 h-8 rounded-full text-white bg-blue-500 flex justify-center items-center`;
  const stepNumberCSS: string = `font-semibold absolute`;
  const presetButtonCSS: string = `px-5 py-2 text-sm bg-slate-300 hover:bg-slate-400/60 transition-colors rounded-sm mx-2`;
  const labelCSS: string = `ml-2 mr-6 cursor-pointer`;

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

  const [headingData, setHeadingData] = useState<any[]>([]);
  const [paragraphData, setParagraphData] = useState<any[]>([]);
  const [linkData, setLinkData] = useState<any[]>([]);
  const [metaData, setMetaData] = useState<any[]>([]);

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
  }

  const handleScraper = async () => {
    try {
      const requestData = {
        element_types: selectedElements,
        browser: browser
      };
      const res = await axios.post('http://127.0.0.1:5000/scrape', requestData);
      setLoading(false);
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
    <main>
      <Navbar />
      <section className="mt-16 justify-center items-center flex flex-col">
        {
          submitted
          ?
            loading && !scrapedData
            ?
            <div className="w-screen flex items-center justify-center">
              <h2 className="text-2xl">
                Loading...
              </h2>
            </div>
            :
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-semibold mt-4 mb-2">
                Results
              </h1>
              {status === "Scraping successful" ? 
                <h1 className="text-lg text-green-500 mb-6">
                Scraping successful!
                </h1>
                :
                <h1 className="text-2xl text-red-500 mb-6">
                Scraping error: {status}
                </h1>
              }
              <section className="w-full text-center flex justify-center items-center mb-4">
                {
                  scrapedData ? 
                    <div>
                      { selectedElements.includes("heading") ? <ResultsList data={headingData} type={"Heading"} /> : <div></div>}
                      { selectedElements.includes("paragraph") ? <ResultsList data={paragraphData} type={"Paragraph"} /> : <div></div>}
                      { selectedElements.includes("link") ? <ResultsList data={linkData} type={"Link"} /> : <div></div>}
                      { selectedElements.includes("meta") ? <ResultsList data={metaData} type={"Meta"} /> : <div></div>}
                    </div>
                    :
                    <p></p>
                }
              </section>
              <div className="w-full flex items-center justify-center">
                <button 
                  onClick={handleRedo}
                  className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 drop-shadow-none hover:drop-shadow-lg transition-all"
                >
                  Restart
                </button>
              </div>
            </div>
          :
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold mb-10">
              Web Scraper
            </h1>
            <div className="mb-16 flex flex-col justify-center items-center">
              <span className={stepCSS}>
                <div className={stepCircleCSS}>
                  <h2 className={stepNumberCSS}>
                    1
                  </h2>
                </div>
                <h2 className={titleCSS}>
                  Enter any website
                </h2>
              </span>
              <input 
                type="text"
                id="urlInput"
                value={url}
                onChange={handleUrlChange}
                className="w-[600px] mt-2 pl-2 h-8 border-slate-600 border rounded-md"
              />
              {
                urlError ?
                <p className="mb-2 pt-3 text-red-600 text-sm">
                  An URL is required!
                </p>
                :
                <div className="mt-10"></div>
              }
              <div className="mt-0 flex flex-col justify-center items-center">
                <p className="">
                  Or try one of these examples:
                </p>
                <div className="mt-4">
                  <button 
                    className={presetButtonCSS}
                    onClick={() => setUrl("https://www.amazon.com/")}
                  >
                    Amazon.com
                  </button>
                  <button 
                    className={presetButtonCSS}
                    onClick={() => setUrl("https://openai.com/")}
                  >
                    OpenAI.com
                  </button>
                  <button 
                    className={presetButtonCSS}
                    onClick={() => setUrl("https://www.nasa.gov/")}
                  >
                    NASA.gov 
                  </button>
                </div> 
              </div>
            </div>
            <div className="mb-2 flex flex-col justify-center items-center">
              <span className={stepCSS}>
                <div className={stepCircleCSS}>
                  <h2 className={stepNumberCSS}>
                    2
                  </h2>
                </div>
                <h2 className={titleCSS}>
                  Select which elements to retrieve
                </h2>
              </span>
              <div className="text-center mt-2 mb-0">
                <form 
                  id="elements"
                  className=""
                >
                  <input 
                    type="checkbox" 
                    id="heading" 
                    value="heading" 
                    name="elements"
                    onChange={handleCheckboxChange}
                  />
                  <label 
                    htmlFor="heading"
                    className={labelCSS}
                  >
                    Heading text
                  </label>
                  <input 
                    type="checkbox" 
                    id="paragraph" 
                    value="paragraph" 
                    name="elements" 
                    onChange={handleCheckboxChange}
                  />
                  <label 
                    htmlFor="paragraph"
                    className={labelCSS}
                  >
                    Paragraph text
                  </label>
                  <input 
                    type="checkbox" 
                    id="link" 
                    value="link" 
                    name="elements" 
                    onChange={handleCheckboxChange}
                  />
                  <label 
                    htmlFor="link"
                    className={labelCSS}
                  >
                    Links  
                  </label>
                  <input 
                    type="checkbox" 
                    id="meta" 
                    value="meta" 
                    name="elements" 
                    onChange={handleCheckboxChange}
                  />
                  <label 
                    htmlFor="meta"
                    className={labelCSS}
                  >
                    Meta data 
                  </label>
                </form>
                {
                  elementsError ?
                  <p className="mb-5 pt-4 text-red-600 text-sm">
                    Select at least one element to retrieve!
                  </p>
                  :
                  <div className="mb-14"></div>
                }
              </div>
            </div>
            <div className="mb-6 flex flex-col justify-center items-center">
              <span className={stepCSS}>
                <div className={stepCircleCSS}>
                  <h2 className={stepNumberCSS}>
                    3
                  </h2>
                </div>
                <h2 className={titleCSS}>
                  Select which browser you're using
                </h2>
              </span>
              <div className="text-center mt-2 mb-0">
                <form 
                  id="browsers"
                  className=""
                >
                  <input 
                    type="radio" 
                    id="chrome" 
                    value="chrome" 
                    name="browsers"
                    onChange={handleRadioChange}
                  />
                  <label 
                    htmlFor="chrome"
                    className={labelCSS}
                  >
                    Chrome
                  </label>
                  <input 
                    type="radio" 
                    id="safari" 
                    value="safari" 
                    name="browsers" 
                    onChange={handleRadioChange}
                  />
                  <label 
                    htmlFor="safari"
                    className={labelCSS}
                  >
                    Safari
                  </label>
                  <input 
                    type="radio" 
                    id="firefox" 
                    value="firefox" 
                    name="browsers" 
                    onChange={handleRadioChange}
                  />
                  <label 
                    htmlFor="firefox"
                    className={labelCSS}
                  >
                    Firefox
                  </label>
                  <input 
                    type="radio" 
                    id="ie" 
                    value="ie" 
                    name="browsers" 
                    onChange={handleRadioChange}
                  />
                  <label 
                    htmlFor="ie"
                    className={labelCSS}
                  >
                    Internet Explorer
                  </label>
                  <input 
                    type="radio" 
                    id="other" 
                    value="other" 
                    name="browsers" 
                    onChange={handleRadioChange}
                  />
                  <label 
                    htmlFor="other"
                    className={labelCSS}
                  >
                    Other
                  </label>
                </form>
                {
                  browserError ?
                  <p className="mb-5 pt-4 text-red-600 text-sm">
                    Select a browser!
                  </p>
                  :
                  <div className="mb-14"></div>
                }
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <button 
                onClick={handleSubmit}
                className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 drop-shadow-none hover:drop-shadow-lg transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        }
      </section>
    </main>
  )
}
