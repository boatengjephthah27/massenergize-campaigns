import React, { useState } from "react";

const FileUploader = ({ text }) => {
	const [file, setFile] = useState(null);
	const [previewUrl, setPreviewUrl] = useState(null);

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		setFile(selectedFile);

		if (selectedFile) {
			const fileReader = new FileReader();
			fileReader.onload = () => {
				setPreviewUrl(fileReader.result);
			};
			fileReader.readAsDataURL(selectedFile);
		}
	};

	return (
		<div className="file-upload">
			<label htmlFor="file-input" className="file-input-label">
				<input type="file" id="file-input" onChange={handleFileChange} />
				<div>
					{previewUrl && (
						<img src={previewUrl} alt="Preview" className="preview-image" />
					)}
				</div>
			</label>
			<p
				style={{
					color: "#9CA3AF",
				}}
			>
				{" "}
				{text}
			</p>
		</div>
	);
};

export default FileUploader;
