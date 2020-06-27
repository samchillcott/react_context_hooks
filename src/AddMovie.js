import React, { useState } from "react";

const AddMovie = () => {
	return (
		<form>
			<input type="text" name="name" />
			<input type="text" name="price" />
			<button>Submit</button>
		</form>
	);
};
