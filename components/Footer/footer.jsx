import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-300 ">
      <div className="md:px-24 px-8 py-16 max-w-7xl  mx-auto">
        <div className="  ">
          <div
            className="text-2xl font-medium
      "
          >
            <h1 className="text-white">BashBridge Labs </h1>{" "}
            <p className="text-zinc-500 max-w-sm">
              Empowering Innovation, Elevating Solutions: Your Success, Our Code.
            </p>
          </div>
          <div className="hidden">
            <input
              type="text"
              placeholder="Enter Your ph. no"
              className="text-gray-800
        sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button
              className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Popins]
         rounded-md text-white md:w-auto w-full"
            >
              Request Code
            </button>
          </div>
        </div>
        <ItemsContainer />
        
        <div className=" pt-4 text-zinc-400 text-sm pb-8 ">
          <p>© 2024 BashBridge. All rights reserved.</p>
          <p>Terms · Privacy Policy</p>
          <div className="mt-6">
            <div className="flex gap-6 justify-center md:justify-start">
              <Link href="/">
                <InstagramLogoIcon />
              </Link>
              <Link href="/">
                <TwitterLogoIcon />
              </Link>
              <Link href="/">
                <LinkedInLogoIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
