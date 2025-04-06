import React from "react";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo và mô tả */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-300">
              Chúng tôi cung cấp dịch vụ đặt phòng khách sạn chất lượng cao với
              nhiều tiện ích và dịch vụ đa dạng. Hãy trải nghiệm sự thoải mái và
              sang trọng tại khách sạn của chúng tôi.
            </p>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Đặt phòng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Tiện ích
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Phòng nghỉ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Địa chỉ: 123 Đường ABC, Quận XYZ</li>
              <li>Điện thoại: (84) 123-456-789</li>
              <li>Email: info@hotel.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Hotel Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
