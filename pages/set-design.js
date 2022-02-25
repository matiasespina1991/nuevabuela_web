import Footer from '../components/footer'
import NavHeader from '../components/NavHeader'
import NavHeaderSticky from '../components/NavHeaderSticky'

export default function setDesign(){
    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <main>
                    {/* <div className="section-header--container">
                        <div className="section-header-child--wrapper section-header-child-left--wrapper">
                            <div className="section-header-child section-header-child-left">
                                set
                            </div>
                        </div>
                        <div className="section-header-child--wrapper section-header-child-right--wrapper">
                            <div className="section-header-child section-header-child-right">
                                design
                            </div>
                        </div>
                    </div> */}
                    <div className="demo-slide-sections--wrapper">
                        <img src="/images/demo-slider-sections.png"></img>
                    </div>
                    <style jsx>{`
                        .demo-slide-sections--wrapper {
                            display: flex;
                            justify-content: center;
                        }
                        .demo-slide-sections--wrapper img {
                            width: 35rem;
                        }
                    `}
                    </style>
                    <div className="sections-list--wrapper">
                        <ul>
                            <li>
                                sets for shooting
                            </li>
                            <li>
                                art installations
                            </li>
                            <li>
                                pop-ups
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
