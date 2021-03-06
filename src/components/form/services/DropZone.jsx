import Dropzone from "react-dropzone";
import { toast } from "react-toastify";
/**
 * @memberof form
 *
 * @param fileHandler  @type function @description function to read and parse delivered file
 *
 * @example <DropZone fileHandler ={(file)=>console.log(file)}/>
 */

function DropZone({ fileHandler }) {
    return (
        <Dropzone
            onDrop={async (acceptedFiles) => {
                let isFilesCorrect = await fileHandler(acceptedFiles);
                if (isFilesCorrect) {
                    document.getElementById("selectedFileLabel").innerHTML =
                        acceptedFiles[0]["path"];
                    toast.success("Successfuly added file", acceptedFiles[0]["path"]);
                }
            }}
            maxFiles={1}
            accept={".xlsx"}
        >
            {({ getRootProps, getInputProps }) => (
                <div className="form-group">
                    <div
                        {...getRootProps()}
                        className="file-drop-area"
                    >
                        <div className="mb-3">
                            <span className="choose-file-button">Choose files</span>
                            <span
                                className="file-message"
                                id="selectedFileLabel"
                            >
                                or drag and drop files here
                            </span>
                        </div>
                        <div className="file-message">
                            <em>(Only *.xlsx files will be accepted)</em>
                        </div>
                        <input
                            {...getInputProps()}
                            className="file-input"
                            type="file"
                        />
                    </div>
                </div>
            )}
        </Dropzone>
    );
}

export default DropZone;
