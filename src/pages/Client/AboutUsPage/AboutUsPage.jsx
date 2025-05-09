import { Link } from 'react-router-dom'

function AboutUsPage() {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-between gap-3 pb-4 mt-10'>
        <div className='flex min-w-72 flex-col gap-3'>
          <p className='text-[#1C160C] text-4xl font-black leading-tight tracking-[-0.033em]'>
            About Us
          </p>
          <p className='text-base font-normal leading-normal text-justify'>
            Chào mừng bạn đến với LEVI Hotel Booking – nền tảng đặt phòng khách
            sạn trực tuyến đáng tin cậy dành cho mọi chuyến đi của bạn. Dù bạn
            đang lên kế hoạch cho kỳ nghỉ cùng gia đình, chuyến công tác quan
            trọng hay một chuyến du lịch ngẫu hứng, chúng tôi luôn sẵn sàng đồng
            hành để mang đến trải nghiệm đặt phòng nhanh chóng, thuận tiện và an
            toàn nhất.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4'>
        <div className='flex flex-col md:flex-row gap-8 items-center pb-3'>
          <div
            className='w-full md:w-[40%] bg-center bg-no-repeat aspect-square bg-cover rounded-xl'
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/d2626e09-e4bf-4391-b2d9-1bd964708f87.png")'
            }}
          ></div>
          <div className='flex-1'>
            <p className='text-2xl font-bold leading-normal'>
              Hành trình của chúng tôi
            </p>
            <p className='font-normal leading-normal text-justify'>
              LEVI Hotel Booking được thành lập với một mục tiêu đơn giản: biến
              việc tìm kiếm và đặt phòng khách sạn trở nên dễ dàng hơn bao giờ
              hết. Từ những khó khăn thực tế mà người dùng thường gặp khi đặt
              phòng – thông tin thiếu minh bạch, giá cả không rõ ràng, chính
              sách hoàn hủy rắc rối – chúng tôi đã xây dựng một nền tảng nơi mọi
              thứ đều rõ ràng, minh bạch và lấy trải nghiệm người dùng làm trung
              tâm. Khởi đầu từ một nhóm nhỏ những người đam mê công nghệ và yêu
              thích dịch chuyển, chúng tôi không ngừng phát triển và mở rộng
              mạng lưới đối tác, hiện đã kết nối với hơn 10.000 khách sạn,
              resort, homestay trên khắp Việt Nam và khu vực Đông Nam Á.
            </p>

            <p className='text-2xl font-bold leading-normal mt-10'>
              Sứ mệnh của chúng tôi
            </p>
            <p className='font-normal leading-normal text-justify'>
              Tại LEVI, sứ mệnh của chúng tôi là kết nối du khách với hàng ngàn
              khách sạn chất lượng trên khắp đất nước. Chúng tôi không ngừng cải
              tiến công nghệ để mang lại trải nghiệm đặt phòng nhanh chóng, minh
              bạch và an toàn cho mọi người dùng.
            </p>
          </div>
        </div>
      </div>
      <h2 className='text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5'>
        Giá trị cốt lõi
      </h2>
      <p className='text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1'>
        <ul className='list-disc pl-10'>
          <li>
            Khách hàng là trung tâm: Mọi tính năng và dịch vụ đều được xây dựng
            dựa trên nhu cầu và phản hồi thực tế từ người dùng.
          </li>
          <li>
            Minh bạch & tin cậy: Thông tin phòng, giá cả, đánh giá... đều được
            cung cấp rõ ràng và xác thực.
          </li>
          <li>
            Linh hoạt & tiện lợi: Đặt phòng nhanh chóng, chính sách huỷ linh
            hoạt, thanh toán đa dạng.
          </li>
          <li>
            Hỗ trợ 24/7: Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng
            lắng nghe và hỗ trợ bạn mọi lúc, mọi nơi.
          </li>
        </ul>
      </p>
      <h2 className='text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5'>
        Vì sao chọn LEVI Hotel Booking?
      </h2>
      <p className='text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1'>
        <ul className='list-disc pl-10'>
          <li>Hơn 10.000 lựa chọn lưu trú trên toàn quốc</li>
          <li>Giao diện thân thiện, đặt phòng chỉ trong vài bước</li>
          <li>Giá ưu đãi độc quyền, cập nhật hàng ngày</li>
          <li>Cam kết bảo mật thông tin và thanh toán an toàn</li>
          <li>Chính sách hoàn hủy linh hoạt, phù hợp với mọi lịch trình</li>
        </ul>
      </p>
      <div className='@container my-20'>
        <div className='@[480px]:p-4'>
          <div
            className='flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4'
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/a250b6a6-36f3-4a4b-9b17-5143aa39ab56.png")'
            }}
          >
            <div className='flex flex-col gap-2 text-center'>
              <h1 className='text-white text-2xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]'>
                Hãy để LEVI Hotel Booking giúp bạn bắt đầu mỗi hành trình bằng
                sự yên tâm và thoải mái.
              </h1>
              <h2 className='text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal'>
                Cảm ơn bạn đã tin tưởng và lựa chọn chúng tôi!
              </h2>
            </div>
            <div className='flex-wrap gap-3 flex justify-center'>
              <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]'>
                <span className='truncate'>Learn More</span>
              </button>
              <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]'>
                <Link to={'/contact'} className='truncate'>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
