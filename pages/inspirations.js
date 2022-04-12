import Footer from '../components/footer'
import NavHeader from '../components/NavHeader'
import NavHeaderSticky from '../components/NavHeaderSticky'
import Gallery from 'react-grid-gallery';

export default function interiorDesign(){

    const IMAGES =
[{
    src: "/images/stock_examples/stock1.png",
    thumbnail: "/images/stock_examples/stock1.png",
    caption: ""
},
{
    src: "/images/stock_examples/stock2.jpg",
    thumbnail: "/images/stock_examples/stock2.jpg",
    caption: ""
},

{
    src: "/images/stock_examples/stock3.jpg",
    thumbnail: "/images/stock_examples/stock3.jpg",
    caption: ""
},
{
    src: "/images/stock_examples/stock4.jpg",
    thumbnail: "/images/stock_examples/stock4.jpg",
    caption: "",
},
{
    src: "/images/stock_examples/stock5.jpg",
        thumbnail: "/images/stock_examples/stock5.jpg",
        caption: ""
},
{
    src: "/images/stock_examples/stock6.jpg",
        thumbnail: "/images/stock_examples/stock6.jpg",
        caption: ""
},
{
    src: "/images/stock_examples/stock7.jpg",
        thumbnail: "/images/stock_examples/stock7.jpg",
        caption: ""
},
{
    src: "/images/stock_examples/stock8.jpg",
        thumbnail: "/images/stock_examples/stock8.jpg",
        caption: ""
},
{
    src: "/images/stock_examples/stock9.jpg",
        thumbnail: "/images/stock_examples/stock9.jpg",
        caption: ""
},
{
    src: "/images/stock_examples/stock10.jpg",
        thumbnail: "/images/stock_examples/stock10.jpg",
        caption: ""
},
{
    src: "/images/stock_examples/stock11.jpg",
        thumbnail: "/images/stock_examples/stock11.jpg",
        caption: ""
},
{
    src: "/images/stock_examples/stock12.jpg",
        thumbnail: "/images/stock_examples/stock12.jpg",
        caption: ""
},
{
    src: "/images/stock_examples/stock13.jpg",
        thumbnail: "/images/stock_examples/stock13.jpg",
        caption: ""
}
]

    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <main>
                    <div className='section-header'>
                        <h1>INSPIRATIONS</h1>
                    </div>

                        <Gallery id="inspirations-gallery" margin="30px" rowHeight="360px" images={IMAGES}/>
                    <style jsx>{`
                        
                    `}
                    </style>
                </main>
                <Footer />
            </div>
            {/* <Footer /> */}
        </>
    )
}
