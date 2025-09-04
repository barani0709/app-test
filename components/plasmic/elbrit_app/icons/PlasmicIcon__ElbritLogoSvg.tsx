/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ElbritLogoSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ElbritLogoSvgIcon(props: ElbritLogoSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#E4002B"} d={"M0 0h50v50H0z"}></path>

      <path
        fill={"#fff"}
        d={
          "M25 10c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13m0 22c-4.523 0-8-3.477-8-9s3.477-9 8-9 8 3.477 8 9-3.477 9-8 9"
        }
      ></path>

      <path
        fill={"#1A237E"}
        d={
          "M55 10h10v30H55zm15 0h10v30H70zm15 0h10v30H85zm15 0h10v30h-10zm15 0h10v30h-10zm15 0h10v30h-10zm15 0h10v30h-10z"
        }
      ></path>

      <circle cx={"160"} cy={"15"} r={"5"} fill={"#E4002B"}></circle>

      <path fill={"#1A237E"} d={"M165 10h10v30h-10zm15 0h10v30h-10z"}></path>
    </svg>
  );
}

export default ElbritLogoSvgIcon;
/* prettier-ignore-end */
