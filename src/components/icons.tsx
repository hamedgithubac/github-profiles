import React from 'react';
export const CodeIcon = (props: any) => {
  return (
    <svg
      className={props.class}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g data-name="Layer 2">
        <g data-name="code">
          <rect
            width="24"
            height="24"
            transform="rotate(90 12 12)"
            opacity="0"
          />
          <path d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41z" />
          <path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z" />
        </g>
      </g>
    </svg>
  );
};
export const StarIcon = (props: any) => {
  return (
    <svg
      className={props.class}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g data-name="Layer 2">
        <g data-name="star">
          <rect
            width="24"
            height="24"
            transform="rotate(90 12 12)"
            opacity="0"
          />
          <path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z" />
        </g>
      </g>
    </svg>
  );
};
export const CopyIcon = (props: any) => {
  return (
    <svg
      className={props.class}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g data-name="Layer 2">
        <g data-name="copy">
          <rect width="24" height="24" opacity="0" />
          <path d="M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3z" />
        </g>
      </g>
    </svg>
  );
};
export const SearchIcon = (props: any) => {
  return (
    <svg
      className={props.class}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g data-name="Layer 2">
        <g data-name="search">
          <rect width="24" height="24" opacity="0" />
          <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
        </g>
      </g>
    </svg>
  );
};
export const Preloader = (props: any) => {
  return (
    <svg
      className={props.class}
      xmlns="http://www.w3.org/2000/svg"
      width="137px"
      height="137px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#e15b64"
        stroke-width="10"
        r="42"
        stroke-dasharray="197.92033717615698 67.97344572538566"
        transform="rotate(43.8682 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="0.625s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};
