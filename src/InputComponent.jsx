export default function InputComponent({
  searchValue,
  setSearchValue,
  handleSearch,
  t
}) {


  function handleInputChange(value) {
    setSearchValue(value);
  }

  return (
    <section className="flex h-14 shrink-0 justify-between overflow-hidden rounded-xl bg-amber-50 shadow-2xl">
      <input
        type="text"
        className="flex-1 ps-6 focus:outline-none"
        placeholder={t("Search for a city or area")}
        value={searchValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && searchValue.length > 1)
            handleSearch(searchValue)
        }}
      />
      <button
        disabled={searchValue.length === 0}
        onClick={() => handleSearch(searchValue)}
        aria-label="search weather"
        className="flex w-14 cursor-pointer items-center justify-center bg-blue-500 transition-colors duration-200 hover:bg-blue-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-200"
      >
        {/* search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 stroke-amber-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
          {/*end search Icon */}
        </svg>
      </button>
    </section>
  );
}
