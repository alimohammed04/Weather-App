export default function HeaderPage({ direction, t, i18n }) {
  //handle click on lang button
  function handleClick() {
    if (direction === "ltr") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  }
  return (
    <section className="flex items-center justify-between gap-6">
      <span className="size-12 rounded-full bg-white/30 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="stroke-amber-50 stroke-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
          />
        </svg>
      </span>
      <span className="flex-1 text-2xl font-medium text-white sm:text-3xl">
        {t("Weather Now")}
      </span>
      <button
        className="size-12 cursor-pointer rounded-full bg-white/30 p-2 transition-colors duration-200 hover:bg-white/50"
        onClick={handleClick}
        aria-label="tranlate-page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="stroke-amber-50 stroke-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </button>
    </section>
  );
}
