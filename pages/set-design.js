import Footer from '../components/footer'
import NavHeader from '../components/NavHeader'
import NavHeaderSticky from '../components/NavHeaderSticky'
import WpCarousel from '../components/WpCarousel';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function SetDesign(){
    const [ wpData, setWpData ] = useState([])

    const api_route = "http://nuevabuela.local/wp-json/wp/v2/set_design"

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                api_route,
            );
            const data = [result]
            const trimmedData = data[0].data
            setWpData(trimmedData)
        };
        fetchData();
    }, []);


    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <main>
                    <div className='section-header'>
                        <h1>SET DESIGN</h1>
                    </div>
                    


                    <WpCarousel wpData={wpData}/>

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
                            text-align: center;
                            list-style-type: none;
                            padding-inline-start: 0;
                            width: 28rem;
                            margin-top: 2rem;
                        }
                        li {
                            font-size:1.5rem;
                            font-weight: 200;
                            min-width: max-content;
                            margin-bottom: 1.3rem;
                        }
                        .sections-list--wrapper {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
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


