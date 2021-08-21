import React from 'react';

export default function Loader (props) {
    return (
        <div className="min-h-screen h-20 bg-gray-300 flex justify-center items-center">
            <div className="min-w-min flex space-x-4 p-5 rounded-full justify-center items-center">
                <div
                 className="bg-green-400 p-2 w-4 h-4 rounded-full delay-75 animate-bounce"
                 style={{animationDelay: "0.1s"}}
                >
                </div>
                <div
                 className="bg-green-500 p-2 w-4 h-4 rounded-full animate-bounce"
                 style={{animationDelay: "0.2s"}}
                >
                </div>
                <div
                 className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce"
                 style={{animationDelay: "0.3s"}}
                >
                </div>
            </div>
        </div>
    )
}