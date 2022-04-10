// import Image from "next/image";

import { SocialIcon } from 'react-social-icons';

export default function footer() {
    return(
        <footer>
          <div className="contact-us-footer">
            <div className="space-block">

            </div>
            <p>
              <strong>Contact Us</strong> and schedule your consultation
            </p>
            <div className="footer-social-icons-container">
              <SocialIcon target="_blank" url='https://www.instagram.com/nuevabuela/' className="social-icon" network="instagram" />
              <SocialIcon url='' className="social-icon" network="pinterest" />
              <SocialIcon url="mailto:info@nuevabuela.com" className="social-icon" network="mailto" />
              <SocialIcon url='tel:+49(0)15127950874' className="social-icon" network="whatsapp" />
            </div>
          </div>
        </footer>
    )
};
