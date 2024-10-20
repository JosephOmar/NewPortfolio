import * as React from "react"
import { SVGProps } from "react"
const XSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    strokeLinejoin="round"
    data-testid="geist-icon"
    style={{
      color: "currentcolor",
    }}
    {...props}
  >
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M.5.5h5.25l3.734 5.21L14 .5h2l-5.61 6.474L16.5 15.5h-5.25l-3.734-5.21L3 15.5H1l5.61-6.474L.5.5ZM12.02 14 3.42 2h1.56l8.6 12h-1.56Z"
      clipRule="evenodd"
    />
  </svg>
)
export default XSvg
