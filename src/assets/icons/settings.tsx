import * as React from "react";

function SettingsIcon(
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
        d="M10 18.71a6.963 6.963 0 01-1.531-.665l-.162.162a1 1 0 01-1.414 0l-1.1-1.1a1 1 0 010-1.414l.162-.162A6.959 6.959 0 015.29 14H5a1 1 0 01-1-1v-2a1 1 0 011-1h.29a6.96 6.96 0 01.665-1.531l-.162-.162a1 1 0 010-1.414l1.1-1.1a1 1 0 011.414 0l.162.162A6.96 6.96 0 0110 5.29V5a1 1 0 011-1h2a1 1 0 011 1v.29c.54.16 1.054.385 1.531.665l.162-.162a1 1 0 011.414 0l1.1 1.1a1 1 0 010 1.414l-.162.162c.28.477.504.99.665 1.531H19a1 1 0 011 1v2a1 1 0 01-1 1h-.29a6.962 6.962 0 01-.665 1.531l.162.162a1 1 0 010 1.414l-1.1 1.1a1 1 0 01-1.414 0l-.162-.162c-.477.28-.99.504-1.531.665V19a1 1 0 01-1 1h-2a1 1 0 01-1-1v-.29 0z"
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M12 16a4 4 0 100-8 4 4 0 000 8z"
        stroke="#363837"
      />
    </svg>
  );
}

export default SettingsIcon;
