import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import Carousel from '~/components/Carousel/Carousel'

import { TbHandFingerRight } from 'react-icons/tb'
import HomepageCard from '~/components/Homepage_cards/HomepageCard.component.jsx'
import HomepageComments from '~/components/Homepage_comments/HomepageComments.component.jsx'

function HomePage() {
  let landscapeSlides = ['carousel_1.webp', 'carousel_2.jpg', 'carousel_3.jpg']
  let portraitSlides = [
    'carousel_portrait_1.jpg',
    'carousel_portrait_2.jpg',
    'carousel_portrait_3.avif'
  ]

  let utilities = [
    {
      imageSrc: 'hp_card_1.jpg',
      title: 'Gym',
      description: 'Đi nghỉ nhưng không quên leg day'
    },
    {
      imageSrc: 'hp_card_2.jpg',
      title: 'Bãi tắm',
      description: 'Bãi biển riêng tư'
    },
    {
      imageSrc: 'hp_card_5.jpg',
      title: 'Phòng riêng tư',
      description: 'Không gian riêng tư, yên tĩnh'
    },
    {
      imageSrc: 'hp_card_4.jpg',
      title: 'Buffet',
      description: 'Buffet sáng miễn phí'
    }
  ]

  let comments = [
    {
      userIcon: 'hp_icon_1.webp',
      rating: 5,
      comment:
        'I had the best time of my life at iHotel. The staff was so friendly and the amenities were top-notch. They have the best plastic chair I\'ve ever seen in my life. Feeling so motivated!'
    },
    {
      userIcon: 'hp_icon_2.jpg',
      rating: 4,
      comment: 'The room was clean and the view was amazing!'
    },
    {
      userIcon: 'hp_icon_3.jpg',
      rating: 5,
      comment:
        'Would invite my friends from Nigeria to come here. The service was excellent and the food was delicious.'
    }
  ]

  return (
    <>
      <Header />
      <Carousel
        landscapeSlides={landscapeSlides}
        portraitSlides={portraitSlides}
      />

      {/* Quick booking section */}
      <section id="homepage__quickBooking">
        <div className="container mx-auto py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-mainColor1-500">
              Kỳ nghỉ của bạn bắt đầu từ đây.
            </h2>
            <h3 className="text-lg text-gray-500 mt-4">
              Kỳ nghỉ trong mơ của bạn chỉ cách một bước chân! Hãy tận hưởng
              không gian tuyệt vời, thư giãn bên hồ bơi ngoài trời và lưu giữ
              những khoảnh khắc đáng nhớ tại iHotel.{' '}
            </h3>
            <div className="flex text-4xl mt-8 justify-center items-center">
              <TbHandFingerRight />
              <button
                className=" text-2xl ml-4 px-6 py-2 bg-mainColor1-500 text-white
              rounded hover:bg-mainColor1-600 transition"
              >
                Đặt phòng ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ultility section */}
      <section id="homepage__utilities">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-mainColor1-200 p-6">
          {utilities.map((util, index) => (
            <HomepageCard
              key={index}
              imageSrc={util.imageSrc}
              title={util.title}
              description={util.description}
            />
          ))}
        </div>
      </section>

      {/* Comments section */}
      <section id="homepage__comments">
        <div className="container py-20">
          <h2 className="text-4xl font-bold text-mainColor1-500 text-center">
            Cảm nghĩ của khách hàng chúng tôi
          </h2>
          <div className="flex flex-col gap-8 mt-8 mx-[10vw]">
            {comments.map((comment, index) => (
              <HomepageComments
                key={index}
                userIcon={comment.userIcon}
                rating={comment.rating}
                comment={comment.comment}
                isLeft2Right={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Address section*/}
      <section id="homepage__address">
        <div className="container mx-auto py-15">
          <h2 className="text-4xl font-bold text-mainColor1-500 text-center">
            Tìm chúng tôi ở đâu?
          </h2>
          <div className="w-full h-[50vh] mt-8  border-[10px] border-mainColor1-500">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153169!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b1a0b1b!2sFederation%20Square!5e0!3m2!1svi!2s!4v1611816753437!5m2!1svi!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default HomePage
