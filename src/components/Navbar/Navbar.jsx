import './Navbar.scss'
import { images } from '../../constants' 
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { BsLinkedin, BsGithub, BsTwitterX } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
    const [animate, setAnimate] = useState({x: 300, opacity: 0})
    const links = ['home', 'about', 'work', 'skills', 'contact']
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="" />
            </div>
            <ul className='app__navbar-links'>
                {links.map(item => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu" onClick={() => setAnimate({x: 0, opacity: 1})}>
                <HiMenuAlt4 />
            </div>
            <motion.div
                animate={animate}
                transition={{duration: 0.85, ease: 'easeInOut'}}
                className='menu'
            >
                <HiX onClick={() => setAnimate({x: 300, opacity: 0})} />
                <ul>
                    {links.map(item => (
                        <li key={item}>
                            <a href={`#${item}`} onClick={() => setAnimate({x: 300, opacity: 0})}>{item}</a>
                        </li>
                    ))}
                    <li>
                        <a href={images.resume} rel="noreferrer" target="_blank">My Resume</a>
                    </li>
                    <div className='app__flex'>
                        <h2>Let&lsquo;s Collaborate</h2>
                        <div className='socials'>
                            <a href='https://x.com/dev_lawal' target='blank'>
                                <BsTwitterX />
                            </a>
                            <a href='https://www.linkedin.com/in/yusuf-lawal-2b5ab6241/' target='blank'>
                                <BsLinkedin />
                            </a>
                            <a href='https://github.com/YusufsDesigns' target='blank'>
                                <BsGithub />
                            </a>
                            <a href="mailto: yusuf.olaoluwalawal@outlook.com">
                                <MdEmail />
                            </a>
                        </div>
                    </div>
                </ul>
            </motion.div>
        </nav>
    )
}

export default Navbar