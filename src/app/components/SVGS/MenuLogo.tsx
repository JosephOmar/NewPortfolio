import * as React from "react"
import { SVGProps } from "react"
const MenuLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    strokeLinejoin="round"
    data-testid="geist-icon"
    style={{
      color: "currentcolor",
    }}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 2h14v1.5H1V2Zm0 10.5h14V14H1v-1.5Zm.75-5.25H1v1.5h14v-1.5H1.75Z"
      clipRule="evenodd"
    />
  </svg>
)
export default MenuLogo