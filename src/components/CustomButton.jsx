import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";
export default function CustomButton({
	title,
	type,
	customStyles,
	handleClick,
}) {
	const snap = useSnapshot(state);

	function generateStyle(type) {
		if (type === "filled") {
			return {
				backgroundColor: snap.color,
				color: getContrastingColor(snap.color),
			};
		} else if (type === "outlined") {
			return {
				// borderWidth: "1px",
				// borderColor: snap.color,
				border: `1px solid ${snap.color}`,
				color: snap.color,
			};
		}
	}

	return (
		<button
			className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
			style={generateStyle(type)}
			onClick={handleClick}
		>
			{title}
		</button>
	);
}
