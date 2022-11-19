import axios from 'axios';
import { useState, useEffect } from 'react';
import ResponsiveMenu from '../../../components/ResponsiveMenu'
import Footer from '../../../components/footer'
import NavHeader from '../../../components/NavHeader'
import NavHeaderSticky from '../../../components/NavHeaderSticky'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { cms_path } from '../api/cms_path';
import demoInspirations from '../../../components/demo_data/demoInspirations'


export default function Inspitations(){
    const [ wpData, setWpData ] = useState([])
    const [ inspirationImages, setInspirationImages ] = useState([])

    useEffect(() => {
        const api_route = `https://${cms_path}/wp-json/wp/v2/inspirations/?per_page=50`

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
                        <h1>INSPIRATIONS</h1>
                    </div>



                <ImageList
                className='inspirations-multi-image'
                variant="quilted"
                cols={4}
                rowHeight={250}
                gap={15}
                >
                {inspirationImages.map((item) => (
                    <ImageListItem className="image-list-item" key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                        style={{borderRadius: '20px'}}
                    />
                    </ImageListItem>
                ))}
                </ImageList>
                </main>
                <Footer />
            </div>
        </>
    )
}
