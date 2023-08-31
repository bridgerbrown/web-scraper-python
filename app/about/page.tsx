import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  const sectionCSS: string = `text-left mt-12 max-w-3xl text-center flex flex-col justify-center items-center`;
  const imgCSS: string = `animate-bounce`;
  const headingCSS: string = `mb-4 mt-6 text-xl font-semibold`;
  const pCSS: string = `mb-2`;
  const linkCSS: string = `hover:opacity-50 transition-opacity cursor-pointer underline-offset-2 underline`;

  return (
    <main className="bg-teal-100 min-h-screen relative pb-60">
      <Navbar />
      <section className="mt-4 flex flex-col justify-center items-center">
        <div className={sectionCSS}>
          <Image
            src={"/python.png"}
            alt="code icon"
            width={45}
            height={45}
            className=""
          />
          <h1 className={headingCSS}>
            How was this built?
          </h1>
          <p className={pCSS}>
            The main functionality of the web scraper comes from the back-end code, which was built using Python, the 
            Flask framework to create the web server that listens to the front-end, and the BeautifulSoup 
            library for parsing the HTML content. The front-end user interface was built using React, TypeScript, NextJS, and TailwindCSS.
          </p>
        </div>
        <div className={sectionCSS}>
          <Image
            src={"/heart.png"}
            alt="code icon"
            width={45}
            height={45}
            className={imgCSS}
          />
          <h1 className={headingCSS}>
            Developed by Bridger Brown
          </h1>
          <p className={pCSS}>
            <span className="ml-10">This </span>
            web development project was made just for the purpose of improving my
            development skills, particularly with back-end technology like Python. 
            <br/>
            <br/>
            Feel free to check out some of my other projects!
          </p>
          <div className="flex space-x-4 mt-4">
            <a 
              href="https://github.com/bridgerbrown/web-scraper-python"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCSS}
            >
              Github Repo
            </a>
            <a 
              href="https://www.bridgerbrown.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCSS}
            >
              Portfolio Website
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
};
