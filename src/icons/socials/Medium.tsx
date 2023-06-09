import React from "react";
import { IconProps } from "../interfaces/Icon";

export const MediumIcon = (props: IconProps) => {
    const { height = "24px", width = "24px", fill = "#25314C", className = "" } = props;

    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                fill={fill}
                d="M13 12C13 14.76 10.76 17 8 17C5.24 17 3 14.76 3 12C3 9.24 5.24 7 8 7C10.76 7 13 9.24 13 12ZM16.11 7.19C14.71 7.19 13.57 9.34 13.57 12C13.57 14.66 14.71 16.81 16.11 16.81C17.51 16.81 18.65 14.66 18.65 12C18.65 9.34 17.51 7.19 16.11 7.19ZM20.11 7.69C19.62 7.69 19.22 9.62 19.22 12C19.22 14.38 19.62 16.31 20.11 16.31C20.6 16.31 21 14.38 21 12C21 9.62 20.6 7.69 20.11 7.69Z"
            />
        </svg>
    )
}