import Navbar from "@/components/Navbar"

export default function Home() {
  const titleCSS: string = `text-2xl mb-6`;
  const selectDivCSS: string = `mt-16 flex flex-col justify-center items-center`;
  const presetCSS: string = `ml-2 mr-4`;

  return (
    <main>
      <Navbar />
      <section className="mt-4 justify-center items-center flex flex-col">
        <div className={selectDivCSS}>
          <h2 className={titleCSS}>
            Enter a website to scrape
          </h2>
          <input 
            type="text"
            className="w-96 h-8 border-black border-2 rounded-sm"
          />
          <div className="mt-6 flex flex-col justify-center items-center">
            <p className="text-lg">
              Or try one of these:
            </p>
            <div className="mt-6">
              <button className={presetCSS}>
                Amazon.com
              </button>
              <button className={presetCSS}>
                OpenAi.com
              </button>
              <button className={presetCSS}>
                NASA.gov 
              </button>
            </div> 
          </div>
        </div>
        <div className={selectDivCSS}>
          <h2 className={titleCSS}>
            Select which elements to get
          </h2>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </section>
    </main>
  )
}
