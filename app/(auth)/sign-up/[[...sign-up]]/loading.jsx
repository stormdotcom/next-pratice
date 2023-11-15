import React from "react";

const loading = () => {
    return <div className="animate-pulse flex items-center justify-center h-screen">
        <div className="bg-gray-300 h-16 w-16 rounded-full"></div>
        <div className="ml-4 text-gray-700">Loading...</div>
    </div>;
};

export default loading;
