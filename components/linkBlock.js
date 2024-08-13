import { useState } from 'react';

function Modal({ isOpen, onClose, pdfUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl h-full max-h-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-150 ease-in-out" aria-label="Close modal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <iframe src={pdfUrl} className="w-full h-full" style={{ border: 'none' }} title="PDF Preview" />
      </div>
    </div>
  );
}

export default function LinkBlock({ links }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-8 w-full overflow-hidden">
      <ul className="flex flex-col items-center space-y-4">
        <li className="w-full">
          <div onClick={handleOpenModal} className="bg-black hover:bg-dark duration-default py-4 rounded-xl w-full cursor-pointer">
            <p className="text-center text-white w-fit mx-auto dark:text-black">{links.title}</p>
          </div>
        </li>
      </ul>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} pdfUrl={links.url} />
    </div>
  );
}
