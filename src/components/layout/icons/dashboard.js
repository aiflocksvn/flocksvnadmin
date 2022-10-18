import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 20.22V4.703c0-1.473-.64-2.062-2.23-2.062H4.73c-1.59 0-2.23.589-2.23 2.062v15.515c0 1.473.64 2.063 2.23 2.063h4.04c1.59 0 2.23-.59 2.23-2.063ZM21.5 11.381V4.704c0-1.473-.64-2.062-2.23-2.062h-4.04c-1.59 0-2.23.589-2.23 2.062v6.677c0 1.473.64 2.063 2.23 2.063h4.04c1.59 0 2.23-.59 2.23-2.063ZM21.5 20.22v-2.75c0-1.473-.64-2.062-2.23-2.062h-4.04c-1.59 0-2.23.589-2.23 2.062v2.75c0 1.473.64 2.062 2.23 2.062h4.04c1.59 0 2.23-.59 2.23-2.063Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent