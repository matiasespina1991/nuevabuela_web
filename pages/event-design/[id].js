import Footer from '../../components/footer'
import NavHeader from '../../components/NavHeader'
import NavHeaderSticky from '../../components/NavHeaderSticky'
import ResponsiveMenu from '../../components/ResponsiveMenu'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { cms_path } from '../api/cms_path';

export default function InteriorDesign(){
    const [ wpData, setWpData ] = useState([])
    const router = useRouter();
    const pathId = router.query.id

    const api_route = `https://${cms_path}/wp-json/wp/v2/event_design/`

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
        
    }, [api_route]);

    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <ResponsiveMenu />
                <main>
                    {
                        wpData.map(
                            (item, key) => {
                                if(item.id.toString() == pathId){
                                    return(
                                        <div key={key}>
                                            <div style={{marginBottom: '3.8rem'}} className="post-breadcrumb">
                                            <Link href={'/event-design/'} prefetch={true} passHref className="btn btn-primary">
                                            <span style={{textDecoration: 'underline', cursor: 'pointer'}}>EVENT DESIGN</span>
                                            </Link>
                                            {' >> '} <span style={{textTransform: 'uppercase'}} dangerouslySetInnerHTML={{ __html: item.title.rendered }}></span>
                                            </div>
                                            <div className='section-header post-title'>
                                                <h1 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h1>
                                            </div>
                                            <div style={{marginBottom: '5rem'}} dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                                            <div className='post-image-gallery'>
                                                    {item.gallery && item.gallery.map(
                                                        (image, key) => {
                                                            return (
                                                                <div className='post-image-gallery-item-container' style={{height: '15rem'}} key={key} >
                                                                    <img key={key} style={{borderRadius: '2.5rem', width: '100%'}} src={image.guid} alt="" />
                                                                </div>
                                                            )
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


