import {Squash as Hamburger} from 'hamburger-react'
import { useState } from 'react'

export default function ResponsiveMenu() {
    const [isOpen, setOpen] = useState(false)
    return(
        <>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div className="responsive-menu--container">
                <div className="responsive-menu--wrapper">

                </div>
            </div>
            <style jsx>{`
                .responsive-menu--container{
                    transition: 0.4s;
                    right: ${isOpen ? '10%' : '110%'};
                }
            `}</style>
        </>
    )
};
