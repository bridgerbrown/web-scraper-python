
export default function StartSection(props: any) {
  const {url, urlError, handleUrlChange, setUrl, handleCheckboxChange, elementsError, browserError, 
        handleRadioChange, handleSubmit} = props;
  const titleCSS: string = `text-lg font-semibold ml-3`;
  const stepCSS: string = `mb-5 flex justify-center items-center`;
  const stepCircleCSS: string = `w-7 h-7 rounded-full text-white bg-teal-700 flex justify-center items-center`;
  const stepNumberCSS: string = `font-semibold text-sm absolute`;
  const presetButtonCSS: string = `px-5 py-2 text-sm bg-teal-300 hover:bg-teal-200 transition-colors rounded-sm mx-2`;
  const labelCSS: string = `ml-2 mr-4 cursor-pointer hover:opacity-50 transition-opacity`;
  const checkboxCSS: string = `cursor-pointer ml-3`;
  const radioCSS: string = `cursor-pointer ml-3`;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-3xl mb-14">
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
            Enter an existing website
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
        <span className="mb-1 flex justify-center items-center">
          <div className={stepCircleCSS}>
            <h2 className={stepNumberCSS}>
              2
            </h2>
          </div>
          <h2 className={titleCSS}>
            Select which elements to retrieve
          </h2>
        </span>
        <p className="mb-6 text-gray-600 text-xs">
          Website code structure and type may vary
        </p>
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
              className={checkboxCSS}
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
              className={checkboxCSS}
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
              className={checkboxCSS}
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
              className={checkboxCSS}
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
        <span className="mb-1 flex justify-center items-center">
          <div className={stepCircleCSS}>
            <h2 className={stepNumberCSS}>
              3
            </h2>
          </div>
          <h2 className={titleCSS}>
            Select which browser you're using
          </h2>
        </span>
        <p className="mb-6 text-gray-600 text-xs">
            Other browsers are not currently supported
        </p>
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
              className={radioCSS}
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
              className={radioCSS}
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
              className={radioCSS}
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
              className={radioCSS}
            />
            <label 
              htmlFor="ie"
              className={labelCSS}
            >
              Internet Explorer
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
          className="px-6 py-2 text-white bg-teal-800 rounded-full hover:bg-teal-600 drop-shadow-none hover:drop-shadow-lg transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  )
};
