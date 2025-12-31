import React from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-200 text-blue-900 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo Only */}
        <div className="flex flex-col items-start">
          <div className="">
            <img
              src={logo}
              alt="Skinish Logo"
              className="h-12 object-contain"
            />
          </div>
          
        </div>

        {/* Quick Links */}
        <div>
  <h4 className="font-semibold mb-4">Quick Links</h4>
  <ul className="space-y-2 text-sm">
    {[
      { text: "Programs", path: "/programs" },
      { text: "Mentors", path: "/mentors" },
      { text: "Get Involved", path: "/get-involved" },
      { text: "Contact", path: "/contact" },
    ].map((item, i) => (
      <li key={i}>
        <Link
          to={item.path}
          className="relative inline-block transition text-blue-900 hover:text-blue-500 group"
        >
          <span className="relative z-10">{item.text}</span>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    ))}
  </ul>
</div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="text-sm ">support@asiko.com</p>
          <p className="text-sm mt-1">+234 806 650 9008</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-5 text-2xl text-blue-900">
            {[{
              Icon: FaInstagram,
              href: "https://www.instagram.com/",
              label: "Instagram"
            }, {
              Icon: FaTiktok,
              href: "https://www.tiktok.com/",
              label: "TikTok"
            }, {
              Icon: FaWhatsapp,
              href: "https://wa.me/",
              label: "WhatsApp"
            },
            {
              Icon: FaXTwitter,
              href: "https://x.com/",
              label: "Twitter(X)"
            },
          ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm mt-10 border-t border-[#663333] pt-6">
        &copy; {new Date().getFullYear()} <span className="font-bold">Asiko Ti Yaa</span>. All rights reserved.
      </div>
    </footer>
  );
}
