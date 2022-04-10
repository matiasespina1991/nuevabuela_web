import Footer from '../components/footer'
import NavHeader from '../components/NavHeader'
import NavHeaderSticky from '../components/NavHeaderSticky'
import Grid from "../components/Grid";

export default function interiorDesign(){

    return(
        <>
            <div className="main-section-container">
                <NavHeader />
                <NavHeaderSticky />
                <main>
                    <div className='section-header'>
                        <h1>INSPIRATIONS</h1>
                    </div>
                    

                    <main className="inspirations--body">
                        <div>
                        <Grid
                            images="https://camo.githubusercontent.com/1f0cae0f2d2c89e4f5f1260f376f689464a792fdc50733baa4e512e6b299a77b/68747470733a2f2f692e696d6775722e636f6d2f4b7a5a456f77532e6a7067"
                            rowHeight={200}
                            margin={5}
                            isLightboxEnabled={true}
                            // width={Math.floor(windowSize.innerWidth * 0.8)}
                        />
                        </div>
                    </main>
                    <style jsx>{`
                        
                    `}
                    </style>
                </main>
                <Footer />
            </div>
            {/* <Footer /> */}
        </>
    )
}
