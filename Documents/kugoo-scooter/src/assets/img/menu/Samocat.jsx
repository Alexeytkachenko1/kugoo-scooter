import React from "react";
import { forwardRef } from "react";

const Samocat = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill={props.color}
      viewBox="0 0 16 17"
    >
      <g>
        <path d="M10.969 13.337H5.027a2.949 2.949 0 010 2.269h5.942a2.949 2.949 0 010-2.269zM13.835 11.51L12.685.5h-3.11v.937h2.266l1.063 10.182a2.957 2.957 0 01.93-.11zM15.74 14.472a2.03 2.03 0 00-2.028-2.028 2.03 2.03 0 00-2.028 2.028 2.03 2.03 0 002.028 2.028 2.03 2.03 0 002.028-2.028zM8 8.09c.74 0 1.453.311 1.956.854l.688-.637A3.616 3.616 0 008 7.152c-1 0-1.964.421-2.645 1.155l.688.637A2.676 2.676 0 018 8.09z"></path>
        <path d="M6.508 9.747l.775.527a.863.863 0 011.428 0l.776-.527a1.8 1.8 0 00-2.98 0zM4.318 14.472a2.03 2.03 0 00-2.028-2.028 2.03 2.03 0 00-2.028 2.028A2.03 2.03 0 002.29 16.5a2.03 2.03 0 002.028-2.028z"></path>
      </g>
      <defs>
        <clipPath id="clip0_521_19169">
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

export default Samocat;
