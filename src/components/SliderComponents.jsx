import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperData = [
    {
      img: "/assets/img/webp/accounting.webp",
      title: "VAT and TAX Service in U.A.E",
      subtitle: "Delivering beautiful digital products",
    },
    {
      img: "/assets/img/webp/account1.webp",
      title: "Start your online business today",
      subtitle: "Delivering beautiful digital products",
    },
    {
      img: "/assets/img/webp/audit.jpg",
      title: "The best way to promote business",
      subtitle: "Delivering beautiful digital products",
    },
  ]
  
  

const HomeBusinessPage = (props) => {
    return (
     
<section className="relative h-screen md:h-[600px] sm:h-[500px]">
    <Swiper
  className="h-full relative"
  modules={[Pagination, Autoplay]}
  slidesPerView={1}
  spaceBetween={0}
  loop={true}
  autoplay={{ delay: 4500, disableOnInteraction: false }}
  pagination={{ dynamicBullets: false, clickable: true }}
>
  {SwiperData.map((item, i) => (
    <SwiperSlide
      key={i}
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      <div className="flex h-full items-center justify-center">
        <div className="text-white font-serif flex flex-col items-center max-w-xl mx-auto text-center relative z-10">
          <p className="mb-10 font-light text-md opacity-70 xs:mb-5">{item.subtitle}</p>
          <h2 className="mb-14 font-semibold xs:mb-9">{item.title}</h2>
          <div className="inline-block space-x-6">
            <a
              href="https://1.envato.market/AL7Oj"
              target="_blank"
              className="inline-block py-3 px-6 bg-gradient-to-r from-[#556fff] to-[#ff798e] text-white font-serif text-xs tracking-wider font-medium uppercase rounded-none"
            >
              PURCHASE NOW
            </a>
            <a
              to="/page/our-process"
              className="inline-block relative border-b-2 border-transparent bg-transparent py-1 px-0 text-xs text-white font-serif tracking-wide uppercase hover:border-white"
            >
              HOW WE WORK
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
</section>
 
  )
}

export default HomeBusinessPage
