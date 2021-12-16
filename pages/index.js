import Head from "next/head";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import NavHeader from "../components/NavHeader";
import Image from "next/image";

export default function Home() {
  const [DOMisLoaded, setDOMisLoaded] = useState(false);

  useEffect(() => {
    setDOMisLoaded(true);
  }, []);
  return (
    <div>
      <Head>
        <title>Nuevabuela Oficial</title>
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
      <LoadingScreen DOMisLoaded={DOMisLoaded} />
      <div className="main-section-container">
        <NavHeader />
        <main>
          <div className="home-our-brand-featured-images-container">
            <div className="home-our-brand-featured-image-left"></div>
            <div className="home-our-brand-featured-image-right"></div>
          </div>
          <div className="our-brand">
            <h1>Our Brand</h1>
            <p>
              <strong>nuevabuela</strong> is a brand that relates interior
              design with art in all its forms, that appreciates beauty and
              specialness, marking all designs with unique touches.
              <br />
              <br />
              Our brand is color and originality, a mix of vintage and new
              elements that creates a contemporary and retro style full of
              personality, inspired by the Bauhaus movement and the fifties,
              sixties and seventies. It’s a brand that picks up the colors of
              the earth and combines them with strong and bold tones that
              generates spaces full of energy and character.
              <br />
              <br />
              <strong>nuevabuela</strong> plays with tones, textures and
              geometric shapes and patterns that create warm and cozy
              environments. Our brand is constantly looking for unique pieces
              from the past to give them a second life, restoring them with the
              idea of reusing and contributing to the environment.
            </p>
          </div>
          <div className="separator">
            <Image
              src="/images/loading-plus.png"
              alt=""
              width="30"
              height="30"
            />
          </div>
          <div className="home-about-us-featured-images-container">
            <Image
              src="/images/about-us-image.png"
              alt=""
              width="521"
              height="295"
            />
          </div>
          <div className="about-us">
            <h1>About Us</h1>
            <p>
              Everything started when we met and crossed our paths in London and
              realised that we shared the same passions and dreams.
              <br />
              <br />
              After completing our interior design studies in different cities,
              we met again in Berlin, where we decided to put our ideas
              together, and that&apos;s where <strong>nuevabuela</strong>{" "}
              begins. 
              <br />
              <br />
              <strong>nuevabuela</strong> is a brand full of life and
              personality that was born from the desire to create a project and
              express our creativity through our work.
            </p>
          </div>
        </main>

        <footer>
          <div className="contact-us-footer">
            <p>
              <strong>Contact Us</strong> and schedule your consultation
            </p>
            <div className="footer-social-icons-container">
              <div>
                <Image
                  src="/images/instagram-icon.svg"
                  alt=""
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <Image
                  src="/images/pinterest-icon.svg"
                  alt=""
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <Image
                  src="/images/whatsapp-icon.svg"
                  alt=""
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
