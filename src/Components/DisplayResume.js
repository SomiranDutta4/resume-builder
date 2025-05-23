import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const DisplayResume = ({ resumeData, latexCode, setInstructions }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(latexCode).then(
      () => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      },
      (err) => {
        setCopySuccess(false);
        console.error(err);
      }
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        {/* Button to show instructions */}
        <button
          onClick={() => setInstructions(true)}
          className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
          aria-label="View instructions"
        >
          View Instructions
        </button>

        <div className="sticky top-0 z-10 flex justify-end pt-4">
          <button
            className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            onClick={copyToClipboard}
            title="Copy LaTeX code"
            aria-label="Copy LaTeX code"
          >
            <ClipboardDocumentIcon className="w-4 h-4 text-primary_text hover:text-hover_accent" />
          </button>
          {copySuccess && (
            <div
              className="absolute left-1/2 -translate-x-1/2 px-3 py-1 text-sm 
                    bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-100 
                    rounded shadow transition-opacity duration-300"
            >
              Successfully Copied!
            </div>
          )}
        </div>
      </div>

      <h1>Latex Code</h1>

      <pre>{latexCode}</pre>
    </div>
  );
};

export default DisplayResume;
