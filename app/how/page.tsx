import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function How() {
  const sectionCSS: string = `mt-12 max-w-xl flex flex-col justify-center items-center`;
  const imgCSS: string = ``;
  const headingCSS: string = `text-center mb-4 mt-6 text-xl font-semibold`;
  const pCSS: string = ``;

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
            <span className="ml-10">Web</span> scraping is the process of extracting information, data, 
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
            <span className="ml-10">Although</span> this simple web scraper was built just for hobby, web scrapers can make gathering
            large amounts of data from websites very efficient and fast. Some real-world cases might be for companies to monitor
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
            <span className="ml-10">Don't </span> 
            worry, with the basic data we're gathering, this web scraping is perfectly legal and the data is accessible to anyone 
            without web scraping by going into your browsers devtools or by right-clicking
            on a page background and going to 'View Page Source'. But it is to be noted that using web scraping for deeper data gathering 
            can go beyond a websites terms of use, copyright, and the laws of privacy/personal data.
          </p>
        </div>

      </section>
      <Footer />
    </main>
  )
};
