"use client";
import React from "react";
import { motion } from "motion/react";

type SpotlightProps = {
	conicSize?: number; // ⬅️  new
	conicOpacity?: number; // ⬅️  new
	gradientFirst?: string;
	gradientSecond?: string;
	gradientThird?: string;
	translateY?: number;
	width?: number;
	height?: number;
	smallWidth?: number;
	duration?: number;
	xOffset?: number;
	className?: string;
};

export const Spotlight = ({
	conicSize = 500,
	conicOpacity = 0.25,
	className = "",
	...props
}: SpotlightProps = {}) => {
	return (
		<div className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className}`}>
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -60%)", // slightly above center for stage effect
					width: `${conicSize}px`,
					height: `${conicSize * 0.6}px`, // elliptical for a more realistic spotlight
					background: `radial-gradient(ellipse at center, rgba(255,255,220,${conicOpacity}) 0%, rgba(255,255,220,0.08) 60%, rgba(255,255,220,0) 100%)`,
					filter: "blur(8px)",
					borderRadius: "50%",
					boxShadow: `0 0 80px 40px rgba(255,255,220,${conicOpacity * 0.7})`,
					zIndex: 1,
				}}
			/>
		</div>
	);
};
