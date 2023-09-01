import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function How() {
  const sectionCSS: string = `mt-12 md:max-w-3xl w-11/12 text-center flex flex-col justify-center items-center`;
  const imgCSS: string = ``;
  const headingCSS: string = `text-center mb-4 mt-6 md:text-xl text-lg font-semibold`;
  const pCSS: string = `md:text-base text-sm`;

  return (
    <main className="bg-teal-100 min-h-screen relative pb-60">
      <Navbar />
      <section className="mt-4 flex flex-col justify-center items-center">
        <div className={sectionCSS}>
          <Image
            src={"/code.png"}
            alt="code icon"
            width={50}
            height={50}
            className={imgCSS}
          />
          <h1 className={headingCSS}>
            What is web scraping?
          </h1>
          <p className={pCSS}>
            Web scraping is the process of extracting information, data, 
            or content from websites. It involves using automated tools or scripts to access and retrieve data from web pages, 
            often in a structured format, such as HTML content like headings, images, or links. 
          </p>
        </div>
        <div className={sectionCSS}>
          <Image
            src={"/question.png"}
            alt="code icon"
            width={27}
            height={27}
            className={imgCSS}
          />
          <h1 className={headingCSS}>
            What is the purpose?
          </h1>
          <p className={pCSS}>
            Although this simple web scraper was built just for hobby, web scrapers can make gathering
            large amounts of data from websites very fast and efficient. Some real-world cases might be for companies to monitor
            competitors' market data, news aggregators to gather articles, collecting data for academic research,
             and even gathering data for AI (natural language processing and machine learning).
          </p>
        </div>
        <div className={sectionCSS}>
          <Image
            src={"/mask.png"}
            alt="code icon"
            width={50}
            height={50}
            className={imgCSS}
          />
          <h1 className={headingCSS}>
            Is this allowed?
          </h1>
          <p className={pCSS}>
            Don't worry, this is allowed. With the basic data we're gathering, this web scraping is perfectly legal and the 
            data is even accessible to anyone without web scraping by going into your browsers devtools or by right-clicking
            on a page background and clicking 'View Page Source'. But it is to be noted that using web scraping for deeper data gathering 
            can go beyond a websites terms of use, copyright, and the laws of privacy/personal data.
          </p>
        </div>

      </section>
      <Footer />
    </main>
  )
};
