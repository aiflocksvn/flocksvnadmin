import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M10.829 0a9.999 9.999 0 1 0 0 19.998 9.999 9.999 0 0 0 0-19.998ZM8.285 14.665a.338.338 0 0 1-.337.333H6.51a.332.332 0 0 1-.338-.338V8.636a.338.338 0 0 1 .338-.338h1.438a.338.338 0 0 1 .338.338l-.001 6.029ZM7.233 7.732A1.366 1.366 0 1 1 7.223 5a1.366 1.366 0 0 1 .01 2.732Zm8.568 6.957a.31.31 0 0 1-.311.31h-1.546a.311.311 0 0 1-.31-.31v-2.826c0-.423.122-1.843-1.103-1.843-.95 0-1.143.977-1.184 1.417v3.26a.31.31 0 0 1-.308.305H9.547a.31.31 0 0 1-.31-.311V8.608a.31.31 0 0 1 .31-.312h1.493a.312.312 0 0 1 .317.312v.527a2.123 2.123 0 0 1 1.99-.936c2.471 0 2.456 2.308 2.456 3.575l-.002 2.915Z"
        fill="#3B4E56"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.83)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent