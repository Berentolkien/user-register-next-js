'use client';

import React, { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

interface LoginCardProps {
    gradientStartColor: string;
    gradientEndColor: string;
    shadowColor: string;
}

function LoginCard({ gradientStartColor, gradientEndColor }: LoginCardProps) {
    const [error, setError] = useState<string | undefined>();
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn("credentials", {
            email: formData.get("username") as string,
            password: formData.get("password") as string,
            redirect: false,
        });

        if (res?.error) setError(res.error as string);

        if (res?.ok) return router.push("/dashboard/profile");
    };

    return (
        <div className={`bg-gradient-to-r from-${gradientStartColor} to-${gradientEndColor} bg-opacity-50 p-6 rounded-lg shadow-card w-80`}>
            <h2 className="text-2xl font-semibold mb-4 text-white">Login</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-300 text-sm font-bold mb-2">User</label>
                    <input type="text" id="username" name="username" className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                    <input type="text" id="email" name="email" className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" className="bg-gray-800 border-gray-300 border w-full px-3 py-2 rounded-md text-white" />
                </div>
                <div className="flex justify-center space-x-4">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Sign In</button>
                    <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={() => router.push('/register')}>Sign Up</button>
                </div>
                <br /><br />
                <div className="flex justify-center space-x-10">
                    <a href="#" className="mx-2"><i className="fab fa-google text-blue-500 text-2xl"></i></a>
                    <a href="#" className="mx-2"><i className="fab fa-facebook text-blue-500 text-2xl"></i></a>
                    <a href="#" className="mx-2"><i className="fab fa-instagram text-blue-500 text-2xl"></i></a>
                </div>
                <div className="block text-gray-300 text-sm font-bold mb-2"><br></br>
                    <p>Forgot your password? <Link href="/resetpassword" className="text-blue-500">Reset here!</Link></p>
                </div>
            </form>
        </div>
    );
}

export default LoginCard;

