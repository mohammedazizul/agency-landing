import logo from "../assets/logo.svg";
import WebSVG from "./svg/icon/WebSVG";
import TwitterSVG from "./svg/brand/TwitterSVG";
import FacebookSVG from "./svg/brand/FacebookSVG";
import InstagramSVG from "./svg/brand/InstagramSVG";
import GitHubGreySVG from "./svg/brand/GitHubGreySVG";

function RenderSubListItem({ listTxt }) {
  return (
    <li className="mb-4">
      <a href="#" className=" hover:underline">
        {listTxt}
      </a>
    </li>
  );
}

function RenderCompanyListOne() {
  const companyListOne = ["About", "Careers", "Brand Center", "Blog"];

  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Company
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {companyListOne.map((item, index) => (
          <RenderSubListItem key={index} listTxt={item} />
        ))}
      </ul>
    </div>
  );
}

function RenderHelpCenterList() {
  const helpCenterList = [
    "Discord Server",
    "Twitter",
    "Facebook",
    "Contact Us",
  ];

  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Help center
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {helpCenterList.map((item, index) => (
          <RenderSubListItem key={index} listTxt={item} />
        ))}
      </ul>
    </div>
  );
}

function RenderLegalList() {
  const legalList = ["Privacy Policy", "Licensing", "Terms"];

  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Legal
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {legalList.map((item, index) => (
          <RenderSubListItem key={index} listTxt={item} />
        ))}
      </ul>
    </div>
  );
}

function RenderDownloadList() {
  const downloadList = ["iOS", "Android", "Windows", "MacOS"];

  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Download
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {downloadList.map((item, index) => (
          <RenderSubListItem key={index} listTxt={item} />
        ))}
      </ul>
    </div>
  );
}

function RenderCompanyListTwo() {
  const companyListTwo = ["About", "Careers", "Brand Center", "Blog"];

  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Company
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {companyListTwo.map((item, index) => (
          <RenderSubListItem key={index} listTxt={item} />
        ))}
      </ul>
    </div>
  );
}

function SubFooterOne() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
      <RenderCompanyListOne />
      <RenderHelpCenterList />
      <RenderLegalList />
      <RenderDownloadList />
      <RenderCompanyListTwo />
    </div>
  );
}

function SubFooterTwo() {
  const iconArr = [
    <FacebookSVG />,
    <InstagramSVG />,
    <TwitterSVG />,
    <GitHubGreySVG />,
    <WebSVG />,
  ];

  return (
    <div className="text-center">
      <a
        href="#"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          src={logo}
          className="h-6 mr-3 sm:h-9"
          alt="Learn with Sumit Logo"
        />
        Learn with Sumit{" "}
      </a>
      <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
        © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
        <a
          href="#"
          target="_blank"
          className="text-purple-600 hover:underline dark:text-purple-500"
        >
          Flowbite
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="text-purple-600 hover:underline dark:text-purple-500"
        >
          Tailwind CSS
        </a>
        .
      </span>
      <ul className="flex justify-center mt-5 space-x-5">
        {iconArr.map((icon, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <SubFooterOne />
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <SubFooterTwo />
      </div>
    </footer>
  );
}
