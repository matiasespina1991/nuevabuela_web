import Carousel from 'react-elastic-carousel'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function WpCarousel({wpData}){
    const placeholderSliders = [1,2,3];
    const router = useRouter()

    const backgroundImagesProps = {
        position: 'relative',
        cursor: 'pointer',
        width: '16rem',
        height: '28rem',
        borderRadius: '2.5rem',
        backgroundSize: '22rem',
        transition: 'background-size 3s ease-out',
        boxShadow: '5px 5px 13px #00000025',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return(
        <>
            <Carousel breakPoints={[{ width: 300 , itemsToShow: 1 },{ width: 600 , itemsToShow: 2 },{ width: 800, itemsToShow: 3 }]}>
                {
                    wpData.length === 0 ? 
                    
                    placeholderSliders.map((key) => {
                        return(
                            <div key={key} style={{ ...backgroundImagesProps, opacity: 0.2, backgroundSize: "cover", filter: "brightness(0.5)", backgroundImage: "url(/images/placeholders/sliders_placeholder.jpg)" }}></div>
                        )
                    })
                    
                    :
                    
                    wpData.map((slide,key) => {
                        return(
                            <Link key={key} href={`${router.pathname}/${slide.id}`} prefetch={true} passHref className="btn btn-primary">
                                <div key={slide.better_featured_image.source_url} className="wp-slide-image" style={{ ...backgroundImagesProps, backgroundImage: `url(${slide.better_featured_image.source_url})` }}>
                                    <div className="wp-slide--overlay"></div>
                                    <h2 className="wp-slide--proyect-title" dangerouslySetInnerHTML={{__html: slide.title.rendered}}></h2>
                                    <div className="wp-slide--caption" dangerouslySetInnerHTML={{__html: slide.content.rendered}}></div>
                                </div>
                            </Link>
                        )
                    })
                }
            </Carousel>
            <style jsx>{`
                .wp-slide-image {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
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
                .wp-slide-image:hover {
                    background-size: 22.5rem !important;
                }
                .wp-slide--proyect-title {
                    opacity: 0;
                    text-align: center;
                    font-family: 'Comforta-l';
                    transition: 0.5s;
                    color: #ffffff87;
                    padding: 0 1rem;
                }
                .wp-slide-image:hover .wp-slide--proyect-title {
                    opacity: 1;
                }
            `}
            </style>
        </>
    )

}

