import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { id: 1, img: "/usta.png", basliq: "Televizor quraşdırılması" },
  { id: 2, img: "/usta2.png", basliq: " Paltaryuyan təmiri" },
  { id: 3, img: "/usta3.png", basliq: " Soyuducu quraşdırılması" },
  { id: 4, img: "/usta4.png", basliq: " Televizor təmiri" },
  { id: 5, img: "/usta5.png", basliq: " Kondisioner təmiri" },
  { id: 6, img: "/usta6.png", basliq: " Qabyuyan təmiri" },
  { id: 7, img: "/usta7.png", basliq: " Kondisioner təmiri" },
  { id: 8, img: "/usta8.png", basliq: " Kondisioner mator təmiri " }
]
function Carousel2() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className='bg-slate-300 pb-8'>
      <div className='w-full max-w-[1024px] m-auto'>

<h2 className='text-2xl font-bold mt-10 ml-9 pt-3  max-sm:text-center'>Gördüyümüz işlər</h2>
<div className=' w-full m-auto'>
  <div className='mt-20   text-center'>
    <Slider {...settings}>
      {
        data.map((d) => {
          return (
            <div key={d.id} className="">
              <div>
                <div className=''>
                  <img className='w-80 h-96' src={d.img} alt="" />
                </div>
                <div>
                  <p className='bg-teal-950 text-warning-50 w-80 p-4'>{d.basliq}</p>
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
//   return (
//     <div className='bg-slate-200'>
//       <div className='container m-auto'>

// <h2 className='text-2xl font-bold mt-10 ml-7  max-sm:text-center'>Gördüyümüz işlər</h2>
// <div className=' w-full m-auto'>
//   <div className='mt-20   p-7  text-center'>
//     <Slider {...settings}>
//       {
//         data.map((d) => {
//           return (
//             <div key={d.id} className="">
//               <div>
//                 <div className=''>
//                   <img className='w-80 h-96' src={d.img} alt="" />
//                 </div>
//                 <div>
//                   <p className='bg-teal-950 text-warning-50 w-80 p-4'>{d.basliq}</p>
//                 </div>
//               </div>
//             </div>
//           )
//         })
//       }
//     </Slider>
//   </div>

// </div>
// </div>
//     </div>

//   )
}

export default Carousel2