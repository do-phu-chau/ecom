import * as React from "react";

export const IconRadixIconsChevronRight = ({
  height = "1.5rem",
  fill = "currentColor",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 15"
    height={height}
    focusable={focusable}
    {...props}
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707"
      clipRule="evenodd"
    />
  </svg>
);
