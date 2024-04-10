'use client';

import React from "react";
import RegisterCard from '../components/RegisterCard';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

function RegisterPage() {
    const bodyGradientStartColor = 'gray-900';
    const bodyGradientEndColor = 'gray-600';
    const shadowColor = 'white';

    return (
        <main>
            <NavBar />
            <motion.div
                className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-600'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
            <RegisterCard 
                gradientStartColor={bodyGradientStartColor} 
                gradientEndColor={bodyGradientEndColor}
                shadowColor={shadowColor}
            />
            </motion.div>
        </main>
    );
}

export default RegisterPage;

