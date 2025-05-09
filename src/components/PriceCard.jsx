import Button from "./Button";
import GreenTickSVG from "../components/svg/icon/GreenTickSVG";

export default function PriceCard({
  title,
  description,
  price,
  teamSize,
  support,
  freeUpdates,
}) {
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {description}
      </p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          <GreenTickSVG />
          <span>Individual configuration</span>
        </li>
        <li className="flex items-center space-x-3">
          <GreenTickSVG />
          <span>No setup, or hidden fees</span>
        </li>
        <li className="flex items-center space-x-3">
          <GreenTickSVG />
          <span>
            Team size: <span className="font-semibold">{teamSize}</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <GreenTickSVG />
          <span>
            Premium support: <span className="font-semibold">{support}</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <GreenTickSVG />
          <span>
            Free updates: <span className="font-semibold">{freeUpdates}</span>
          </span>
        </li>
      </ul>
      <Button
        btnTxt={"Get started"}
        classTxt={
          "text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        }
      />
    </div>
  );
}
