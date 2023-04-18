import React from "react";
import { forwardRef } from "react";

const Weight = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill={props.color}
      viewBox="0 0 16 17"
    >
      <g clipPath="url(#clip0_521_19194)">
        <path d="M13.523.5H2.477A2.48 2.48 0 000 2.977v11.046A2.48 2.48 0 002.477 16.5h11.046A2.48 2.48 0 0016 14.023V2.977A2.48 2.48 0 0013.523.5zm-1.287 4.427L10.46 6.702a.469.469 0 01-.663 0A2.528 2.528 0 008 5.956c-.679 0-1.317.265-1.798.746a.469.469 0 01-.663 0L3.764 4.927a.469.469 0 010-.663A5.952 5.952 0 018 2.508c1.6 0 3.104.624 4.236 1.756a.469.469 0 010 .663z"></path>
        <path d="M4.773 4.61l1.12 1.12A3.454 3.454 0 018 5.018c.771 0 1.505.25 2.108.71l1.118-1.119A5.014 5.014 0 008 3.446c-1.192 0-2.321.41-3.227 1.164z"></path>
      </g>
      <defs>
        <clipPath id="clip0_521_19194">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="translate(0 .5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
});

export default Weight;
