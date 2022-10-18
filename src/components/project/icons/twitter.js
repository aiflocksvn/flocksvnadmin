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
        d="M10.659 0a9.999 9.999 0 1 0 0 19.998 9.999 9.999 0 0 0 0-19.998Zm4.98 6.973a4.224 4.224 0 0 1-.856.943.365.365 0 0 0-.131.285v.033a5.995 5.995 0 0 1-.387 2.083 6.11 6.11 0 0 1-1.138 1.908 5.622 5.622 0 0 1-2.468 1.632 6.17 6.17 0 0 1-1.94.302 5.92 5.92 0 0 1-2.973-.8.17.17 0 0 1-.083-.19.167.167 0 0 1 .16-.124h.25a3.987 3.987 0 0 0 2.23-.677 2.167 2.167 0 0 1-1.709-1.47.113.113 0 0 1 .132-.15c.12.023.241.035.363.035h.046a2.16 2.16 0 0 1-1.259-1.984.113.113 0 0 1 .167-.098c.154.086.32.15.492.19a2.16 2.16 0 0 1-.348-2.62.113.113 0 0 1 .186-.013 5.657 5.657 0 0 0 3.882 2.074h.01a.083.083 0 0 0 .08-.088c-.03-.264-.013-.531.05-.79a2.093 2.093 0 0 1 1.408-1.505c.221-.069.451-.104.683-.105.525 0 1.033.191 1.427.539a.279.279 0 0 0 .251.061c.37-.093.725-.24 1.053-.434a.111.111 0 0 1 .166.132c-.11.344-.304.655-.567.904.236-.056.467-.134.689-.234a.113.113 0 0 1 .138.162h-.004Z"
        fill="#3B4E56"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.66)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent