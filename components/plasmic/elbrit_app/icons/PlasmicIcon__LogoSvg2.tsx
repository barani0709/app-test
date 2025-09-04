/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoSvg2Icon(props: LogoSvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 154 32"}
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
            "M14.742 15.157a1.684 1.684 0 0 1 3.368 0v8.42a1.684 1.684 0 1 1-3.368 0z"
          }
          shapeRendering={"crispEdges"}
        ></path>
      </g>

      <g filter={"url(#c)"}>
        <path
          fill={"#fff"}
          fillOpacity={".7"}
          d={
            "M21.055 10.946a1.684 1.684 0 0 1 3.368 0v12.632a1.684 1.684 0 0 1-3.368 0z"
          }
          shapeRendering={"crispEdges"}
        ></path>
      </g>

      <path
        fill={"#101828"}
        d={
          "M44 10.115h5.089V24.69h3.043V10.115h5.089V7.309H44zM60.618 25c1.83 0 3.424-.832 3.923-2.045l.214 1.736h2.544v-7.133c0-3.258-1.95-4.97-5.112-4.97-3.186 0-5.279 1.664-5.279 4.209h2.473c0-1.237.951-1.95 2.663-1.95 1.475 0 2.426.642 2.426 2.235v.261l-3.52.262c-2.782.214-4.351 1.57-4.351 3.733 0 2.211 1.522 3.662 4.019 3.662m.95-2.188c-1.307 0-2.02-.523-2.02-1.593 0-.95.69-1.545 2.496-1.712l2.45-.19v.618c0 1.807-1.142 2.877-2.925 2.877M71.6 10.59a1.75 1.75 0 0 0 1.735-1.76A1.73 1.73 0 0 0 71.6 7.096c-1 0-1.784.761-1.784 1.736s.785 1.76 1.784 1.76m-1.451 14.1h2.9V12.945h-2.9zm8.823-.002V7h-2.877v17.69zm4.968 0 1.404-4.018h6.491l1.403 4.019h3.21L90.171 7.309h-3.115l-6.278 17.382zm4.28-12.197c.167-.476.31-.999.381-1.332.048.357.214.88.357 1.332l1.997 5.611h-4.708zM102.493 25c1.783 0 3.305-.785 4.018-2.14l.19 1.83h2.663V7h-2.877v7.443c-.737-1.166-2.187-1.855-3.828-1.855-3.543 0-5.683 2.615-5.683 6.277 0 3.638 2.116 6.135 5.517 6.135m.642-2.663c-2.022 0-3.258-1.474-3.258-3.567s1.236-3.59 3.258-3.59c2.021 0 3.328 1.474 3.328 3.59s-1.307 3.567-3.328 3.567m12.154 2.353v-6.657c0-1.902 1.117-2.806 2.496-2.806s2.259.88 2.259 2.52v6.944h2.901v-6.658c0-1.926 1.07-2.83 2.473-2.83 1.379 0 2.283.88 2.283 2.569v6.919h2.877v-7.68c0-2.711-1.57-4.423-4.423-4.423-1.783 0-3.162.88-3.757 2.235-.618-1.355-1.855-2.235-3.638-2.235-1.688 0-2.877.76-3.471 1.736l-.238-1.38h-2.663v11.747zm19.587-14.1a1.75 1.75 0 0 0 1.736-1.76 1.73 1.73 0 0 0-1.736-1.735c-.999 0-1.783.761-1.783 1.736s.784 1.76 1.783 1.76m-1.45 14.1h2.901V12.945h-2.901zm8.799-.001v-6.324c0-1.902 1.093-3.139 2.877-3.139 1.498 0 2.473.951 2.473 2.925v6.539h2.901v-7.229c0-3.043-1.522-4.874-4.471-4.874-1.593 0-3.02.69-3.757 1.878l-.237-1.521h-2.687V24.69z"
        }
      ></path>

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
            result={"effect1_dropShadow_1624_24907"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_1624_24907"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>
        </filter>

        <filter
          id={"b"}
          width={"5.368"}
          height={"13.79"}
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
            result={"effect1_dropShadow_1624_24907"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_1624_24907"}
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
            result={"effect1_dropShadow_1624_24907"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_1624_24907"}
            mode={"normal"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default LogoSvg2Icon;
/* prettier-ignore-end */
