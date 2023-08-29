import Link from "next/link";

function Navbar() {
  const linkCSS: string = `hover:opacity-50 transition-opacity px-2 mx-8`;

  return (
    <nav className="">
      <div className="flex items-center justify-center w-screen">
        <h1 className="my-10 text-5xl">
          Web Scraper
        </h1>
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
