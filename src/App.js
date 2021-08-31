import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
	// [initial value, function used to change the value by passing smth to it later]
	const [inputItemName, setInputItemName] = useState("");
	const [inputItemNumber, setInputItemNumber] = useState("");
	const [arrayOfItems, setArrayOfItems] = useState([]);

	const handleChangeNewName = (event) => {
		setInputItemName(event.target.value);
	};

	const handleChangeNewNumber = (event) => {
		setInputItemNumber(event.target.value);
	};

	const handleAddNewItem = () => {
		if (!inputItemName) {
			alert("Please enter the item's name.");
		} else {
			const newItem = {
				itemName: inputItemName,
				quantity: inputItemNumber,
				id: Math.random(),
			};

			const newArrayOfItems = [...arrayOfItems, newItem];

			setArrayOfItems(newArrayOfItems);
			setInputItemNumber("");
			setInputItemName("");
		}
	};

	const handleDeleteAllItems = () => {
		setArrayOfItems([]);
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
					maxLength="50"
				></input>
				<input
					value={inputItemNumber}
					type="number"
					className="number-input"
					placeholder="Quantity..."
					onChange={handleChangeNewNumber}
					min="1"
					max="1000000000"
				></input>
				<div className="btn-container">
					<button className="float-right-btn" onClick={handleAddNewItem}>
						+
					</button>
				</div>

				{/* delete all items */}
				<div className="btn-container">
					<button className="float-right-btn" onClick={handleDeleteAllItems}>
						X
					</button>
				</div>
			</div>

			<div className="new-item-preview">
				<span>
					Item's name: {inputItemName} Quantity: {inputItemNumber}
				</span>
			</div>

			<ul className="list-of-items">
				{arrayOfItems.map((item) => (
					<li
						className="new-item"
						key={item.itemName + item.quantity + item.id}
					>
						<span>
							<input type="checkbox" />
						</span>
						<span>{item.itemName} </span>
						<span>{item.quantity} </span>
					</li>
				))}
			</ul>

			<Footer />
		</div>
	);
}

export default App;
