import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="footer">

      <div data-aos="fade-up" className="footer-top">

        <div data-aos="fade-up" data-aos-delay="200" className="footer-left">
          <p>📧 muhamad.om4r@gmail.com</p>
          <p>📞 +964 770 407 5728</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="footer-center">
          <a href="https://github.com/hamaomer-max"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/hama-omer-5a363a337/"><FaLinkedin /></a>
          <a href="https://web.facebook.com/hama.mario.gotze/?locale=ar_AR"><FaFacebook /></a>
          <a href="https://wa.me/9647502325912"><FaWhatsapp /></a>
          <a href="https://t.me/hama_omerr"><FaTelegram /></a>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="footer-right">
          <p>Got an idea? <span>Let's build it.</span></p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Muhamad Omar. All rights reserved.
      </div>

    </footer>
  );
}