import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";


const Ustasifarişi = () => {
  return (
  <div className="flex max-sm:block max-sm:-mt-20">
 <div className='bg-[url("/goy.jpg")] bg-no-repeat w-[40rem] h-[49.1rem]'>
        <Link href="/">
          <div className="flex text-white gap-4 rounded-md ml-36 mt-20">
            <span>
              <FaArrowLeftLong className="mt-1" />
            </span>
            <p>Geri qayıt</p>
          </div>
        </Link>
        <div>
          <Image
            className="ml-24 mt-52"
            src="/service.png"
            alt="service"
            width={202}
            height={80}
          />
        </div>
      </div>

     <div className=" bg-slate-100 w-[65rem] -ml-7 p-8">
                <h1 className="text-3xl mb-5">Usta sifarişi</h1>
               
                <form className="pt-5 ">
                  <div className=" mt-5   ">
                    
                   <div>
                   <input
                        className=" mb-5 w-80 h-12 ml-12 p-4 rounded-md "
                        type="text"
                        placeholder="*Adınız və Soyadınız"
                        required
                      />
                   </div>
                    
                   
                    <div>
                    <input
                        className=" mb-5 w-80 h-12 ml-12 p-4 rounded-md"
                        type="number"
                        placeholder="*Telefon nömrəniz"
                        name=""
                        id=""
                        required
                      />
                    
                    </div>
                    
    
                    <div>
                    <input
                        className="mb-5 w-80 h-12 ml-12 p-4 rounded-md "
                        type="text"
                        placeholder="Sifariş etmək istədiyiniz xidməti seçin"
                        required
                      />
                  
                      
                    </div>
                    <div>
                    <input
                        className=" w-80 h-12 ml-12 p-4 rounded-md"
                        type="text"
                        placeholder="Sifariş haqqında məlumat"
                        required
                      />
                    </div>
                   
                  </div>
                </form>
                <div>
                  <Link href="/order">
                    {" "}
                   <input    className="bg-blue-600 text-slate-100 rounded-lg w-52 h-12 text-center p-2 ml-12 mt-7"
                               type="submit" placeholder="Sifariş et" required   />
                  </Link>
                </div>
              </div>
  </div>
  );
};

export default Ustasifarişi;
