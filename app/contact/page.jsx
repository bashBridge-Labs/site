"use client";
import { useState } from 'react';
import Link from "next/link";
import { EnvelopeClosedIcon, HomeIcon, MobileIcon, InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

export default function page() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "037254b3-cb81-4a54-9a85-db4288fc7387");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log("form sucessfully submited", result);
      setIsFormSubmitted(true);
    }
  }
  return (
    <>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-5xl p-8 sm:p-12 rounded-xl shadow-lg text-white'>
          <div className='flex flex-col space-y-8 justify-between'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide'>
                Contact Us
              </h1>
              <p className='pt-2 text-cyan-100 text-sa'>
                We would be happy to hear from you, please fill in the form below or mail us your requirements on
              </p>
            </div>
            <div className='flex flex-col space-y-6'>
              <div className='inline-flex space-x-2 items-center'>
                <MobileIcon className='text-teal-300 text-xl' />
                <span> +91 70478-91381</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <EnvelopeClosedIcon className='text-teal-300 ' />
                <a href="mailto:bashbridgelabs@gmail.com">bashbridgelabs@gmail.com</a>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <HomeIcon className='text-teal-300 ' />
                <span>Haldia, West Bengal, India</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg ">
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
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-284">
              {isFormSubmitted ? (
                <div className="text-center text-green-500">
                  <p>Thanks for reaching out us ! We've received your message at BashBridge Labs. Our team is reviewing it and will respond soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
                  <div>
                    <label for="" className="text-sm">Your Name</label>
                    <input type="text"
                      name="name"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2
                   outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Email Address</label>
                    <input type="email"
                      name="name"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2
                      outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Message</label>
                    <textarea type="text"
                      name="message"
                      rows="4"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2
                      outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2
                  uppercase text-sm"
                    type="submit"
                  > Send Message</button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </>


  )
}
