import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { id: 1, img: "/img14.png" },
  { id: 2, img: "/img15.png" },
  { id: 3, img: "/img16.png" },
  { id: 4, img: "/img17.png" },
  { id: 5, img: "/img18.png" },
  { id: 6, img: "/img14.png" }

]
function Carousel3() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
<div>
<div className='container m-auto'>
      <h2 className='text-2xl font-bold text-center max-sm:mt-10'>Müştəri rəyləri</h2>
      <div className=' w-3/4 m-auto'>
        <div className='mt-20 bg-slate-200  p-7 ml-6 text-center'>
          <Slider {...settings}>
            {
              data.map((d) => {
                return (
                  <div key={d.id} className="">
                    <div>
                      <div className=''>
                        <img className='w-72 h-96' src={d.img} alt="" />
                      </div>

                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>




      </div>
    </div>
</div>
  )
}

export default Carousel3