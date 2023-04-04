import { useSnapshot } from "valtio";
import state from "../store";
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
				backgroundColor: "#BA22ff",
				color: "#fff",
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
