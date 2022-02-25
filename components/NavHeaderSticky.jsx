// import Image from 'next/image'
import Link from 'next/link'
import { useRef , useEffect, useState } from 'react'
import Image from 'next/image'


export default function NavHeader() {
    const [ showSticky , setShowSticky ] = useState(false)

    useEffect(() => {

        function getOffsetTop(){
            const stickyReachedArea = document.body.getBoundingClientRect().top <= -250

            if(stickyReachedArea){
                setShowSticky(true)
            } else {
                    setShowSticky(false)
            }
            console.log(showSticky)
        }

        window.addEventListener('scroll', getOffsetTop)
        return () => {
            window.removeEventListener('scroll', getOffsetTop)
        }
    }, [showSticky])

    const headerSticky_wrapper = useRef()
    return(
        <>
            <div ref={headerSticky_wrapper} className={`navheader-wrapper navheader-sticky-wrapper ${showSticky ? "sticky-active" : "sticky-hidden"}`}>
                <div className="sticky-header-logo--wrapper">
                    <img src="/images/nuevabuela_logo_final3.png" alt="" />
                </div>
                <div className="navheader-container">
                    <div className="nuevabuela-logo">
                        <Link href="/" passHref>
                            <img src="/images/nuevabuela_logo.png" alt="Nuevabuela Logo" width="110" height="130" />
                            {/* <Image src="/images/nuevabuela_logo.png" alt="Nuevabuela Logo" width="110" height="130" quality="100"/> */}
                        </Link>
                    </div>
                    <nav className="nav-container">
                        <ul>
                            <li>
                                <Link href="/" scroll={false}>
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/interior-design" scroll={false}>
                                    <a>Interior Design</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/set-design" scroll={false}>
                                    <a>Set Design</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/event-design" scroll={false}>
                                    <a>Event Design</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Inspirations</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <style jsx>
                {`
                .sticky-header-logo--wrapper img {
                    width: 3rem;
                    padding: 0.1rem;
                }
                .sticky-header-logo--wrapper {
                    align-self: end;
                    position:absolute;
                    left: 5rem;
                }
                .navheader-sticky-wrapper {
                    position: fixed;
                    width: 100%;
                    top: -11rem;
                    background-color: white;
                    z-index: 99;
                }
                .sticky-hidden {
                    top:-16rem;
                    transition: 0.2s;
                    opacity: 0;
                    pointer-events: none;
                }
                .sticky-active {
                    transition: 0.1s;
                    top:-11rem;
                    opacity: 1;
                    pointer-events: all;
                }
                `}
            </style>
        </>
    )
}