import axios from 'axios';
import { useState, useEffect } from 'react';
import ResponsiveMenu from '../../components/ResponsiveMenu'
import Footer from '../../components/footer'
import NavHeader from '../../components/NavHeader'
import NavHeaderSticky from '../../components/NavHeaderSticky'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { cms_path } from '../api/cms_path';
import demoInspirations from '../../components/demo_data/demoInspirations'
import Link from 'next/link';

export default function Shop(){
    const [ wpData, setWpData ] = useState([])
    const [ inspirationImages, setInspirationImages ] = useState([])

    const backgroundImagesProps = {
        position: 'relative',
        cursor: 'pointer',
        width: '100%',
        borderRadius: '2.5rem',
        transition: 'background-size 3s ease-out',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    useEffect(() => {
        const api_route = `https://${cms_path}/wp-json/wp/v2/shop/?per_page=50`

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

    useEffect(()=>{
        buildArrayOfInspirationImages(wpData)
    },[wpData])


    function buildArrayOfInspirationImages(wpInspirationImages){
        const arrayOfObjects = []

        wpInspirationImages.forEach((inspirationImage)=>{
            const imageSrc = inspirationImage.better_featured_image.source_url
            const rowsNum = inspirationImage.rows.length >= 1 ? parseInt(inspirationImage.rows) : 1
            const columnsNum = inspirationImage.columns.length >= 1 ? parseInt(inspirationImage.columns) : 1
            const inspirationTitle = inspirationImage.title.rendered

            if(imageSrc){
                arrayOfObjects.push(
                    {
                        img: imageSrc ,
                        title: inspirationTitle ?? "",
                        cols: columnsNum,
                        rows: rowsNum
                    }
                )
            }
            setInspirationImages(arrayOfObjects)
        })
        
    }



function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <ResponsiveMenu />
                <main className='main-responsive-margin-medium'>
                    <div className='section-header'>
                        <h1 style={{marginBottom: '1.5rem'}}>SHOP</h1>
                    </div>
                    <div className='section-subheader'>
                        <h2>Please <Link href="/contact">
                                    <a style={{color: 'black', textDecoration: 'underline',fontWeight: 'bold'}}>get in touch</a>
                                </Link> if you are interested in one of these pieces.</h2>
                    </div>


                    <div className='Image-list-wrapper'>
                        <ImageList
                        className='inspirations-multi-image'
                        variant="quilted"
                        cols={4}
                        rowHeight={250}
                        gap={15}
                        >
                        {inspirationImages.map((item) => {
                            // console.log(item)
                            
                            return(
                                
                                    <ImageListItem className="image-list-item" key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                        <div key={item.img} className="wp-slide-image" style={{ ...backgroundImagesProps, backgroundImage: `url(${item.img})` }}>
                                            <div className="wp-slide--overlay"></div>
                                            <h2 className="wp-slide--proyect-title" dangerouslySetInnerHTML={{__html: item.title}}></h2>
                                            <div className="wp-slide--caption" dangerouslySetInnerHTML={{__html: item.image_description}}></div>
                                        </div>
                                    </ImageListItem>
                                
                            )
                        })
                        }
                        </ImageList>
                    </div>
                </main>
                <Footer />
            </div>
            <style jsx>{`
                .wp-slide-image {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    background-size: cover;
                }
                .wp-slide--overlay {
                    transition: 0.4s;
                    position: absolute;
                    display: flex;
                    flex-direction: column-reverse;
                    border-radius: 2.5rem;
                    height: 100%;
                    width: 100%;
                    opacity: 1;
                }
                .wp-slide-image:hover .wp-slide--overlay {
                    opacity: 1;
                    filter: brightness(0.8);
                }
                .wp-slide--caption {
                    text-shadow: 1px 1px 9px #000000;
                    transition: 0.6s;
                    z-index: 1;
                    text-align: center !important;
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
                .wp-slide--proyect-title {
                    line-height: 1.5rem;
                    text-shadow: 0px 1px 11px #00000082;
                    filter: brightness(1);
                    opacity: 1;
                    text-align: center;
                    font-family: 'Comforta-l';
                    transition: 0.5s;
                    color: #ffffffba;
                }
                .wp-slide-image:hover .wp-slide--proyect-title {
                    opacity: 1;
                }

                @media (max-width: 500px) {
                    .wp-slide--caption {
                        padding: 1rem;
                        opacity: 1;
                    }
                }
            `}
            </style>
        </>
    )
}
