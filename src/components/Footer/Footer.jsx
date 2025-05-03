import logo from "~/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-mainColor-400 text-black py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6">
        {/* Logo + Social */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl">
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-3 text-xl text-gray-800">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h2 className="font-semibold mb-2">Our Destinations</h2>
          <ul className="space-y-1 text-sm">
            <li>Canada</li>
            <li>Alaska</li>
            <li>France</li>
            <li>Iceland</li>
          </ul>
        </div>

        {/* Activities */}
        <div>
          <h2 className="font-semibold mb-2">Our Activities</h2>
          <ul className="space-y-1 text-sm">
            <li>Northern Lights</li>
            <li>Cruising & Sailing</li>
            <li>Multi-activities</li>
            <li>Kayaking</li>
          </ul>
        </div>

        {/* Blogs */}
        <div>
          <h2 className="font-semibold mb-2">Travel Blogs</h2>
          <ul className="space-y-1 text-sm">
            <li>Bali Travel Guide</li>
            <li>Sri Lanka Travel Guide</li>
            <li>Peru Travel Guide</li>
            <li>Bali Travel Guide</li>
          </ul>
        </div>

        {/* About / Contact */}
        <div>
          <h2 className="font-semibold mb-2">About Us</h2>
          <ul className="space-y-1 text-sm mb-4">
            <li>Our Story</li>
            <li>Work with us</li>
          </ul>
          <h2 className="font-semibold mb-2">Contact Us</h2>
          <ul className="space-y-1 text-sm">
            <li>Our Story</li>
            <li>Work with us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
