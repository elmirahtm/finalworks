"use client";
import Carousel2 from "../Carousel2";
import Carousel3 from "../Carousel3";
import MapItem from "../MapItem";
import Footer from "../Footer";
import LiderService from "../LiderService";
import QuickQuestion from "../QuickQuestion";
import MasterConnect from "../MasterConnect";
import Brends from "../Brends";
import Brends2 from "../Brends2";
import RepairInstall from "../Repairİnstall";

const MainPage = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <Brends />
          </div>

          <div>
            <RepairInstall />
          </div>

          <div>
            <Brends2 />
          </div>
        </div>

        <div className="max-sm:mt-40">
          <div className="bg-cyan-900 py-4 w-full h-[42rem] max-sm:h-[21rem]">
            <h1 className=" text-center text-2xl text-slate-50 p-4 ">
              Servis Məntəqələrimiz
            </h1>
            <MapItem />
          </div>
        </div>

        <div>
          <LiderService />
        </div>

        <div className="w-full">
          <Carousel2 />
        </div>

        <div>
          <QuickQuestion />
        </div>

        <div>
          <Carousel3 />
        </div>

        <div>
          <MasterConnect />
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
