import Link from "next/link";

function Navbar() {
  const linkCSS: string = `md:text-base text-sm hover:opacity-50 transition-opacity px-2 md:mx-8 sm:mx-4 mx-2`;

  return (
    <nav className="">
      <div className="flex items-center justify-center w-screen">
        <Link href={"/"}>
          <h1 className="my-10 md:text-5xl text-4xl">
            Web Scraper
          </h1>
        </Link>
      </div>
      <div className="h-16 border-y border-slate-300 flex justify-center items-center w-screen">
        <Link href={"/"} 
          className={linkCSS}
        >
          Home 
        </Link>
        <Link href={"/how"}
          className={linkCSS}
        >
          What is web scraping?
        </Link>
        <Link href={"/about"}
          className={linkCSS}
        >
          About 
        </Link>
      </div>
    </nav>
  )
};

export default Navbar;
