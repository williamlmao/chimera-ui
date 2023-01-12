export const Searchbar = () => {
  return (
    <div className="flex items-center w-full relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-on-base absolute top-1/2 -translate-y-1/2 left-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        className="w-full pl-10 p-2 rounded-theme bg-base-0 text-on-base shadow-theme focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
    </div>
  );
};
