import React, { FC } from "react";
interface CoinProps {
	color?: string;
	height?: string;
}
export const RightArrow: FC<CoinProps> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="6.914"
			height={props.height}
			viewBox="0 0 6.914 12.458"
			fill=" #898989"
		>
			<path
				id="Path_6237"
				data-name="Path 6237"
				d="M0,4.5,4.7,0,9.632,4.5"
				transform="translate(5.914 1.414) rotate(90)"
				fill="none"
				stroke={props.color || "#000"}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1"
			/>
		</svg>
	);
};
