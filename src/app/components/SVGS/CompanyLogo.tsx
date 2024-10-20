import * as React from "react"
import { SVGProps } from "react"
const CompanyLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75V14.5h-5V2.25ZM7.5 16H1V2.25A2.25 2.25 0 0 1 3.25 0h3.5A2.25 2.25 0 0 1 9 2.25V6.5h3.25a2.25 2.25 0 0 1 2.25 2.25V16h-7ZM9 14.5h4V8.75a.75.75 0 0 0-.75-.75H9v6.5Zm-4.25-11H4V5h2V3.5H4.75ZM4 6.5h2V8H4V6.5Zm6.75 3H10V11h2V9.5h-1.25ZM4 9.5h2V11H4V9.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CompanyLogo