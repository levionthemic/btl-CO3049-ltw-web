import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";

function ContactPage() {
  return (
    <>
      <Header></Header>
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('reception.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Liên hệ với iHotel</h1>

            <span className="text-xl mx-auto block">
              Hãy kết nối với chúng tôi để được tư vấn và hỗ trợ.
            </span>

            <span className="text-xl  mx-auto block">
              Liên hệ với chúng tôi để hỏi đáp, đặt phòng, tổ chức hội nghị,
              hoặc ứng tuyển việc làm.
            </span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="w-full py-16 px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Send Us a Message
        </h2>
        <p className="text-gray-600 text-center mt-2">
          We’ll get back to you as soon as possible.
        </p>
        <form className=" mt-6 bg-mainColor1-200 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-mainColor1-800 text-white px-4 py-2 rounded hover:bg-mainColor1-900 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Address */}
      <section
        id="contact__address"
        className="mt-4 h-[50vh] my-8 flex justify-between"
      >
        {/* Contact Details */}
        <div className="w-1/3 bg-mainColor2-50 text-black items-center  py-16 px-8 text-center">
          <h2 className="text-3xl font-semibold">Contact Information</h2>
          <p className="mt-4 ">📍 123 Luxury St, Paradise City, Country</p>
          <p className="">📞 +123 456 789</p>
          <p className="">✉️ contact@luxurystay.com</p>
        </div>

        {/* Google Map */}
        <div className="w-2/3">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153169!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f0f9b1a1e3!2s123%20Luxury%20St%2C%20Paradise%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1697041234567!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="bg-mainColor1-200 py-16 px-8 flex items-center justify-center">
        <div className=" text-center">
          <p className="text-2xl md:text-3xl font-semibold text-gray-700 italic">
            "Không chỉ là trải nghiệm, mà còn là kiến thức và kinh nghiệm."
          </p>
          <p className="text-lg text-gray-500 mt-4">
            — Thái Công không nói thế
          </p>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default ContactPage;
