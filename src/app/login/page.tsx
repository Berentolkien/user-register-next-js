'use client';

import React from 'react';
import LoginCard from '../components/LoginCard';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

function RegisterPage() {
    const bodyGradientStartColor: string = 'gray-900';
    const bodyGradientEndColor: string = 'gray-600';
    const shadowColor: string = 'white';

    return (
        <main>
            <NavBar />
            <motion.div
            className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-600'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            <LoginCard
                gradientStartColor={bodyGradientStartColor} 
                gradientEndColor={bodyGradientEndColor}
                shadowColor= {shadowColor}
            />
            </motion.div>
        </main>
    );
}

export default RegisterPage;
