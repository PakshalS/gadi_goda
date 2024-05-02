import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-orange-200 w-96 h-96 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Welcome!</h1>
        <div className="space-y-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/table" className="block w-full h-full">Table</Link>
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/grid" className="block w-full h-full">Grid</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
