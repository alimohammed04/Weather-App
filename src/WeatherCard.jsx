import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faTemperatureFull,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
export default function WeatherCard({ data, t }) {
  return (
    <section className="flex flex-1 flex-col items-center justify-between gap-4 rounded-3xl bg-white bg-linear-to-br from-blue-50 to-white pt-10 text-center shadow-2xl">
      {Object.keys(data).length !== 1 ? (
        <>
          <h2 className="text-3xl font-bold text-gray-900">{data.title}</h2>
          <img src={data.conditionIcon} className="size-50" />
          <span className="relative block text-7xl font-medium">
            {data.temp}
            <span className="absolute -top-1 h-4 w-4 rounded-full border-3 border-black text-4xl rtl:-right-4"></span>
          </span>
          <span className="text-xl text-gray-400">{data.condition}</span>

          {/* start low and high temp  */}
          <div className="flex gap-7">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="me-2 size-5 stroke-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
              <span className="relative block text-lg font-medium text-gray-600">
                {data.maxTemp}
                <span className="absolute top-1 -right-2.5 h-1.5 w-1.5 rounded-full border border-black text-4xl"></span>
              </span>
            </span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="me-2 size-5 stroke-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>

              <span className="relative block text-lg font-medium text-gray-600">
                {data.minTemp}
                <span className="absolute top-1 -right-2.5 h-1.5 w-1.5 rounded-full border border-black text-4xl"></span>
              </span>
            </span>
          </div>
          {/* end low and high temp  */}
          <div className="flex w-full items-center gap-4 rounded-b-3xl bg-indigo-50 p-3 sm:p-7">
            <div className="flex-1 rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-5 text-lg text-blue-600 sm:text-2xl">
              <FontAwesomeIcon icon={faTemperatureFull} />
              <span className="mt-2 mb-2 block text-xs text-gray-600 sm:text-lg">
                {t("Feels Like")}
              </span>
              <span className="relative inline-block text-sm font-medium text-gray-600 sm:text-xl">
                {data.feelsLike}
                <span className="absolute top-1 -right-2.5 h-1.5 w-1.5 rounded-full border border-black text-4xl"></span>
              </span>
            </div>
            <div className="flex-1 rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-5 text-lg text-blue-600 sm:text-2xl">
              <FontAwesomeIcon icon={faDroplet} />
              <span className="mt-2 mb-2 block text-xs text-gray-600 sm:text-lg">
                {t("Humidity")}
              </span>
              <span className="block text-sm font-medium text-gray-600 sm:text-xl">
                {data.humidity}%
              </span>
            </div>
            <div className="flex-1 rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-5 text-lg text-blue-600 sm:text-2xl">
              <FontAwesomeIcon icon={faWind} />
              <span className="mt-2 mb-2 block text-xs text-gray-600 sm:text-lg">
                {t("Wind")}
              </span>
              <span className="block text-sm font-medium text-gray-600 sm:text-xl">
                {data.wind} mph
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="rounded-full bg-red-400/15 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-15 stroke-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-medium">
            {t("Location Not Found")}
          </h2>
          <p className="p-10 pt-0 text-gray-600">
            {t("We couldn't find weather data for")} "{data.title}".
            {t("Please check the spelling and try again")}.
          </p>
        </>
      )}
    </section>
  );
}
