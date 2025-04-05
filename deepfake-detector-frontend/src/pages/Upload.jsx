import UploadForm from "../components/UploadForm";

function Upload() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-10">
        <div
          className="w-full md:w-3/5 lg:w-2/5 rounded-[30px] flex flex-col justify-center items-center 
          text-white p-8 md:p-10 backdrop-blur-md bg-white/10 border border-white/10 
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-500"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center tracking-wide text-white/90">
            Upload Your Video
          </h2>
          <p className="text-center text-sm md:text-base text-white/60 mb-6 max-w-md">
            Drop your video or select a file. DeepShield will analyze it and let you know if it's real or synthetic.
          </p>
          <UploadForm />
        </div>
      </div>
    );
  }

export default Upload;
// bg-gradient-to-br from-gray-950 to-gray-800
