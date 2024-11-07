import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import icons from "../app/image/2303160_bus_public_road_transport_travel_icon.png"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = { 
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <nav className="relative p-6"> 
        <div className="flex justify-between items-center"> 
        <Image src={icons} alt="sdad" className=" w-[15%] laptop:w-[5%]"/>
          <h1 className="text-white font-bold laptop:text-2xl">Contact As</h1>
        </div>
      </nav> */}
   

   <nav className="relative bg-white bg-opacity-50 border-gray-200 dark:bg-gray-900 dark:bg-opacity-80">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
    <a className="text-white">
        Contact Us
    </a>
  </div>
</nav>

        {children}
      </body>   
    </html>
  );
}
