import * as React from "react";

function NotificationsIcon(props) {
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
        d="M6 17h12v-4a6 6 0 00-12 0v4z"
        stroke="#363837"
      />
      <path
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5h2v1h-2zM7 19h10"
      />
    </svg>
  );
}

export default NotificationsIcon;
