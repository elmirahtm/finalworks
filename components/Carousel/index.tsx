"use client";
import { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTE } = await import("tw-elements");
      initTE({ Carousel });
    };
    init();
  }, []);

  return (
<div
  id="carouselExampleCaptions"
  className="relative"
  data-te-carousel-init
  data-te-ride="carousel">
  <div
    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="0"
      data-te-carousel-active
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="1"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>

  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
      className="relative float-left -mr-[100%] w-full transition-transform  ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style={{backfaceVisibility:"hidden"}}>
      <img
        src="/banner.jpg"
        
        className="block w-full"
        alt="..." />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
      {/* <span>
      <h1 className="text-sky-700 text-5xl font-bold  -translate-y-96 -translate-x-96">Soliton Service</h1>
      <h2 className=" bg-red-600 w-[18rem] h-[4rem] text-6xl font-bold -mt-9 -ml-24 -translate-y-80 translate-x-14  ">20 ildir</h2>
      <h2 className=" text-slate-800 text-4xl font-bold -mt-8  -ml-16 -translate-y-64 -translate-x-96 ">xidmətinizdəyik</h2>
     
   <Image src="/frame.png" alt='line' width={229} height={114}/>
      </span>
   */}
      </div>
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform  ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      style={{backfaceVisibility:"hidden"}}>
              <img
        src="/banner2.jpg"
        className="block w-full"
        alt="..." />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
       
      </div>
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform  ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      style={{backfaceVisibility:"hidden"}}>
              <img
        src="banner3.jpg"
        className="block w-full"
        alt="..." />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
       
      </div>
    </div>
  </div>

  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span>
  </button>
  <button
    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span >
  </button>
</div>
  );
};

export default Carousel;