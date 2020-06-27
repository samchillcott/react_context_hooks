import React, { useState } from "react";

const AddMovie = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	const updateName = (e) => {
        // take teh value of input 1 and set it to state
        setName(e.target.value);
    };

    const updatePrice = (e) => {
        // take teh value of input 2 and set it to state
        setPrice(e.target.value);
    };

    // onSubmit

    

	return (
		<form>
			<input type="text" name="name" value={name} onChange={updateName}/>
			<input type="text" name="price" value={price} onChange={updatePrice}/>
			<button>Submit</button>
		</form>
	);
};

export default AddMovie;
