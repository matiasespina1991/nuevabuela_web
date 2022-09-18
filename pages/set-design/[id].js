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
    const [ selectedImage, setSelectedImage] = useState()
    const router = useRouter();
    const pathId = router.query.id

    const api_route = `https://${cms_path}/wp-json/wp/v2/set_design/`

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
                        wpData 
                        &&
                        wpData.map(
                            (item, key) => {
                                if(item.id.toString() == pathId){
                                    return(
                                        <div key={key}>
                                            <div style={{marginBottom: '3.8rem'}} className="post-breadcrumb">
                                            <Link href={'/set-design/'} prefetch={true} passHref className="btn btn-primary">
                                            <span style={{textDecoration: 'underline', cursor: 'pointer'}}>SET DESIGN</span>
                                            </Link>
                                            {' >> '} <span style={{textTransform: 'uppercase'}} dangerouslySetInnerHTML={{ __html: item.title.rendered }}></span>
                                            </div>
                                            <div className='section-header post-title'>
                                                <h1 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h1>
                                            </div>
                                            <div style={{marginBottom: '5rem'}} dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                                            {
                                                item.gallery != false
                                                &&
                                                <div className='post-image-gallery'>
                                                        {item.gallery.map(
                                                            (image, key) => {
                                                                return (
                                                                    <div className='post-image-gallery-item-container' onClick={() => setSelectedImage(image.guid)} style={{width: '15rem', height: '15rem'}} key={key} >
                                                                        <img key={key} style={{borderRadius: '2.5rem', width: '100%'}} src={image.guid} alt="" />
                                                                    </div>
                                                                )
                                                            }
                                                        )}
                                                </div>
                                            }

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
                    {
                        selectedImage && selectedImage != '' &&
                        <div className="modular" onClick={() => setSelectedImage('')}>
                            <div className="close-modular" onClick={() => setSelectedImage('')}>X</div>
                            <div className="modular-image-container">
                                <img className="modular-image" src={selectedImage} alt="" />
                            </div>
                        </div>
                    }
                </main>
                <Footer />
            </div>
        </>
    )
}


