import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Card from "../Card";
import Link from "next/link";

const BodyList2 = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-center font-bold text-xl max-sm:w-72 max-sm:m-auto">
            Bütün brendlərin məişət texnikasını təmir edirik
          </h1>
        </div>
      </div>

      <div>
        <span className="flex gap-10">
          <span className="max-sm:-mt-6">
            <IoIosArrowBack />
          </span>

          <span>
            <Image src="/beko.png" alt="beko" width={83} height={65} />
          </span>
          <span>
            <Image src="/blomberg.png" alt="blomberg" width={144} height={65} />
          </span>
          <span>
            <Image src="/grundig.png" alt="grundig" width={182} height={65} />
          </span>
          <span>
            <Image src="/riffel.png" alt="riffel" width={126} height={65} />
          </span>
          <span className="mt-1.5 ">
            <Image src="/lg.png" alt="lg" width={72} height={65} />
          </span>
          <span>
            <Image src="/samsung.png" alt="samsung" width={146} height={65} />
          </span>

          <span className=" max-sm:-mt-6">
            <IoIosArrowForward />
          </span>
        </span>
      </div>

      <div className='bg-[url("/bg.png")] w-full h-[20rem]'>
        {/* <Image className='translate-y-36 ' src="/bg.png" alt='bg' width={1490} height={1190}/> */}

        <div>
          <div>
            <div>
              <p className="bg-red-600 w-[2rem] h-1 t absolute  left-96 mt-4 ml-64"></p>
              <h5 className="mt-28 relative -ml-8 text-center text-2xl font-bold">
                Təmir
              </h5>
              <p className="bg-red-600 w-[2rem] h-1"></p>
            </div>

            <div className="">
              <span className=" flex justify-center items-center gap-10 flex-wrap ">
                <span className=" max-sm:-mt-6">
                  <IoIosArrowBack />
                </span>

                {/* 
<span > <Image src="/Group1.png" alt='beko' width={245} height={291}/></span>
<span > <Image src="/Group3.png" alt='riffel' width={245} height={291}/>
<span> <Image className='-translate-y-64 translate-x-16 mt-4 bg-slate-50' src="/Soyuducu.png" alt='soyuducu' width={114} height={26}/></span>
 <span><Image className='-translate-y-64 ml-12 mt-1 ' src="/soyud.png" alt='soyud' width={148} height={144}/></span>

</span>

<span > <Image src="/Group3.png" alt='riffel' width={245} height={291}/></span>
<span > <Image src="/Group3.png" alt='riffel' width={245} height={291}/>
<span><Image className='-translate-y-64 translate-x-16 mt-4 bg-slate-50' src="/qabyuyan.png" alt='qabyuyan' width={114} height={26}/></span>
<span><Image className='-translate-y-56 ml-11 -mt-7 ' src="/paltar.png" alt='paltar' width={140} height={144}/></span>

</span> */}

                <Card />
                <Card />
                <Card />
                <Card />

                <span className=" max-sm:-mt-6">
                  <IoIosArrowForward />
                </span>
              </span>
            </div>
            <div>
              <Link href={"#"}>Hamisina bax</Link>
            </div>
          </div>

          {/* <div className=" ">
            <div className="m-auto ml-8 ">
              <p className="bg-red-600 w-[2rem] h-1 t absolute  left-64 ml-80"></p>
              <h5 className=" relative -ml-16 text-center text-2xl font-bold">
                Quraşdırılma
              </h5>
              <p className="bg-red-600 w-[2rem] h-1   ml-96  "></p>
            </div>

            <div>
              <span className=" flex justify-center gap-10 ">
                <span className=" max-sm:-mt-6">
                  <IoIosArrowBack />
                </span>

                <span>
                  <Image
                    src="/Group3.png"
                    alt="riffel"
                    width={245}
                    height={291}
                  />
                </span>

                <span>
                  <Image
                    src="/Group3.png"
                    alt="riffel"
                    width={245}
                    height={291}
                  />

                  <span>
                    <Image
                      className=" bg-slate-50"
                      src="/qabyuyan.png"
                      alt="qabyuyan"
                      width={114}
                      height={26}
                    />
                  </span>
                  <span>
                    <Image
                      className=" ml-11"
                      src="/paltar.png"
                      alt="paltar"
                      width={140}
                      height={144}
                    />
                  </span>
                </span>

                <span>
                  <span>
                    <Image
                      src="/Group3.png"
                      alt="riffel"
                      width={245}
                      height={291}
                    />
                  </span>
                  <span>
                    <Image
                      className="  bg-slate-50"
                      src="/elektriksobasi.png"
                      alt="elektriksobasi"
                      width={120}
                      height={26}
                    />
                  </span>
                  <span>
                    <Image
                      className=" ml-14"
                      src="/elektrik.png"
                      alt="riffel"
                      width={148}
                      height={144}
                    />
                  </span>
                </span>
                <span>
                  <Image
                    src="/Group1.png"
                    alt="beko"
                    width={245}
                    height={291}
                  />
                </span>

                <span className="max-sm:-mt-6">
                  <IoIosArrowForward />
                </span>
              </span>
              <div>
                <Image
                  className="m-auto "
                  src="/kecidhamisi.png"
                  alt="kecid"
                  width={248}
                  height={60}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="flex justify-center  gap-28 ">
        <span>
          <Image
            className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
            src="/beko.png"
            alt="beko"
            width={83}
            height={65}
          />
        </span>
        <span>
          <Image
            className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
            src="/blomberg.png"
            alt="blomberg"
            width={144}
            height={65}
          />
        </span>
        <span>
          <Image
            className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
            src="/grundig.png"
            alt="grundig"
            width={182}
            height={65}
          />
        </span>
        <span>
          <Image
            className="bg-slate-300 shadow-md rounded-md p-3 w-32 h-16"
            src="/riffel.png"
            alt="riffel"
            width={126}
            height={65}
          />
        </span>
      </div> */}
    </div>
  );
};

export default BodyList2;
