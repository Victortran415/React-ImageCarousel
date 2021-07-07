import React from "react";
import { SliderData } from "./SliderData";

const ImageSlider = () => {
	return (
		<>
			{SliderData.map((slide, index) => {
				return <img src={slide.image} alt="pet images" />;
			})}
		</>
	);
};

export default ImageSlider;
