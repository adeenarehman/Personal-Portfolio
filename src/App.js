import React from 'react'
import './App.css'
import {Box} from '@mui/material'
import Navbar from './components/navbar/navbar';

export default function App() {
    return (
        <div className='Box'>
            <Box sx={{width:'100%'}}>
                <Navbar />
            </Box>
        </div>
    )
}
