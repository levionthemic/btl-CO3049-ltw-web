import { useState, useEffect } from "react";
import axios from "axios";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    hotelName: "",
    phoneNumber: "",
    address: "",
    logo: null,
    currentLogoPath: "/uploads/current-logo.png", // Example path for current logo
  });

  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost/public/api/settings/latest")
      .then((response) => {
        const data = response.data;
        setFormData({
          hotelName: data.hotel_name || "",
          phoneNumber: data.phone_number || "",
          address: data.address || "",
          logo: null,
          currentLogoPath: data.logo_path
            ? `http://localhost/public/uploads/${data.logo_path}`
            : "",
        });
      })
      .catch((error) => {
        console.error(
          "Error fetching settings:",
          error.response?.data || error.message
        );
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("hotel_name", formData.hotelName);
    formDataToSend.append("phone_number", formData.phoneNumber);
    formDataToSend.append("address", formData.address);
    if (formData.logo) {
      formDataToSend.append("logo", formData.logo);
    }

    axios
      .post("http://localhost/public/api/settings", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("API Response:", response.data);
        setIsSubmited(true);
      })
      .catch((error) => {
        console.log("API Response:", JSON.stringify(error));

        console.error("API Error:", error.response?.data || error.message);
      });
    console.log("Form submitted:", formData);
  };
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {!isSubmited ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="hotelName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Hotel Name:
              </label>
              <input
                type="text"
                id="hotelName"
                name="hotelName"
                required
                value={formData.hotelName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="logo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Logo:
              </label>
              {formData.currentLogoPath && (
                <div className="mb-2">
                  <img
                    src={formData.currentLogoPath}
                    alt="Current Logo"
                    className="max-w-xs rounded-lg shadow-sm"
                  />
                </div>
              )}
              <input
                type="file"
                id="logo"
                name="logo"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="mt-1 text-sm text-gray-500">
                Leave empty to keep current logo
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Settings Updated Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Your settings have been saved. You can make further changes if
            needed.
          </p>
          <button
            onClick={() => setIsSubmited(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Edit Settings
          </button>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
