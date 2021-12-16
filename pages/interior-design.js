import Footer from '../components/footer'
import NavHeader from '../components/NavHeader'
import NavHeaderSticky from '../components/NavHeaderSticky'

export default function interiorDesign(){
    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <main>
                    <div className="section-header--container">
                        <div className="section-header-child--wrapper section-header-child-left--wrapper">
                            <div className="section-header-child section-header-child-left">
                                interior
                            </div>
                        </div>
                        <div className="section-header-child--wrapper section-header-child-right--wrapper">
                            <div className="section-header-child section-header-child-right">
                                design
                            </div>
                        </div>
                    </div>
                    <div className="demo-slide-sections--wrapper">
                        <img src="/images/demo-slider-sections.png"></img>
                    </div>
                    <style jsx>{`
                        .demo-slide-sections--wrapper {
                            display: flex;
                            justify-content: center;
                            margin-top: 4rem;
                        }
                        .demo-slide-sections--wrapper img {
                            width: 35rem;
                        }
                    `}
                    </style>
                    <div className="sections-list--wrapper">
                        <ul>
                            <li>
                                space planing
                            </li>
                            <li>
                                design consultation
                            </li>
                            <li>
                                furniture selection
                            </li>
                            <li>
                                art curation
                            </li>

                        </ul>
                    </div>
                    <style jsx>{`
                        ul {
                            list-style-type: none;
                            padding-inline-start: 0;
                            width: 28rem;
                        }
                        li{
                            font-size:1.7rem;
                            font-weight: 200;
                            min-width: max-content;
                            margin-bottom: 2rem;
                        }
                        li::before {
                            content: "+";
                            color: black;
                            padding-right: 1rem;
                        }
                        .sections-list--wrapper{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }
                    `}
                    </style>
                </main>
            </div>
            <Footer />
        </>
    )
}
