import * as React from "react";
import { SVGProps } from "react";
const CSSSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="clamp(3em,5vw,8em)"
    height="clamp(3em,5vw,8em)"
    viewBox="0 0 452 520"
    {...props}
  >
    <path fill="#0c73b8" d="M41 460 0 0h451l-41 460-185 52" />
    <path fill="#30a9dc" d="m226 472 149-41 35-394H226" />
    <path
      fill="#ecedee"
      d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261-124-33 7 60 117 32z"
    />
    <path
      fill="#fff"
      d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
    />
  </svg>
);
export default CSSSvg;
