'use client';

import React, { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';

interface ResetCardProps {
    gradientStartColor: string;
    gradientEndColor: string;
    shadowColor: string;
}

function ResetCard({ gradientStartColor, gradientEndColor }: ResetCardProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post("/api/auth/resetpassword", { email, newPassword: password });
            console.log(response.data);
            setSuccessMessage("Password reset successfully. Redirecting to login...");
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        } catch (error) {
            console.error("Error resetting password:", error);
            setErrorMessage("Error resetting password. Please try again.");
        }
    };
    const [successMessage, setSuccessMessage] = useState("");
    {successMessage && <div className="text-green-500">{successMessage}</div>}

    return (
        <motion.div
            className={`bg-gradient-to-r from-${gradientStartColor} to-${gradientEndColor} bg-opacity-50 p-6 rounded-lg shadow-card w-80`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
        >
        <h2 className="text-2xl font-semibold text-center mb-4 text-white">Reset Password</h2>
            <form onSubmit={handleSubmit}>
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">New Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-300 text-sm font-bold mb-2">Repeat New Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white"
                        required
                    />
                </div>
                <div className="flex justify-center space-x-4">
                    <motion.button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" whileHover={{ scale: 1.1 }}>Reset Password</motion.button>
                </div>
            </form>
        </motion.div>
    );
}

export default ResetCard;

