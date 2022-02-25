// import Image from 'next/image'
import Link from 'next/link'

export default function NavHeader() {
    return(
        <>
            <div className="navheader-wrapper">
                <div className="navheader-container">
                    <div className="nuevabuela-logo">
                         {/* <Link passHref href="/">
                            <Image src="/images/nuevabuela_logo.png" alt="Nuevabuela Logo" width="110" height="130" quality="100"/>
                        </Link> */}
                        <Link passHref href="/">
                            <img src="/images/nuevabuela_logo.png" alt="Nuevabuela Logo" style={{ width:"110px", height:"130px" }} />
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
        </>
    )
}