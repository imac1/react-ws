import React from "react";

export default function Dice(props) {
	const diceSymbols = [
		"\u2680",
		"\u2681",
		"\u2682",
		"\u2683",
		"\u2684",
		"\u2685",
	];

	return (
		<div className="dice" style={{ fontSize: "50px" }}>
			<h2>{props.value != null ? diceSymbols[props.value - 1] : "-"}</h2>
		</div>
	);
}
