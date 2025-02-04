import Link from "next/link";
import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-8">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-6 mt-4">
            <a
              href="https://github.com/asimar007/Custom-Recommendation-System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/asimar007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/asim_ar007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://asimsk.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaUser size={18} />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500">
              Built with AI for personalized content discovery
            </p>
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} RecSys. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
