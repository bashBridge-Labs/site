"use client";
import React from "react";
import { useState } from 'react';
import Link from "next/link";
import { EnvelopeClosedIcon, HomeIcon, MobileIcon, InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';


export default function Page() {
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
      <div>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md h-screen flex flex-col justify-center">
          <h2 class="mb-4 text-6xl tracking-tight font-extrabold text-ceter text-gray-900 ">
            Contact Us
          </h2>
          <p class="mb-4 text-gray-500 text-lg">
            Facing tech issues or need details about our Business plan? We're
            here to help!
          </p>
          <p class="mb-8 lg:mb-16  text-gray-500 text-lg">
            Mail us at:{" "}
            <a className="text-blue-400" href="mailto:bashbridgelabs@gmail.com">
              bashbridgelabs@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="w-full h-[100vh]">
        <div data-tf-live="01HN2F5DC5TG8C2W65SDCSXFEH"></div>
        <script src="//embed.typeform.com/next/embed.js"></script>
      </div>
    </>
  );
}
