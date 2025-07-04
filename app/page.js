import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";
const poppins = localFont({
  src: "./Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[63vh]">
        <div className="flex flex-col items-center gap-4 justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL Shortener in the Market
          </p>
          <p className="px-28 text-center">
            We are the most straightforward URL Shortener in the World. Most of the URL Shortener will track you or ask you to give your details for login. We understand your needs and hence we have created this URL Shortener
          </p>
          <div className='flex gap-3 justify-start items-center'>
            <Link href="/shorten"><button className='text-white hover:bg-purple-400 hover:h-9 bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
            <Link target='_blank' href="https://github.com/AletiAnudeepReddy"><button className='text-white hover:bg-purple-400 hover:h-9 bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
      <section className="py-12 pb-16 px-6 md:px-30 bg-purple-200">
        <div className="flex items-center justify-center gap-5 mb-3">
         <Image className="mix-blend-darken opacity-70" src={"/working.png"} width={50} height={50} alt="working" />
        <h2 className={`text-2xl md:text-3xl font-bold text-center text-gray-700  mb-3 ${poppins.className}`}>
          How It Works
        </h2>
        </div>
        <div className="grid mt-0 grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3 bg-purple-200 hover:bg-purple-100 rounded-lg p-15 shadow-lg">
            <Image className="mix-blend-darken" src={"/step1.png"} width={80} height={80} alt="Step 1" />
            <h3 className="text-purple-700 text-lg font-semibold">Paste Your URL</h3>
            <p className="text-gray-600">Enter the long URL you want to shorten. No login required!</p>
          </div>

          <div className="flex flex-col items-center gap-3  bg-purple-200 hover:bg-purple-100 rounded-lg p-15 shadow-lg">
            <Image className="mix-blend-darken opacity-70" src={"/step2.png"} width={80} height={80} alt="Step 2" />
            <h3 className="text-purple-700 text-lg font-semibold">Click Generate</h3>
            <p className=" text-gray-600">With just one click, we’ll generate your new shortened link instantly.</p>
          </div>

          <div className="flex flex-col items-center gap-3 bg-purple-200 hover:bg-purple-100 rounded-lg p-15 shadow-lg">
            <Image className="mix-blend-darken opacity-60" src={"/step3.png"} width={80} height={80} alt="Step 3" />
            <h3 className="text-purple-700 text-lg font-semibold">Share Anywhere</h3>
            <p className=" text-gray-600">Copy and share your link. No tracking. No fuss. Totally private.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
