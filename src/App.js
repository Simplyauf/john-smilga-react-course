import React, { useState } from "react";
import data from "./data";
import { SingleQuestion } from "./Question";
function App() {
	const [dataArr, setdataArr] = useState(data);
	return (
		<main className="section">
			<div className="container">
				<h2>Questions and answers about Login</h2>
				{dataArr.map((datas) => {
					return <SingleQuestion key={datas.id} data={datas} />;
				})}
			</div>
		</main>
	);
}

export default App;
