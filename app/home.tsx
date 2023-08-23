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
  const [urlError, setUrlError] = useState<boolean>(false);
  const [elementsError, setElementsError] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [scrapedData, setScrapedData] = useState<any>();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [headingData, setHeadingData] = useState<any[]>([]);
  const [paragraphData, setParagraphData] = useState<any[]>([]);
  const [linkData, setLinkData] = useState<any[]>([]);
  const [metaData, setMetaData] = useState<any[]>([]);

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    setUrl(newUrl);
    setUrlError(false);
    console.log(newUrl);
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (event.target.checked) {
      setSelectedElements((prev) => [...prev, value]);
      console.log(selectedElements)
      setElementsError(false);
    } else {
      setSelectedElements((prev) => prev.filter((element) => element !== value));
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!url) setUrlError(true);
    if (!selectedElements.length) setElementsError(true);
    if (!url || !selectedElements.length) return;
    await handleScraper();
    setTimeout(() => console.log(scrapedData), 2000)
  }

  const handleRedo = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(false);
    setScrapedData([]);
    setUrl("");
    setSelectedElements([]);
    setUrlError(false);
    setElementsError(false);
    setStatus("");
  }

  const handleScraper = async () => {
    try {
      const requestData = {
        element_types: selectedElements
      };
      const res = await axios.post('http://127.0.0.1:5000/scrape', requestData);
      setStatus(res.data.error ? res.data.error : res.data.message);
      setScrapedData(res.data.data);
      console.log(res.data)
      const heading_data = res.data.data[0].length ? [...res.data.data[0].map((item: any) => [item[0], item[1]])] : [];
      const paragraph_data = res.data.data[1].length ? [...res.data.data[1].map((item: any) => item)] : [];
      const link_data = res.data.data[2].length ? [...res.data.data[2].map((item: any) => [item[0], item[1]])] : [];
      const meta_data = res.data.data[3].length ? [...res.data.data[3].map((item: any) => JSON.stringify(item))] : [];
      console.log(res.data.data)
      setHeadingData(heading_data);
      setParagraphData(paragraph_data);
      setLinkData(link_data);
      setMetaData(meta_data);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(scrapedData) 
  }, [scrapedData])

  return (
    <main>
      <Navbar />
      <section className="mt-16 justify-center items-center flex flex-col">
        {
          submitted
          ?
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
            <div className="flex flex-col justify-center items-center">
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
                    htmlFor="headings"
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
            <div className="mb-8 flex flex-col justify-center items-center">
              <span className={stepCSS}>
                <div className={stepCircleCSS}>
                  <h2 className={stepNumberCSS}>
                    3
                  </h2>
                </div>
                <h2 className={titleCSS}>
                  Press Submit to start
                </h2>
              </span>
              <p className="text-center max-w-xl">
                The selected website will quickly open and close in a new 
                  window (don't be alarmed!) for the data to be processed, 
                  then the results will be displayed here.
                <br/>
              </p>
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
