import ResultsList from "./ResultsList";

export default function ResultsSection(props: any){
  const {status, scrapedData, scrapedDataLength, loadingTime, selectedElements,
        handleRedo, headingData, paragraphData, linkData, metaData } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-3xl text-2xl font-semibold mb-2">
        Results
      </h1>
      {status === "Scraping successful" ? 
        <span className="max-w-xl flex flex-col justify-center items-center">
          <h1 className="text-green-500 mb-1">
          Scraping successful!
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            {scrapedDataLength} items scraped in {loadingTime ? (loadingTime / 1000).toFixed(2) : "unknown"} seconds 
          </p>
        </span>
        :
        <span className="max-w-xl flex flex-col justify-center items-center">
          <h1 className="font-semibold text-red-500 mb-2">
          Scraping error:
          </h1>
          <h2 className="text-center text-red-500 mb-4">
            {status}
          </h2>
          <p className="mb-6 text-sm">Make sure you entered a valid URL and the correct browser.</p>
        </span>
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
          className="md:text-base text-sm mb-16 px-6 py-2 text-white bg-teal-800 rounded-full hover:bg-teal-600 drop-shadow-none hover:drop-shadow-lg transition-all"
        >
          Restart
        </button>
      </div>
    </div>
  )
};
