import Footer from '../components/footer'
import NavHeader from '../components/NavHeader'
import NavHeaderSticky from '../components/NavHeaderSticky'

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
                            Coming soon...
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
