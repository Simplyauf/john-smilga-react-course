import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./index.css";

function App() {
	const [profileDatas, setprofileDatas] = useState(data);

	const handleClick = () => {
		setprofileDatas([]);
	};

	return (
		<main>
			<section className="container">
				<h3> {profileDatas.length} birthdays today</h3>
				<div className="">
					{profileDatas.map((profileData, index) => {
						console.log(profileData);
						return <List key={index} profileData={profileData} />;
					})}
				</div>
				<button onClick={handleClick}>Clear All</button>
			</section>
		</main>
	);
}

export default App;
