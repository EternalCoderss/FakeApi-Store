import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"></div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-xl shadow-xl">
          <h1 className="text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Loading...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
