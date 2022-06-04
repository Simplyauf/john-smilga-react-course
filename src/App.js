import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import data from "./data";
import { PersonReview } from "./personArticle";
function App() {
	const [reviewDatas, setReviewDatas] = useState(data);
	let [index, setIndex] = useState(0);

	useEffect(() => {
		if (index > reviewDatas.length - 1) {
			setIndex(0);
		}
		if (index < 0) {
			setIndex(reviewDatas.length - 1);
		}
	}, [index]);

	useEffect(() => {
		let autoSet = setInterval(() => {
			setIndex(index + 1);
		}, 4000);

		return () => {
			clearInterval(autoSet);
		};
	}, [index]);

	const handleNext = () => {
		setIndex(index + 1);
	};

	const handlePrev = () => {
		setIndex(index - 1);
	};

	return (
		<main>
			<div className="title">
				<h2>
					<span> /</span> Reviews
				</h2>
			</div>
			<div className="section-center">
				{reviewDatas.map((reviewData, reviewDataIndex) => {
					let position = "nextSlide";
					if (reviewDataIndex === index) {
						position = "activeSlide";
					}

					return <PersonReview key={reviewData.id} position={position} reviewData={reviewData} />;
				})}
				<FiChevronLeft className="prev" onClick={handlePrev} />
				<FiChevronRight className="next" onClick={handleNext} />
			</div>
		</main>
	);
}

export default App;
