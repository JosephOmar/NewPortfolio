import * as React from "react"
import { SVGProps } from "react"
const LinkedInSvg = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm3 6.75V13H3V6.75h2ZM5 4.5c0 .556-.386 1-1.006 1h-.012C3.386 5.5 3 5.056 3 4.5c0-.568.398-1 1.006-1s.982.432.994 1ZM8.5 13h-2s.032-5.568 0-6.25h2v1.034s.5-1.034 2-1.034 2.5.848 2.5 3.081V13h-2v-2.89s0-1.644-1.264-1.644S8.5 9.94 8.5 9.94V13Z"
      clipRule="evenodd"
    />
  </svg>
)
export default LinkedInSvg