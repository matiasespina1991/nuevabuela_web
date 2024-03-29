import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import NavHeader from "../components/NavHeader";
import NavHeaderSticky from "../components/NavHeaderSticky";
import Footer from '../components/footer'
import ResponsiveMenu from '../components/ResponsiveMenu'
import CookieConsent from "react-cookie-consent";

export default function Home() {
  const [DOMisLoaded, setDOMisLoaded] = useState(false);
  const router = useRouter();
  const [ preventLoadingScreen, setPreventLoadingScreen ] = useState(false)

  useEffect(() => {
    document.body.style.overflow = DOMisLoaded ? "auto" : "hidden";
}, [DOMisLoaded])


  useEffect(() => {
    router.asPath.includes('?home') && setPreventLoadingScreen(true)
    setDOMisLoaded(true);
  }, [router.asPath]);
  return (
    <div>
      <Head>
        <title>Nuevabuela</title>
        <meta name="description" content="Nuevabuela is a..." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/coco_gothic/CocoGothic_trial.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/larken-bold/larken-bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      { preventLoadingScreen ? "" : <LoadingScreen DOMisLoaded={DOMisLoaded} /> }
      <div className="main-section-container">
        <ResponsiveMenu />
        <NavHeader />
        <NavHeaderSticky />
        <main className="index">
          <div className="our-brand--wrapper">
            
            <div className="our-brand">
              <h1>OUR STUDIO</h1>
              <p>
                NUEVABUELA relates interior design with art in all its forms, and appreciates beauty and specialness, marking all designs with unique touches.
              </p>
              <p>
                Our studio is colour and originality, a mix of vintage and new elements that create a contemporary and retro style full of personality, inspired by the Bauhaus movement and the 50s, 60s and 70s.
              </p>
              <p>
                We pick the colours of the earth and combine them with strong and bold tones, generating spaces full of energy and character.
              </p>
              <p>
                NUEVABUELA plays with tones, textures, geometric shapes and patterns that all together create warm and cosy ambiences. 
              </p>
              <p>
                We constantly look for unique pieces from the past to give them a second life, restoring them with the idea of reusing and contributing to the environment.
              </p>

            </div>
            <div className="home-our-brand-featured-images-container">
              <div className="home-our-brand-featured-image-left round-border-image"></div>
              {/* <div className="home-our-brand-featured-image-right"></div> */}
            </div>
              
          </div>       
          {/* <div className="separator">
            <Image
              src="/images/loading-plus.png"
              alt=""
              width="30"
              height="30"
            />
          </div> */}
          <div className="about-us--wrapper">
            <div className="home-our-brand-featured-image-right round-border-image"></div>
            <div className="about-us">
              <h1>About Us</h1>
              <p>
                Everything started when we met and crossed our paths in London and
                realised that we shared the same passions and dreams.
              </p>
              <p>
                After completing our interior design studies in different cities,
                we met again in Berlin, where we decided to put our ideas
                together, and that&apos;s where NUEVABUELA{" "}
                begins. 
              </p>
              <p>
                NUEVABUELA is full of life and personality, born from the desire to create a project and express our creativity through our work
              </p>
            </div>
            {/* <div className="home-about-us-featured-images-container">
              <Image
                src="/images/about-us-image.png"
                alt=""
                width="521"
                height="295"
              />
            </div> */}
            
          </div>
          
        </main>
        <Footer />
        <CookieConsent buttonStyle={{backgroundColor: '#D29E06'}}>This website uses cookies to enhance the user experience.</CookieConsent>
      </div>
    </div>
  );
}
