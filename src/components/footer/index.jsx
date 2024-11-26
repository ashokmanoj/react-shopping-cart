function Footer() {
    return (
      <footer className="px-4 py-4 text-white bg-gray-900">
        <div className="flex flex-col items-center justify-between mx-auto max-w-7xl md:flex-row">
          {/* Address Section */}
          <div className="mb-4 text-center md:mb-0 md:text-left">
            <p className="text-sm">
              123 Shopping Lane, Market City, SC 45678, United States
            </p>
          </div>
  
          {/* Contact Info Section */}
          <div className="mb-4 text-center md:mb-0 md:text-left">
            <p className="text-sm">
              Email: <a href="mailto:info@shopcart.com" className="underline">info@shopcart.com</a> | 
              Phone: <a href="tel:+1234567890" className="underline">+1 234 567 890</a>
            </p>
          </div>
  
          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              © {new Date().getFullYear()} ShopCart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  