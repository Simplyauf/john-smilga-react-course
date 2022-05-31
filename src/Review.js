import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

let currentQuotePositon = 0;
const Review = () => {
	const [currentQuote, setCurrentQuote] = useState(people[currentQuotePositon]);

	let { image, name, text, job } = currentQuote;

	const handlePrevClickBtn = () => {
		currentQuotePositon--;

		if (currentQuotePositon < 0) {
			currentQuotePositon = 3;
			return setCurrentQuote(people[people.length - 1]);
		} else {
			setCurrentQuote(() => {
				return people[currentQuotePositon];
			});
		}
	};

	const handleNextBtn = () => {
		currentQuotePositon++;

		if (currentQuotePositon > people.length - 1) {
			currentQuotePositon = 0;
			return setCurrentQuote(people[0]);
		} else {
			setCurrentQuote(() => {
				return people[currentQuotePositon];
			});
		}
	};

	const randomBtn = () => {
		let randomNo = Math.floor(Math.random() * people.length);

		let currentArr = people[randomNo];
		setCurrentQuote(currentArr);
	};
	return (
		<div className="review">
			<div className="img-container">
				<img className="person-img" src={image} alt={name} />
				<FaQuoteRight className="quote-icon" />
			</div>
			<h2 className="author">{name}</h2>
			<h4 className="job">{job} </h4>
			<p className="info"> {text}</p>
			<div>
				<FaChevronLeft onClick={handlePrevClickBtn} className="prev-btn" />
				<FaChevronRight onClick={handleNextBtn} className="next-btn" />
			</div>
			<button className="random-btn" onClick={randomBtn}>
				surprise me
			</button>
		</div>
	);
};

export default Review;
