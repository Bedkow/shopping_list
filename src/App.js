import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
	// [initial value, function used to change the value by passing smth to it later]
	const [inputItemName, setInputItemName] = useState("");
	const [inputItemNumber, setInputItemNumber] = useState("");
	const [arrayOfItems, setArrayOfItems] = useState([
		{ itemName: "", quantity: "", id: "" },
	]);

	const handleChangeNewName = (event) => {
		setInputItemName(event.target.value);
	};

	const handleChangeNewNumber = (event) => {
		setInputItemNumber(event.target.value);
	};

	const handleAddNewItem = () => {
		const newItem = {
			itemName: inputItemName,
			quantity: inputItemNumber,
			id: Math.random(),
		};

		const newArrayOfItems = [...arrayOfItems, newItem];

		setArrayOfItems(newArrayOfItems);
		setInputItemNumber("");
		setInputItemName("");
	};

	return (
		<div>
			<Header />

			<div className="item">
				<input
					value={inputItemName}
					type="text"
					className="name-input"
					placeholder="Item's name..."
					onChange={handleChangeNewName}
				></input>
				<input
					value={inputItemNumber}
					type="number"
					className="number-input"
					placeholder="Quantity..."
					onChange={handleChangeNewNumber}
				></input>
				<div className="btn-container">
					<button className="float-right-btn" onClick={handleAddNewItem}>
						+
					</button>
				</div>
			</div>

			<div className="new-item">
				<span>
					Item name: {inputItemName} Number: {inputItemNumber}
				</span>
			</div>

			<ul>
				{arrayOfItems.map((item) => (
					<li key={item.itemName + item.quantity + item.id}>
						<span>{item.itemName}--- </span>
						<span>{item.quantity}--- </span>
						<span>{item.id} </span>
					</li>
				))}
			</ul>

			<Footer />
		</div>
	);
}

export default App;
