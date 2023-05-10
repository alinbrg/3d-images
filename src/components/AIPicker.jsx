import CustomButton from "./CustomButton";

export default function AIPicker({
	prompt,
	setPrompt,
	generatingImg,
	handleSubmit,
}) {
	return (
		<div className="aipicker-container">
			<textarea
				name=""
				id=""
				cols="30"
				placeholder="Ask AI..."
				rows="5"
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				className="aipicker-textarea"
			></textarea>
			<div className="flex flex-wrap gap-3">
				{generatingImg ? (
					<CustomButton
						type="outlined"
						title="Asking Ai..."
						customStyles="text-xs"
					/>
				) : (
					<>
						<CustomButton
							type="outlined"
							title="Ai Logo"
							customStyles="text-xs"
							handleClick={() => handleSubmit("logo")}
						/>
						<CustomButton
							type="filled"
							title="Ai Full"
							customStyles="text-xs"
							handleClick={() => handleSubmit("full")}
						/>
					</>
				)}
			</div>
		</div>
	);
}
