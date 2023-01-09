import React from 'react'
import { FaTh } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <FaGithub className='icon__git'/>
            <FaTh className='icon__settings'/>
        </header>
    )
}

export default Header