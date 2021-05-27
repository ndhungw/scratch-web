import * as React from "react";

function DotIcon(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14a2 2 0 100-4 2 2 0 000 4z"
        fill="#979797"
      />
    </svg>
  );
}

export default DotIcon;
