import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FLogo from "../../assets/FooterDigiTools.png";

function Footer() {
  return (
    <div>
      <footer className="bg-[#101727] text-neutral-content px-10">
        <div className="footer sm:footer-horizontal py-25">
          <nav>
            <h6 className="footer-title">
              <img src={FLogo} alt="" />
            </h6>
            <p className="w-60">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </nav>
          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <div className="grid grid-flow-col gap-4">
              <div className="fill-current w-10 h-10 rounded-full bg-white flex justify-center items-center">
                <a className="text-black text-2xl" href="#">
                  <RiInstagramFill />
                </a>
              </div>

              <div className="fill-current w-10 h-10 rounded-full bg-white flex justify-center items-center">
                <a className="text-black text-2xl" href="#">
                  <FaFacebook />
                </a>
              </div>
              <div className="fill-current w-10 h-10 rounded-full bg-white flex justify-center items-center">
                <a className="text-black text-2xl" href="#">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-10 border-t border-1 border-gray-700"></div>
        <div className="flex justify-between py-5 text-sm text-gray-400">
          <div>
            <p>© 2026 Digitools. All rights reserved.</p>
          </div>
          <div className="flex gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
