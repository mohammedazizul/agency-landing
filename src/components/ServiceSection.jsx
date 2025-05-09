import featureOne from "../assets/features/feature-1.png";
import featureTwo from "../assets/features/feature-2.png";
import CirclePurpleTickSVG from "./svg/icon/CirclePurpleTickSVG";
import RightArrowSVG from "./svg/icon/RightArrowSVG";
import ServerSVG from "./svg/icon/ServerSVG";
import MultiUserSVG from "./svg/icon/MultiUserSVG";
import WorldMapSVG from "./svg/icon/WorldMapSVG";
import CartSVG from "./svg/icon/CartSVG";

function ServiceOneSection() {
  const serviceItemsOne = [
    "Continuous integration and deployment",
    "Development workflow",
    "Knowledge management",
  ];
  const serviceItemsTwo = [
    "Dynamic reports and dashboards",
    "Templates for everyone",
    "Development workflow",
    "Limitless business automation",
    "Knowledge management",
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* <!-- Sub Service 1 --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Work with tools you already use
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {serviceItemsOne.map((txt, index) => (
                <li className="flex space-x-3" key={index}>
                  <CirclePurpleTickSVG />
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {txt}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={featureOne}
            alt="dashboard feature image"
          />
        </div>

        {/* <!-- Sub Service 2 --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={featureTwo}
            alt="feature image 2"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>

            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {serviceItemsTwo.map((txt, index) => (
                <li className="flex space-x-3" key={index}>
                  <CirclePurpleTickSVG />
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {txt}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceTwoSection() {
  const serviceItems = [
    {
      title: "99.99% uptime",
      description: "For Landwind, with zero maintenance downtime",
      icon: <ServerSVG />,
    },
    {
      title: "600M+ Users",
      description: "Trusted by over 600 milion users around the world",
      icon: <MultiUserSVG />,
    },
    {
      title: "100+ countries",
      description: "Have used Landwind to create functional websites",
      icon: <WorldMapSVG />,
    },
    {
      title: "5+ Million",
      description: "Transactions per day",
      icon: <CartSVG />,
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
            Trusted Worldwide
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Trusted by over 600 million users and 10,000 teams
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                Explore Legality Guide
                <RightArrowSVG />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                Visit the Trust Center
                <RightArrowSVG />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          {serviceItems.map((item, index) => (
            <div key={index} className="">
              {item.icon}
              <div>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  {item.title}
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServiceSection() {
  return (
    <>
      <ServiceOneSection />
      <ServiceTwoSection />
    </>
  );
}
