'use client';
import React, { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';

interface RegisterCardProps {
    gradientStartColor: string;
    gradientEndColor: string;
    shadowColor: string;
}

const RegisterCard: React.FC<RegisterCardProps> = ({ gradientStartColor, gradientEndColor, shadowColor }: RegisterCardProps) => {
    const [error, setError] = useState<string | undefined>();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            await axios.post("/api/auth/signup", {
                email: formData.get("email"),
                password: formData.get("password"),
                fullname: formData.get("fullname"),
                confirmPassword: formData.get("confirmPassword")
            });
            
            router.push("/login");
        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError) {
                const errorMessage = error.response?.data.message;
                setError(errorMessage);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <motion.div
        className={`bg-gradient-to-r from-${gradientStartColor} to-${gradientEndColor} bg-opacity-50 p-6 rounded-lg shadow-card w-80`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        >
            <h2 className="text-2xl text-center font-semibold mb-4 text-white">Register</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
                <div className="mb-4">
                    <label htmlFor="fullname" className="block text-gray-300 text-sm font-bold mb-2">Fullname:</label>
                    <input type="text" id="fullname" name= "fullname" className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email:</label>
                    <input type="email" id="email" name="email" className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">Password:</label>
                    <div className="relative">
                        <input type={passwordVisible ? "text" : "password"} name="password" id="password" className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white" />
                        <button type="button" onClick={togglePasswordVisibility} className="absolute top-2 right-3 text-gray-400 focus:outline-none">{passwordVisible ? "Hide" : "Show"}</button>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-300 text-sm font-bold mb-2">Confirm Password:</label>
                <div className="relative">
                    <input type={confirmPasswordVisible ? "text" : "password"} id="confirmPassword" name="confirmPassword" className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white" />
                    <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute top-2 right-3 text-gray-400 focus:outline-none">{confirmPasswordVisible ? "Hide" : "Show"}</button>
                </div>                    
                </div>
                <div className="flex justify-center space-x-4">
                    <motion.button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" whileHover={{ scale: 1.1 }}>Register</motion.button>
                </div>
            </form>
        </motion.div>
    );
}

export default RegisterCard;



