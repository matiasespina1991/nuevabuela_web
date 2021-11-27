import Image from 'next/image'
import { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";

export default function LoadingScreen({DOMisLoaded}) {
    const [ DOMfinishedLoading, setDOMfinishedLoading ] = useState(false)

    const rotaryWelcomeLogo = useRef();
    const loadingScreenContainer = useRef();

    useEffect(() => {
        DOMisLoaded ? setTimeout(function(){ setDOMfinishedLoading(true) }, 4000) : null
    }, [DOMisLoaded])

    useEffect(() => {
        document.body.style.overflow = DOMfinishedLoading ? "auto" : "hidden";
    })

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
            <div className={`loading-screen-wrapper ${DOMfinishedLoading ? "DOMfinishedLoading" : "DOMisLoading"}`}>
                <div className="loading-screen-container" ref={loadingScreenContainer}>
                    <div className="loading-logo-container" >
                        <div className="loading-welcome-wrapper" ref={rotaryWelcomeLogo}>
                            <Image src="/images/loading-welcome-text.png" alt="" width="170" height="180" />
                        </div>
                        <div className="loading-plus-wrapper">
                            <Image src="/images/loading-plus.png" alt="" width="40" height="40" />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .loading-screen-wrapper{
                    transition: 1.5s;
                    position: relative;
                    overflow: hidden;
                    height: 100vh;
                }

                .DOMfinishedLoading{
                    height: 0;
                }
            `}</style>
        </>
    )
}