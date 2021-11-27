import Image from 'next/image'
import Link from 'next/link'

export default function NavHeader() {
    return(
        <>
            <div className="navheader-wrapper">
                <div className="navheader-container">
                    <div className="nuevabuela-logo">
                        <Link href="/">
                            <Image src="/images/nuevabuela-logo5.png" alt="Nuevabuela Logo" width="141" height="140" quality="100"/>
                        </Link>
                    </div>
                    <nav className="nav-container">
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Interior Design</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Set Design</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
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