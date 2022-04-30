import Footer from '../../components/footer'
import NavHeader from '../../components/NavHeader'
import NavHeaderSticky from '../../components/NavHeaderSticky'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function InteriorDesign(){
    const [ wpData, setWpData ] = useState([])
    const router = useRouter();
    const pathId = router.query.id

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

    useEffect(() => {
        console.log(router)
    }, [router])
    

    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <main>
                    {
                        wpData.map(
                            (item, key) => {
                                if(item.id.toString() == pathId){
                                    return(
                                        <div key={key}>
                                            <div className='section-header'>
                                                <h1 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h1>
                                            </div>
                                            <div style={{marginBottom: '5rem'}} dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                                            <div className='post-image-gallery'>
                                                    {item.gallery.map(
                                                        (image, key) => {
                                                            return <img key={key} style={{width: '15rem', height: '15rem', objectFit: 'scale-down'}} src={image.guid} alt="" />
                                                        }
                                                    )}
                                            </div>
                                        </div>
                                    )
                                } else {
                                    <p>Post not found.</p>
                                }
                            }
                        )
                    }
                    <style jsx>{`

                    `}
                    </style>
                </main>
                <Footer />
            </div>
        </>
    )
}


