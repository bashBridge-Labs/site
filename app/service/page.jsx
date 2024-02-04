
export default function Page() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We provide a wide range of services to meet your needs. Our team of experts is dedicated to delivering
              top-notch solutions tailored to your business.
            </p>
          </div>
          <div className="grid gap-6 mt-10 md:grid-cols-3 lg:grid-cols-3 md:gap-12">
            <div className="flex flex-col items-center space-y-4">
              <CloudIcon className="h-12 w-12 text-gray-900 dark:text-gray-900" />
              <h3 className="text-xl font-semibold">Cloud Services</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                We offer reliable and scalable cloud services that support your business growth.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <CodeIcon className="h-12 w-12 text-gray-900 dark:text-gray-900" />
              <h3 className="text-xl font-semibold">Software Development</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Our team of skilled developers can create custom software solutions to solve your business challenges.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <ShieldIcon className="h-12 w-12 text-gray-900 dark:text-gray-900" />
              <h3 className="text-xl font-semibold">Cybersecurity</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                We provide robust cybersecurity solutions to protect your business data and systems.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <BarChartIcon className="h-12 w-12 text-gray-900 dark:text-gray-900" />
              <h3 className="text-xl font-semibold">Analytics</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Our analytics services help you understand your business better and make data-driven decisions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <HelpCircleIcon className="h-12 w-12 text-gray-900 dark:text-gray-900" />
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                We provide round-the-clock support to ensure your business operations run smoothly.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <CloudLightningIcon className="h-12 w-12 text-gray-900 dark:text-gray-900" />
              <h3 className="text-xl font-semibold">Fast Performance</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Our solutions are optimized for speed, ensuring your business operates at peak performance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <LockIcon className="h-12 w-12 text-gray-900 dark:text-gray-900" />
              <h3 className="text-xl font-semibold">Security</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                We prioritize security in all our services to protect your business from potential threats.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function BarChartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    )
  }
  
  
  function CloudIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    )
  }
  
  
  function CloudLightningIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
        <path d="m13 12-3 5h4l-3 5" />
      </svg>
    )
  }
  
  
  function CodeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  
  
  function HelpCircleIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    )
  }
  
  
  function LockIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
  
  
  function ShieldIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    )
  }
  