import React from "react";
import digiLynkLight from "../../../assets/icons/digilynk_light.png";
import digiLynkDark from "../../../assets/icons/digilynk_dark.png";
import {
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-100 px-4 sm:px-6 py-12 text-black w-full rounded-t-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex flex-col items-center md:items-start space-y-3">
                <img
                  src={digiLynkDark}
                  className="w-16 h-16 md:w-20 md:h-20"
                  alt="Digilynk Logo"
                />
                <h1 className="text-2xl md:text-3xl font-bold">Digilynk</h1>
              </div>
              <p className="text-sm md:text-base text-center md:text-left text-gray-600 max-w-md">
                Transforming ideas into digital reality. We provide innovative
                solutions for your business needs.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">Quick Links</h2>
              <ul className="flex flex-col items-center md:items-start space-y-2">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Home
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Services
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  About us
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Pricing
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Connect With Us
              </h2>
              <ul className="flex flex-col items-center md:items-start space-y-2">
                <li className="flex items-center space-x-2 hover:text-blue-400 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-pink-400 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-blue-500 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-green-400 transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-red-400 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Digilynk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
