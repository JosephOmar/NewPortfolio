import * as React from "react"
import { SVGProps } from "react"
const CalendarLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    strokeLinejoin="round"
    data-testid="geist-icon"
    width={15}
    height={15}
    style={{
      color: "currentcolor",
    }}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.5.5V2h5V.5H12V2h3.5v11.5A2.5 2.5 0 0 1 13 16H3a2.5 2.5 0 0 1-2.5-2.5V2H4V.5h1.5ZM2 3.5h12V6H2V3.5Zm0 4v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6H2Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CalendarLogo