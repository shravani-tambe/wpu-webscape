import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tech Innovators Club</h3>
            <p className="text-blue-100">
              Building the future through technology and innovation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-blue-100">
              Email: contact@techinnovatorsclub.com
            </p>
            <p className="text-blue-100">Phone: +91 XXXXX XXXXX</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-100">
          <p>&copy; 2024 Tech Innovators Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
