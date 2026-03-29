import { useState } from "react";
import "./App.css";
//import components app
import HeaderPage from "./HeaderPage";
import InputComponent from "./InputComponent";
import WeatherCard from "./WeatherCard";
import LoadingComponent from "./LoadingComponent";

import { useTranslation } from "react-i18next";

function App() {
  const [pageDir, setPageDir] = useState("ltr");
  const [searchValue, setSearchValue] = useState("");
  const [status, setstatus] = useState(null); //null , loading , fetched
  const [data, setData] = useState({});
  const { t, i18n } = useTranslation();

  const apiKey = "e4647148dd964044a95193114262703";

  async function handleSearch(Value) {
    setstatus("loading");
    let res;
    setTimeout(async () => {
      try {
        res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${Value}&lang=${i18n.language}`,
        );
        let data = await res.json();
        let dataResault = {
          title: data.location.name,
          conditionIcon: data.current.condition.icon,
          temp: Number.parseInt(data.current.temp_c),
          condition: data.current.condition.text,
          minTemp: Number.parseInt(data.forecast.forecastday[0].day.mintemp_c),
          maxTemp: Number.parseInt(data.forecast.forecastday[0].day.maxtemp_c),
          feelsLike: Number.parseInt(data.current.feelslike_c),
          humidity: Number.parseInt(data.current.humidity),
          wind: Number.parseInt(data.current.wind_mph),
        };
        setData(dataResault);
      } catch (e) {
        setData({ title: searchValue[0].toUpperCase() + searchValue.slice(1) });
        throw new Error(e);
      } finally {
        setstatus("fetched");
      }
    }, 2000);
  }

  return (
    <main
      dir={pageDir}
      className="font-roboto rtl:font-cairo flex min-h-screen bg-linear-to-br from-blue-400 via-blue-500 to-indigo-600"
    >
      <div className="m-auto flex h-full w-[95%] flex-col gap-6 pt-10 pb-10 md:w-md lg:w-lg">
        <HeaderPage
          t={t}
          i18n={i18n}
          direction={pageDir}
          setDirection={setPageDir}
        />
        <InputComponent
          t={t}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
        />
        {/* in first render we render intial screen when status is null before user search */}
        {status === null ? (
          <div className="mt-15 h-90">
            <div className="m-auto flex size-30 items-center justify-center rounded-full bg-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-20 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <p className="m-5 mb-2 text-center text-xl text-white">
              {t("Search for a location to see the weather")}
            </p>
            <p className="text-center text-sm text-gray-300">
              {t("Enter any city or region name above")}
            </p>
          </div>
        ) : //render loading component until fetch data from api endpoint
        status === "loading" ? (
          <LoadingComponent />
        ) : (
          <WeatherCard t={t} data={data} />
        )}
      </div>
    </main>
  );
}

export default App;
