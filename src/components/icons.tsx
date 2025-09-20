import type { SVGProps } from "react";

export function BryzooLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 12a2 2 0 10-4 0v8a2 2 0 104 0" />
      <path d="M12 2a5 5 0 00-5 5v2a5 5 0 005 5h3a5 5 0 005-5V7a5 5 0 00-5-5z" />
    </svg>
  );
}
