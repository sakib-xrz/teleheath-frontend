// components/Footer.js
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/footer/footer-bg.jpg" // Replace with your image path in public folder
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Footer Content */}
      <div className="container relative z-10 mx-auto px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Remedic Section */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Remedic</h4>
            <p className="mb-4 text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-75">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:opacity-75">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:opacity-75">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Information Section */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Appointments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Specialties
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Health Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Site Links Section */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Site Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Departments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Have a Questions?</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <span>
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </span>
                <span>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span>
                  <i className="fas fa-phone-alt text-xl"></i>
                </span>
                <span>+2 392 3929 210</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>
                  <i className="fas fa-envelope text-xl"></i>
                </span>
                <span>info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
