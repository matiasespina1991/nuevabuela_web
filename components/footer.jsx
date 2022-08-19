// import Image from "next/image";

import { SocialIcon } from 'react-social-icons';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip';
import {useState, useEffect} from 'react'
import Stack from '@mui/material/Stack';

export default function Footer() {
  const [ copied, setCopied ] = useState(false)

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setCopied(false)
    }, 2000)


    return () => {
      clearTimeout(timeId)
    }


  
  }, [copied])
  

    return(
        <footer>
          <div className="contact-us-footer">
            <div className="space-block">

            </div>
            <div className='contact-wrapper'>
              <p>
                <strong>Contact Us</strong> and schedule your consultation
              </p>
              <div className="footer-social-icons-container">
                <SocialIcon target="_blank" url='https://www.instagram.com/nuevabuela/' className="social-icon" network="instagram" />
                <SocialIcon target="_blank" url='https://www.pinterest.de/2bb635f563029bbec8497b05cac781/' className="social-icon" network="pinterest" />
                <SocialIcon url="mailto:info@nuevabuela.com" className="social-icon" network="mailto" />
                <SocialIcon url='/contact/' className="social-icon" network="whatsapp" />
                {/* <Tooltip 
                title={
                  <>
                    <CopyToClipboard 
                    text="+49(0)15127950874"
                    onCopy={() => setCopied(true)}
                    >
                      <a style={{cursor: 'pointer'}} onClick="return false;">
                          Copy
                      </a>
                    </CopyToClipboard>
                  </>
                }
                placement='top'
                arrow
                >
                  <Stack sx={{alignItems: 'center'}}>
                    
                    <SocialIcon 
                    url='javascript:void(0)'
                    className="social-icon" 
                    network="whatsapp" 
                    />

                    <Tooltip
                    open={copied}
                    title='Phone number copied to clipboard!'
                    placement='bottom'
                    arrow
                    >
                      <button
                      style={{
                        marginTop: '-1.3rem',
                        opacity: 0,
                        zIndex: -1,
                      }}
                      >a</button>
                    </Tooltip>
                    
                  </Stack>
                </Tooltip> */}

              
                
              </div>
            </div>
            
          </div>
        </footer>
    )
};
