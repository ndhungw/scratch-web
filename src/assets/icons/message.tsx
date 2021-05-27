import * as React from "react";

function MessageIcon(
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
        d="M5 7.5l7 5M19 7.5l-7 5"
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M5 7h14v10H5V7z"
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MessageIcon;
