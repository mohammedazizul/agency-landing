import AirbnbSVG from "./svg/brand/AirbnbSVG";
import GoogleSVG from "./svg/brand/GoogleSVG";
import MicrosoftSvg from "./svg/brand/MicrosoftSvg";
import SpotifySVG from "./svg/brand/SpotifySVG";
import MailChimpSVG from "./svg/brand/MailChimpSVG";
import MashAbleSVG from "./svg/brand/MashableSVG";

export default function CompaniesSection() {
  const companyLogos = [
    <AirbnbSVG />,
    <GoogleSVG />,
    <MicrosoftSvg />,
    <SpotifySVG />,
    <MailChimpSVG />,
    <MashAbleSVG />,
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {companyLogos.map((logo, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center lg:justify-center"
            >
              {logo}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
