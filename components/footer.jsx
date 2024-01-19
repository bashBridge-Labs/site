import React from 'react'

export default function footer() {
  return (
    
    <footer className="bg-white">
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
          <a className="w-6 h-6 transition fill-black hover:text-blue-500">
            <span className="sr-only">
              github
            </span>
            <ion-icon className="w-5 h-5 md hydrated" name="logo-github" role="img" aria-label="logo github"></ion-icon>
          </a>
          <a className="w-6 h-6 transition fill-black hover:text-blue-500">
            <span className="sr-only">
              twitter
            </span>
            <ion-icon className="w-5 h-5 md hydrated" name="logo-twitter" role="img" aria-label="logo twitter"></ion-icon>
          </a>
          <a className="w-6 h-6 transition fill-black hover:text-blue-500">
            <span className="sr-only">
              Instagram
            </span>
            <ion-icon className="w-5 h-5 md hydrated" name="logo-instagram" role="img" aria-label="logo instagram"></ion-icon>
          </a>
          <a className="w-6 h-6 transition fill-black hover:text-blue-500">
            <span className="sr-only">
              Linkedin
            </span>
            <ion-icon className="w-5 h-5 md hydrated" name="logo-linkedin" role="img" aria-label="logo linkedin"></ion-icon>
          </a>
        </span>
      </div>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-base text-center text-gray-400">
          <span className="mx-auto mt-2 text-sm text-gray-500">
            Copyright © 2020 - 2021
            <a href="https://unwrapped.design" className="mx-2 text-blue-500 hover:text-gray-500" rel="noopener noreferrer">
              @unwrappedHQ
            </a>
            .Since 2020
          </span>
        </p>
      </div>
    </div>
  </footer>            
  )
}
