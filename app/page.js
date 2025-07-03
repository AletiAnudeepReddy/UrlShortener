import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";
const  poppins= localFont({
  src:"./Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col items-center gap-4 justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL Shortener in the Market
          </p>
          <p className="px-28 text-center">
            We are the most straightforward URL Shortener in the World. Most of the URL Shortener will track you or ask you to give your details for login. We understand your needs and hence we have created this URL Shortener
          </p>
          <div className='flex gap-3 justify-start items-center'>
            <Link href="/shorten"><button className='text-white hover:bg-purple-400 hover:h-9 bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
            <Link href="/github"><button className='text-white hover:bg-purple-400 hover:h-9 bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="vector" src={"/vector.jpg"} fill={true}/>
        </div>
      </section>
    </main>
  );
}
