function SearchIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M11 17a6 6 0 100-12 6 6 0 000 12z"
        stroke="#363837"
      />
      <path
        d="M15.5 15.5l3.187 3.187"
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
