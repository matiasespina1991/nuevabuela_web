// import Image from 'next/image'
import { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";

export default function LoadingScreen({DOMisLoaded}) {
    const [ DOMfinishedLoading, setDOMfinishedLoading ] = useState(false)
    const [ LoaderDisplayNone, setLoaderDisplayNone ] = useState(false)

    const rotaryWelcomeLogo = useRef();
    const loadingScreenContainer = useRef();

    useEffect(() => {
        DOMisLoaded ? setTimeout(function(){ setDOMfinishedLoading(true) }, 5000) : null
        DOMisLoaded ? setTimeout(function(){ setLoaderDisplayNone(true) }, 6000) : null
    }, [DOMisLoaded])

    useEffect(() => {
        document.body.style.overflow = DOMfinishedLoading ? "auto" : "hidden";
    }, [DOMfinishedLoading])

    useEffect(() => {
        gsap.to(loadingScreenContainer.current, { 
            opacity: 1,
            delay: 1,
            duration: 2
        });
        gsap.to(rotaryWelcomeLogo.current, 1.5, { 
            delay: 2,
            rotation: "180" ,
            repeatDelay: 0.5
        });
        DOMfinishedLoading ?
        gsap.to(rotaryWelcomeLogo.current, { 
            repeat: 0
        })
        : 
        gsap.to(rotaryWelcomeLogo.current, { 
            repeat: -1
        })

    }, [DOMfinishedLoading])

    return(
        <>
            <div className={`loading-screen-wrapper ${DOMfinishedLoading ? "DOMfinishedLoading" : "DOMisLoading"} ${LoaderDisplayNone ? "display-none" : null }`}>
                <div className="loading-screen-container" ref={loadingScreenContainer}>
                    <div className="loading-logo-container" >
                        <div className="loading-welcome-wrapper" ref={rotaryWelcomeLogo}>
                            {/* <Image src="/images/loading-welcome-text.png" alt="Loading Logo" width="170" height="190" /> */}
                            <img src="/images/loading-welcome-text.png" alt="Loading Logo" width="170" height="190" />
                        </div>
                        <div className="loading-plus-wrapper">
                            {/* <Image src="/images/loading-plus.png" alt="Loading Logo" width="40" height="40" /> */}
                            <img src="/images/loading-plus.png" alt="Loading Logo" width="40" height="40" />
                        </div>
                    </div>
                    {/* <div className="loading-line-container" >
                            <Image src="/images/loading-line.png" alt="Loading Logo" width="417" height="313" />
                    </div> */}
                </div>
            </div>
            <style jsx>{`
                .loading-screen-wrapper{
                    transition: 0.7s;
                    transition-timing-function: ease-in-out;
                    position: absolute;
                    overflow: hidden;
                    opacity: 1;
                    height: 100vh;
                    width: 100vw;
                    background: white;
                    z-index: 100;
                }

                .DOMfinishedLoading{
                    opacity:0;
                }

                .display-none {
                    display: none;
                }

                .loading-screen-container {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    opacity: 1;
                    justify-content: center;
                }
                
                .loading-logo-container {
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    height: 100vh;
                }
                
                .loading-welcome-wrapper {
                    display: flex;
                    align-items: center;
                }
                
                .loading-plus-wrapper {
                    width: 100%;
                    position: absolute;
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }

                .loading-line-container {
                    position: absolute;
                    height: 100vh;
                    bottom: -52vh;
                }

            `}</style>
        </>
    )
}