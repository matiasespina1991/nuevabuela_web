import Footer from '../components/footer'
import NavHeader from '../components/NavHeader'
import NavHeaderSticky from '../components/NavHeaderSticky'
import Carousel from 'react-elastic-carousel'

export default function interiorDesign(){

    const slides = [
        {
            src: '/images/stock_examples/stock1.png'
        },
        {
            src: '/images/stock_examples/stock2.jpg'
        },
        {
            src: '/images/stock_examples/stock3.jpg'
        },
        {
            src: '/images/stock_examples/stock4.jpg'
        },
        {
            src: '/images/stock_examples/stock5.jpg'
        }
    ]

    const backgroundImagesProps = {
        width: '16rem',
        height: '28rem',
        borderRadius: '2.5rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <main>
                    <div className='section-header'>
                        <h1>INTERIOR DESIGN</h1>
                    </div>
                    

                    <Carousel breakPoints={[{ width: 300 , itemsToShow: 1 },{ width: 600 , itemsToShow: 2 },{ width: 800, itemsToShow: 3 }]}>
                        {slides.map((slide) => {
                            console.log(slide)
                            return(
                                <div key={slide.src} style={{ ...backgroundImagesProps, backgroundImage: `url(${slide.src})` }}></div>
                            )
                        })}
                    </Carousel>

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
                            text-align: center;
                            list-style-type: none;
                            padding-inline-start: 0;
                            width: 28rem;
                            margin-top: 2rem;
                        }
                        li{
                            font-size:1.5rem;
                            font-weight: 200;
                            min-width: max-content;
                            margin-bottom: 1.3rem;
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
            {/* <Footer /> */}
        </>
    )
}
