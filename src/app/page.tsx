'use client';

import React from 'react';
import NavBar from './components/NavBar';
import { motion } from 'framer-motion';

export default function Home() {
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
        <h1 className='text-4xl font-bold mb-4 text-white'>Hola Ademass!!</h1>
        <p className='text-lg text-gray-300'>En este ejercicio, vas a poder generar un registro de usuario convencional, Ademass vas a poder cambiar tu password... a programar!!</p><br></br>
      </motion.div>
    </main>  
  );
}