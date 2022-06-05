import React, { useState } from "react";
import data from "./data";
function App() {
	const [textData, setTextData] = useState([]);
	const [inputValue, setInputValue] = useState(0);
	const handleClick = (e) => {
		e.preventDefault();
		let random = Math.floor(Math.random() * data.length);

		if (inputValue < 0 || 10 < inputValue) {
			setTextData([data[random]]);
		} else {
			setTextData(() => {
				return data.slice(0, inputValue);
			});
		}
	};
	// console.log(textData);
	return (
		<main className="section">
			<h2>Lorem ipsium generator</h2>
			<form className="lorem-form" action="">
				<label htmlFor=""> Paragraph :</label>
				<input
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					type="number"
					name=""
					id=""
				/>
				<button type="submit" onClick={(e) => handleClick(e)} className="btn">
					generate
				</button>
			</form>
			<section className="section-center">
				<div className="result">
					{textData.map((elem, index) => {
						return <p key={index}> {elem} </p>;
					})}
				</div>
			</section>
		</main>
	);
}

export default App;
