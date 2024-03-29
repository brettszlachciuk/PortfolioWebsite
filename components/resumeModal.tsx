import { useState } from "react";

export default function ResumeModal() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <button
        className=" bg-gradient-to-r from-pink-500 to-purple-200 px-4 text-gray-900 py-2 rounded-md ml-8 mr-4 text-lg font-bold"
        onClick={() => setShowResume(true)}
      >
        Resume
      </button>
      {showResume ? (
        <div className="fixed inset-0 bg-opacity-25 backdrop-blur flex flex-col justify-center items-center">
          <button
            className=" bg-gradient-to-r from-pink-500 to-purple-200 px-4 text-gray-900 py-2 rounded-md ml-8 mr-4 text-lg font-bold"
            onClick={() => setShowResume(false)}
          >
            Close
          </button>
          <iframe src={"../Resume_Brett.pdf"} width="66%" height="100%" />
        </div>
      ) : null}
    </>
  );
}
