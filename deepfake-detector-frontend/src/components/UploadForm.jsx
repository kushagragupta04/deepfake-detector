import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadForm() {
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [showDropBox, setShowDropBox] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setIsFadingOut(true);
      setTimeout(() => {
        setShowDropBox(false);
        setIsFadingOut(false);
      }, 400);
    }
  };

  const handleRemove = () => {
    setVideo(null);
    setShowDropBox(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video) {
      setMessage("Please select a video before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", video);

    try {
      setUploading(true);
      setMessage("");

      const response = await fetch("http://3.110.12.47:8000/detect", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Response:", result);
        navigate("/results", { state: result }); // Pass the result to results page
      } else {
        navigate("/results", { state: { error: `Upload failed: ${result.error || "Unknown error"}` } });
      }
    } catch (error) {
      console.error("Error uploading:", error);
      navigate("/results", { state: { error: "Something went wrong during upload." } });
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      {/* Mobile */}
      <div className="block md:hidden mb-4">
        <input
          type="file"
          accept="video/mp4"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-300 bg-gray-800 border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Desktop Drop Zone */}
      {showDropBox && (
        <div className="w-full flex justify-center">
          <label
            htmlFor="video-desktop"
            className={`w-11/12 md:w-3/5 flex flex-col items-center justify-center border-2 border-dashed border-gray-500 text-gray-300 py-14 px-6 rounded-xl cursor-pointer transition-all duration-500 ${
              isFadingOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <span className="mb-2 text-lg">Click or Drag & Drop your video</span>
            <input
              type="file"
              accept="video/mp4"
              id="video-desktop"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      )}

      {/* Uploaded File View */}
      {!showDropBox && video && (
        <div className="w-full flex justify-center mt-4">
          <div className="p-4 w-11/12 md:w-3/5 bg-[#2cff480d] text-white rounded-2xl border-2 border-green-500 transition-all duration-500 shadow-lg">
            <p className="text-center text-lg font-semibold">Uploaded File:</p>
            <p className="text-center text-blue-400 mt-1 break-all">{video.name}</p>

            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={handleRemove}
                type="button"
                className="px-4 py-2 bg-red-600/45 hover:bg-red-700 text-white rounded-md transition-all"
              >
                Remove File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Message */}
      {message && (
        <p className="text-center text-sm text-blue-400">{message}</p>
      )}

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          disabled={uploading}
          className={`px-6 py-3 ${
            uploading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
          } text-white font-semibold rounded-md transition-all`}
        >
          {uploading ? "Uploading..." : "Submit Video"}
        </button>
      </div>
    </form>
  );
}

export default UploadForm;
