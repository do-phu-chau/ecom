import * as React from "react";



export const IconMdiBellAlertOutline = ({
  height = "1em",
  fill = "#ffffff",
  focusable = "false",
  size = "24px", 
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children"> & {  size?: string | number }) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    width={size} 
    focusable={focusable}
    {...props}
  >
    <path
      fill={fill}
      d="M12 2a2 2 0 0 0-2 2a2 2 0 0 0 0 .29C7.12 5.14 5 7.82 5 11v6l-2 2v1h18v-1l-2-2v-6c0-3.18-2.12-5.86-5-6.71A2 2 0 0 0 14 4a2 2 0 0 0-2-2m0 4a5 5 0 0 1 5 5v7H7v-7a5 5 0 0 1 5-5m9 1v6h2V7zm0 8v2h2v-2zm-11 6a2 2 0 0 0 2 2a2 2 0 0 0 2-2z"
    />
  </svg>
);
