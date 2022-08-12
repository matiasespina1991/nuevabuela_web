import {Squash as Hamburger} from 'hamburger-react'
import { useState } from 'react'
import Link from 'next/link';

export default function ResponsiveMenu() {
    const [isOpen, setOpen] = useState(false)
    return(
        <>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div className='responsive-nueva-abuela-logo-wrapper'>
                <div className='responsive-nueva-abuela-logo-container'>
                    <img src="/images/nuevabuela_logo.png" alt="Nuevabuela Logo" style={{ width: '100%' }} />
                </div>
            </div>
            <div className="responsive-menu--container">
                <div className="responsive-menu--wrapper">
                    <Link href="/">HOME</Link>
                    <Link href="/interior-design">INTERIOR DESIGN</Link>
                    <Link href="/set-design">SET DESIGN</Link>
                    <Link href="/event-design">EVENT DESIGN</Link>
                    <Link href="/inspirations">INSPIRATIONS</Link>
                    <Link href="/contact">CONTACT</Link>
                </div>
            </div>
            <style jsx>{`
                .responsive-menu--container{
                    transition: 0.4s;
                    right: ${isOpen ? '10%' : '110%'};
                }
                .responsive-menu--wrapper {
                    display: ${isOpen ? 'flex' : 'none'};
                    height: 31rem;
                    flex-direction: column;
                    justify-content: space-around;
                    width: 100%;
                    margin-left: 4rem;
                    margin-top: 8rem;
                }
            `}</style>
        </>
    )
};
