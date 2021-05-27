import * as React from "react";

function FilterIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
        d="M19 6.5H5h14zM16 8V5v3zM19 12H5h14zM8.5 13.5v-3 3zM19 17.5H5h14zM12.5 19v-3 3z"
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FilterIcon;
