import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
	const [curr, setCurr] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1)
    }
    const prevSlide = () => {
        setCurr(curr === 0 ? length - 1 : curr - 1)
    }
    console.log(curr)
    
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

	return (
		<section className="slider">
			<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
			<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
			{SliderData.map((slide, index) => {
				return <img src={slide.image} alt="pet images" className='image'/>;
			})}
		</section>
	);
};

export default ImageSlider;
