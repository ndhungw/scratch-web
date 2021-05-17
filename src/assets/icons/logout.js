import * as React from "react";

function LogOutIcon(props) {
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
        d="M12 16v3H5V5h7v3"
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M17 12H9h8z"
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9l2 3-2 3"
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LogOutIcon;
