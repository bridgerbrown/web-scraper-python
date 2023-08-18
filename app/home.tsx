"use client"
import Navbar from "@/components/Navbar"
import React, {useState, ChangeEvent} from "react";

export default function Home() {
  const titleCSS: string = `text-lg font-semibold ml-3`;
  const stepCSS: string = `mb-5 flex justify-center items-center`;
  const stepCircleCSS: string = `w-8 h-8 rounded-full text-white bg-blue-500 flex justify-center items-center`;
  const stepNumberCSS: string = `font-semibold absolute`;
  const selectDivCSS: string = `mb-16 flex flex-col justify-center items-center`;
  const presetButtonCSS: string = `px-5 py-2 text-sm bg-slate-300 hover:bg-slate-400/60 transition-colors rounded-sm mx-2`;
  const labelCSS: string = `ml-2 mr-6 cursor-pointer`;

  const [url, setUrl] = useState<string>("");

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    setUrl(newUrl);
    console.log(newUrl);
  };

  return (
    <main>
      <Navbar />
      <section className="mt-16 justify-center items-center flex flex-col">
        <h1 className="text-xl mb-12">
          Choose a website to retrieve some HTML elements!
        </h1>
        <div className={selectDivCSS}>
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
          <div className="mt-6 flex flex-col justify-center items-center">
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
        <div className={selectDivCSS}>
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
          <div className="mt-2 mb-0">
            <form 
              id="elements"
              className=""
            >
              <input 
                type="checkbox" 
                id="heading" 
                value="heading" 
                name="elements" 
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
              />
              <label 
                htmlFor="images"
                className={labelCSS}
              >
                Images 
              </label>
            </form>
          </div>
        </div>
        <div>
          <button className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 drop-shadow-none hover:drop-shadow-lg transition-all">
            Submit
          </button>
        </div>
      </section>
    </main>
  )
}
