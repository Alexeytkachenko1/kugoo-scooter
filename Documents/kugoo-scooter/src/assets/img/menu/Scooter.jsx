import React from "react";
import { forwardRef } from "react";

const Scooter = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill={props.color}
      viewBox="0 0 16 17"
    >
      <g clipPath="url(#clip0_521_19177)">
        <path d="M9.573 5.268l.862-.375L8.834.891H6.512v.939h1.686l1.375 3.438zM14.256 11.271l-2.543-5.908-2.7 1.174.651 1.512-2.324 4.114H5.98a2.96 2.96 0 00-2.958-3.006H0v.94h3.022c1.066 0 2.02.841 2.02 2.066h-.55a2.476 2.476 0 00-2.832-.853A2.478 2.478 0 00.035 13.5a2.475 2.475 0 004.458 1.606H8.79l2.225-3.92.46 1.067a2.47 2.47 0 00.112 2.914 2.468 2.468 0 003.753.148c1.245-1.343.642-3.512-1.084-4.044z"></path>
      </g>
      <defs>
        <clipPath id="clip0_521_19177">
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

export default Scooter;
