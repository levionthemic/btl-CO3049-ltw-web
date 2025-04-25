function AboutUsPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between gap-3 pb-4 mt-10">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#1C160C] text-4xl font-black leading-tight tracking-[-0.033em]">About Us</p>
          <p className="text-[#A18249] text-base font-normal leading-normal">Learn more about Globe and our mission.</p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/d2626e09-e4bf-4391-b2d9-1bd964708f87.png")' }}
          ></div>
          <div>
            <p className="text-[#1C160C] text-base font-medium leading-normal">Our Mission</p>
            <p className="text-[#A18249] text-sm font-normal leading-normal">
                    At Globe, our mission is to help others live and travel better by providing a seamless platform to plan and book trips. We connect travelers with the best
                    destinations, accommodations, and experiences worldwide, ensuring every journey is unforgettable. Our team is comprised of travel enthusiasts dedicated to
                    crafting the perfect experience for you, leveraging cutting-edge technology and personalized service. As a hotel booking host, we are committed to providing
                    exceptional hospitality, ensuring comfortable and memorable stays for our guests.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Our Story</h2>
      <p className="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1">
              Globe started with a simple idea: to make travel accessible and enjoyable for everyone. Founded by a group of avid travelers in 2015, we recognized the challenges of
              planning trips and set out to create a solution. Our platform has evolved from a basic booking tool to a comprehensive resource, offering detailed guides, insider
              tips, and a curated selection of accommodations and activities. Today, Globe is a leading name in online travel, known for its user-friendly interface and commitment
              to customer satisfaction. Our goal remains the same: to inspire and facilitate meaningful travel experiences.
      </p>
      <h2 className="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Our Values</h2>
      <p className="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1">
              At Globe, we uphold the highest standards of integrity, transparency, and customer focus. We believe in providing honest reviews, clear pricing, and responsive
              support. Our core values include a commitment to continuous improvement, embracing diversity, and fostering a culture of innovation. We're not just about bookings;
              we're about building a community of travelers who share a passion for exploration and adventure.
      </p>
      <div className="@container mb-20">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/a250b6a6-36f3-4a4b-9b17-5143aa39ab56.png")' }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1
                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                      Helping Others Live &amp; Travel
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Our mission is to make travel planning easy, enjoyable, and accessible for everyone.
              </h2>
            </div>
            <div className="flex-wrap gap-3 flex justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
              >
                <span className="truncate">Learn More</span>
              </button>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
              >
                <span className="truncate">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage