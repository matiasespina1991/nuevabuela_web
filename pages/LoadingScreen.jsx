import Image from 'next/image'

export default function LoadingScreen() {
    return(
        <>
            <div className="loading-screen-container">
                <div className="loading-logo-container">
                    <div className="loading-welcome-wrapper">
                        <Image src="/images/loading-welcome-text.png" alt="" width="170" height="170" />
                    </div>
                    <div className="loading-plus-wrapper">
                        <Image src="/images/loading-plus.png" alt="" width="40" height="40" />
                    </div>
                </div>
            </div>
        </>
    )
}