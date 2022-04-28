import Footer from '../components/footer'
import NavHeader from '../components/NavHeader'
import NavHeaderSticky from '../components/NavHeaderSticky'
import Carousel from 'react-elastic-carousel'
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function EventDesign(){
    const [ wpData, setWpData ] = useState([])
    const placeholderSliders = [1,2,3];

    const api_route = "http://nuevabuela.local/wp-json/wp/v2/event_design"

    const backgroundImagesProps = {
        position: 'relative',
        cursor: 'pointer',
        width: '16rem',
        height: '28rem',
        borderRadius: '2.5rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    

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

    useEffect(() => {
        console.log(wpData)
    }, [wpData])
    


    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <main>
                    <div className='section-header'>
                        <h1>EVENT DESIGN</h1>
                    </div>
                    


                    <Carousel breakPoints={[{ width: 300 , itemsToShow: 1 },{ width: 600 , itemsToShow: 2 },{ width: 800, itemsToShow: 3 }]}>
                        
                        {
                            wpData.length === 0 ? 
                            
                            placeholderSliders.map((key) => {
                                return(
                                    <div key={key} style={{ ...backgroundImagesProps, opacity: 0.2, filter: "brightness(0.5)", backgroundImage: "url(/images/placeholders/sliders_placeholder.jpg)" }}></div>
                                )
                            })
                            
                            :
                            
                            wpData.map((slide) => {
                                return(
                                    <div key={slide.better_featured_image.source_url} className="wp-slide-image" style={{ ...backgroundImagesProps, backgroundImage: `url(${slide.better_featured_image.source_url})` }}>
                                        <div className="wp-slide--overlay">
                                        </div>
                                        <div className="wp-slide--caption" dangerouslySetInnerHTML={{__html: slide.content.rendered}}></div>
                                    </div>
                                )
                            })
                        }
                        
                    </Carousel>

                    <div className="sections-list--wrapper">
                        <ul>
                            <li>
                                private celebrations
                            </li>
                            <li>
                                corporate events
                            </li>
                            <li>
                                space setup & decoration
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
                        .wp-slide-image {
                            display: flex;
                            flex-direction: column-reverse;
                        }
                        .wp-slide--overlay {
                            transition: 0.4s;
                            position: absolute;
                            display: flex;
                            flex-direction: column-reverse;
                            border-radius: 2.5rem;
                            height: 100%;
                            width: 100%;
                            opacity: 0;
                            background: linear-gradient(0deg, rgba(2,0,36,0.9073564425770308) 0%, rgba(0,0,0,0.07307072829131656) 60%);
                        }
                        .wp-slide-image:hover .wp-slide--overlay {
                            opacity: 1;
                            filter: brightness(0.5);
                        }
                        .wp-slide--caption {
                            transition: 0.2s;
                            z-index: 1;
                            text-align: justify;
                            text-align: justify !important;
                            opacity: 0;
                            font-family: 'Comforta-l';
                            overflow: hidden;
                            color: white;
                            text-overflow: ellipsis;
                            margin-bottom: 2rem;
                            padding: 0 0.4rem;
                            display: -webkit-box;
                            -webkit-line-clamp: 8;
                            -webkit-box-orient: vertical;
                        }
                        .wp-slide-image:hover .wp-slide--caption {
                            opacity: 1;
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


