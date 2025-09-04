/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoIconSvgIcon(props: LogoIconSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#465FFF"}
        d={
          "M0 8.421C0 3.771 3.77 0 8.421 0H23.58C28.229 0 32 3.77 32 8.421V23.58c0 4.649-3.77 8.42-8.421 8.42H8.42A8.42 8.42 0 0 1 0 23.579z"
        }
      ></path>

      <g filter={"url(#a)"}>
        <path
          fill={"#fff"}
          d={
            "M8.424 8.422a1.684 1.684 0 1 1 3.368 0v15.157a1.684 1.684 0 1 1-3.368 0z"
          }
        ></path>
      </g>

      <g filter={"url(#b)"}>
        <path
          fill={"#fff"}
          fillOpacity={".9"}
          d={
            "M14.742 15.157a1.684 1.684 0 1 1 3.369 0v8.42a1.684 1.684 0 1 1-3.369 0z"
          }
          shapeRendering={"crispEdges"}
        ></path>
      </g>

      <g filter={"url(#c)"}>
        <path
          fill={"#fff"}
          fillOpacity={".7"}
          d={
            "M21.055 10.946a1.684 1.684 0 0 1 3.368 0v12.632a1.684 1.684 0 1 1-3.368 0z"
          }
          shapeRendering={"crispEdges"}
        ></path>
      </g>

      <defs>
        <filter
          id={"a"}
          width={"5.368"}
          height={"20.526"}
          x={"7.424"}
          y={"6.237"}
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={".5"}></feOffset>

          <feGaussianBlur stdDeviation={".5"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            mode={"normal"}
            result={"effect1_dropShadow_1884_16361"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_1884_16361"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>
        </filter>

        <filter
          id={"b"}
          width={"5.368"}
          height={"13.789"}
          x={"13.742"}
          y={"12.973"}
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={".5"}></feOffset>

          <feGaussianBlur stdDeviation={".5"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            mode={"normal"}
            result={"effect1_dropShadow_1884_16361"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_1884_16361"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>
        </filter>

        <filter
          id={"c"}
          width={"5.368"}
          height={"18"}
          x={"20.055"}
          y={"8.762"}
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            result={"hardAlpha"}
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
          ></feColorMatrix>

          <feOffset dy={".5"}></feOffset>

          <feGaussianBlur stdDeviation={".5"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            type={"matrix"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            mode={"normal"}
            result={"effect1_dropShadow_1884_16361"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_1884_16361"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default LogoIconSvgIcon;
/* prettier-ignore-end */
