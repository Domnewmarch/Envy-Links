import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { storage } from '../../firebase'; // Import Firebase storage from your firebase config file

export default function NewLink({ onSave }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSave = async () => {
    if (file) {
      try {
        setIsUploading(true);
        const fileRef = ref(storage, `pdfs/${file.name}`);
        await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(fileRef);

        // Set URL to the download URL of the uploaded file
        const formattedUrl = downloadURL;
        onSave({ title, url: formattedUrl });
      } catch (error) {
        console.error('Error uploading file: ', error);
      } finally {
        setIsUploading(false);
        setFile(null); // Clear file after upload
      }
    } else {
      // If no file is selected, use the URL input value
      const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
      onSave({ title, url: formattedUrl });
    }

    // Reset inputs after saving
    setTitle('');
    setUrl('');
  };

  return (
    <div className="bg-white w-11/12 max-w-md mx-auto rounded-xl shadow-md px-3 pt-6 my-4">
      <div className="flex flex-col space-y-4">
        {/* Title Input */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-semibold text-gray-700">
            Title
          </label>
          <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out" />
        </div>

        {/* URL Input */}
        <div className="flex flex-col">
          <label htmlFor="url" className="text-sm font-semibold text-gray-700">
            URL (optional)
          </label>
          <input id="url" type="text" value={url} onChange={e => setUrl(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out" />
        </div>

        {/* File Input */}
        <div className="flex flex-col">
          <label htmlFor="file" className="text-sm font-semibold text-gray-700">
            Upload Menu (optional)
          </label>
          <input id="file" type="file" accept=".pdf" onChange={handleFileChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out" />
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-center">
          <button onClick={handleSave} disabled={isUploading} className="w-full py-3 mb-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out">
            {isUploading ? 'Uploading...' : 'Add Link'}
          </button>
        </div>
      </div>
    </div>
  );
}
