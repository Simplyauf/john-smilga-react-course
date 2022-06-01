import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
	const [MenuDatas, setMenuDatas] = useState(items);

	const handleFilterBtn = (e) => {
		const filteredMenuCategory = items.filter((elem) => elem.category === e.currentTarget.id);

		setMenuDatas(filteredMenuCategory);

		if (e.target.id === "all") {
			setMenuDatas(items);
		}
	};

	return (
		<main className="section">
			<h3 className="title">OUR MENU</h3>
			<div className="underline"></div>

			<div className="btn-container">
				<Categories handleFilterBtn={handleFilterBtn} MenuDatas={MenuDatas} />
			</div>
			<section className="section-center">
				{MenuDatas.map((menuData) => {
					return <Menu key={menuData.id} menuData={menuData} />;
				})}
			</section>
		</main>
	);
}

export default App;
