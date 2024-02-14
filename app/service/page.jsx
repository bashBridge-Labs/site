
export default function Page() {
  return (
    <>
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



        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

          <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>


          <div class="max-w-5xl mx-auto">

            <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-900">
                  Can I cancel at anytime?
                </h3>
                <p class="mt-2 text-gray-600 dark:text-gray-900">
                  Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                </p>
              </div>


              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-900">
                  My team has credits. How do we use them?
                </h3>
                <p class="mt-2 text-gray-600 dark:text-gray-900">
                  Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                </p>
              </div>


              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-900">
                  How does our's pricing work?
                </h3>
                <p class="mt-2 text-gray-600 dark:text-gray-900">
                  Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-900">
                  How secure is BashBridge?
                </h3>
                <p class="mt-2 text-gray-600 dark:text-gray-900">
                  Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                </p>
              </div>


              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-900">
                  Do you offer discounts?
                </h3>
                <p class="mt-2 text-gray-600 dark:text-gray-900">
                  We've built in discounts at each tier for teams. The time has come to bring those ideas and plans to life.
                </p>
              </div>


              <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-900">
                  What is your refund policy?
                </h3>
                <p class="mt-2 text-gray-600 dark:text-gray-900">
                  We offer refunds(Terms and Condition Apply). We aim high at being focused on building relationships with our clients and community.
                </p>
              </div>

            </div>

          </div>
        </div>

      </section>
    </>
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
