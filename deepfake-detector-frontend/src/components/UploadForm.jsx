function UploadForm() {
    return (
      <form className="flex flex-col space-y-4 max-w-md mx-auto">
        <label htmlFor="video" className="text-lg font-medium">Upload Video</label>
        <input type="file" id="video" accept="video/*" className="p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Analyze</button>
      </form>
    );
  }
  
  export default UploadForm;    