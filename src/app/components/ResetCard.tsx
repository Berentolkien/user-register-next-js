import React from "react";

interface ResetCardProps {
    gradientStartColor: string;
    gradientEndColor: string;
    shadowColor: string;
}

function ResetCard({ gradientStartColor, gradientEndColor }: ResetCardProps) {
    return (
        <div className={`bg-gradient-to-r from-${gradientStartColor} to-${gradientEndColor} bg-opacity-50 p-6 rounded-lg shadow-card w-80`}>
            <h2 className="text-2xl font-semibold mb-4 text-white">Reset Password</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">New Password</label>
                    <input type="password" id="username" className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">Repeat New Password</label>
                    <input type="password" id="password" className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white" />
                </div>

                <div className="flex justify-center space-x-4">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Confirm</button>
                </div>
            </form>
        </div>
    );
}

export default ResetCard;
