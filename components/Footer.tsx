
import React from 'react';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode, 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300" aria-label={ariaLabel}>
    {children}
  </a>
);

const FooterLink: React.FC<{ href: string, children: string }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">{children}</a>
  </li>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* About Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Traders Net Cafe</h3>
            <p className="text-gray-400">Your ultimate destination for high-speed internet, gaming, and a cozy atmosphere.</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#activities">Activities</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          {/* Legal Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
              <FooterLink href="#terms">Terms of Service</FooterLink>
              <FooterLink href="#disclaimer">Disclaimer</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <SocialIcon href="https://www.facebook.com" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
            </SocialIcon>
            <SocialIcon href="https://www.twitter.com" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.668.181-1.372.225-2.09.083.621 1.956 2.444 3.379 4.6 3.419-2.109 1.65-4.809 2.504-7.75 2.088 2.018 1.533 4.541 2.422 7.243 2.422 8.652 0 13.38-7.157 13.38-13.38 0-.204-.005-.407-.013-.61a9.544 9.544 0 002.323-2.41z"/></svg>
            </SocialIcon>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Traders Net Cafe. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
