"use client"
import Navbar from "@/components/Navbar"
import React, {useState, ChangeEvent, FormEvent} from "react";

export default function Home() {
  const titleCSS: string = `text-lg font-semibold ml-3`;
  const stepCSS: string = `mb-5 flex justify-center items-center`;
  const stepCircleCSS: string = `w-8 h-8 rounded-full text-white bg-blue-500 flex justify-center items-center`;
  const stepNumberCSS: string = `font-semibold absolute`;
  const presetButtonCSS: string = `px-5 py-2 text-sm bg-slate-300 hover:bg-slate-400/60 transition-colors rounded-sm mx-2`;
  const labelCSS: string = `ml-2 mr-6 cursor-pointer`;

  const [url, setUrl] = useState<string>("");
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [urlError, setUrlError] = useState<boolean>(false);
  const [elementsError, setElementsError] = useState<boolean>(false);

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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!url) setUrlError(true);
    if (!selectedElements.length) setElementsError(true);
  }

  return (
    <main>
      <Navbar />
      <section className="mt-16 justify-center items-center flex flex-col">
        <h1 className="text-xl mb-12">
          Choose a website to retrieve some HTML elements!
        </h1>
        <div className="mb-16 flex flex-col justify-center items-center">
          <span className={stepCSS}>
            <div className={stepCircleCSS}>
              <h2 className={stepNumberCSS}>
                1
              </h2>
            </div>
            <h2 className={titleCSS}>
              Enter a website
            </h2>
          </span>
          <input 
            type="text"
            id="urlInput"
            value={url}
            onChange={handleUrlChange}
            className="w-[600px] pl-2 h-8 border-slate-600 border rounded-md"
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
                htmlFor="heading"
                className={labelCSS}
              >
                Heading
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
                id="links" 
                value="links" 
                name="elements" 
                onChange={handleCheckboxChange}
              />
              <label 
                htmlFor="links"
                className={labelCSS}
              >
                Links  
              </label>
              <input 
                type="checkbox" 
                id="images" 
                value="images" 
                name="elements" 
                onChange={handleCheckboxChange}
              />
              <label 
                htmlFor="images"
                className={labelCSS}
              >
                Images 
              </label>
            </form>
            {
              elementsError ?
              <p className="mb-7 pt-4 text-red-600 text-sm">
                Select at least one element to retrieve!
              </p>
              :
              <div className="mb-16"></div>
            }
          </div>
        </div>
        <div>
          <button 
            onClick={handleSubmit}
            className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 drop-shadow-none hover:drop-shadow-lg transition-all"
          >
            Submit
          </button>
        </div>
      </section>
    </main>
  )
}
