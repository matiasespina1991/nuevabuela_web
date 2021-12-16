import Image from "next/image";

export default function footer() {
    return(

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
    )
};
