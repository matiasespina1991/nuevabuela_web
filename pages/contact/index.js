import Footer from '../../components/footer'
import NavHeader from '../../components/NavHeader'
import NavHeaderSticky from '../../components/NavHeaderSticky'
import ResponsiveMenu from '../../components/ResponsiveMenu'

export default function interiorDesign(){

    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <ResponsiveMenu />
                <main>
                    <div className='section-header'>
                        <h1>CONTACT</h1>
                    </div>
                    

                    <div className="contact-section--body">
                        <ul>
                            <li>
                                <a className="contact-page-link" href="mailto:info@nuevabuela.com">info@nuevabuela.com</a>  
                            </li>
                            <li>
                                Laura: <a className="contact-page-link" href="tel:+49(0)15127950874">+49 (0) 15127950874</a>  
                            </li>
                            <li>
                                Sara: <a className="contact-page-link" href="tel:+49(0)17680104420">+49 (0) 17680104420</a>  
                            </li>
                        </ul>
                    </div>
                    <style jsx>{`
                        .contact-section--body {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            text-align: center;
                            height: 9rem;
                        }
                        .contact-section--body li:hover .contact-page-link {
                            text-decoration: underline;
                            cursor: pointer;
                        }
                        .contact-section--body ul {
                            padding: 0;
                        }
                        .contact-section--body li {
                            list-style-type: none;
                            margin: 1rem 0;
                        }
                    `}
                    </style>
                </main>
                <Footer />
            </div>
            {/* <Footer /> */}
        </>
    )
}
