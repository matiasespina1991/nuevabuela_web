import Footer from '../../components/footer'
import NavHeader from '../../components/NavHeader'
import NavHeaderSticky from '../../components/NavHeaderSticky'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'


export default function InteriorDesign(){
    const [ wpData, setWpData ] = useState([])
    const router = useRouter();
    const pathId = router.query.id

    const api_route = "http://nuevabuela.local/wp-json/wp/v2/event_design"

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
                    {
                        wpData.map(
                            (item, key) => {
                                if(item.id.toString() == pathId){
                                    return(
                                        <div key={key}>
                                            <div style={{marginBottom: '2.5rem'}} className="post-breadcrumb">
                                            <Link href={'/event-design/'} prefetch={true} passHref className="btn btn-primary">
                                            EVENT DESIGN
                                            </Link>
                                            {' >> '} <span style={{textTransform: 'uppercase'}} dangerouslySetInnerHTML={{ __html: item.title.rendered }}></span>
                                            </div>
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


