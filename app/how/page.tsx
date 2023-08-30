import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function How() {
  const sectionCSS: string = `mt-12 max-w-xl flex flex-col justify-center items-center`;
  const imgCSS: string = `hover:animate-spin cursor-pointer`;
  const headingCSS: string = `text-center mb-4 mt-6 text-xl font-semibold`;
  const pCSS: string = ``;

  return (
    <main className="bg-teal-100 relative pb-60">
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
            <span className="ml-10">Web</span> scraping is the process of extracting information, data, or content from websites. It involves using automated tools or scripts to access and retrieve data from web pages, often in a structured format, such as HTML or JSON. Web scraping allows you to gather data from multiple sources quickly and efficiently, without the need for manual copying and pasting.
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
            <span className="ml-10">Web</span> scraping is the process of extracting information, data, or content from websites. It involves using automated tools or scripts to access and retrieve data from web pages, often in a structured format, such as HTML or JSON. Web scraping allows you to gather data from multiple sources quickly and efficiently, without the need for manual copying and pasting.
          </p>
        </div>
        <div className={sectionCSS}>
          <Image
            src={"/python.png"}
            alt="code icon"
            width={45}
            height={45}
            className={imgCSS}
          />
          <h1 className={headingCSS}>
            How was this built?
          </h1>
          <p className={pCSS}>
            <span className="ml-10">Web</span> scraping is the process of extracting information, data, or content from websites. It involves using automated tools or scripts to access and retrieve data from web pages, often in a structured format, such as HTML or JSON. Web scraping allows you to gather data from multiple sources quickly and efficiently, without the need for manual copying and pasting.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
};
