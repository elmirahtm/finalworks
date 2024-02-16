import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { TbMapPin } from 'react-icons/tb'

const MasterConnect = () => {
    const router = useRouter()
    const handlesubmit = (e:any) => {
        e.preventDefault()
        router.push("/order")
    }
  return (
    <div>
         <div>
          {/* <div className="bg-[url('/image.jpg')] bg-no-repeat ml-5  w-full h-[45rem] mt-8  "> */}
          <div className="bg-sky-900 h-[45rem] max-sm:bg-transparent max-sm:mb-[33rem]">
            <div className="container m-auto  ">
              <div className="flex justify-center max-sm:text-center max-sm:block max-sm:-ml-20 ">
                <div className="bg-slate-200 w-[53%] h-[22.8rem] px-2  mt-10 max-sm:ml-0 max-sm:mb-0 max-sm:w-[30rem] max-sm:h-[35rem] max-lg:h-[23.4rem]  ">
                  <div className="ml-4 mt-7 ">
                    <h1 className="text-3xl mb-5 ">Usta sifarişi</h1>
                    <p className="w-[30rem] max-sm:w-[20rem] max-sm:m-auto">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ac est nulla tellus pharetra egestas.
                    </p>
                    <form onSubmit={handlesubmit} className='max-sm:flex flex-col' >
                      <div className="flex gap-9 mt-5 max-sm:flex-col max-lg:flex-col ">
                        <div>
                          <input
                          required
                            className="border-b-2 border-slate-300 bg-transparent w-[18rem]"
                            type="text"
                            placeholder="*Adınız və Soyadınız"
                          />
                        </div>
                        <div>
                          <input
                          required
                            className="border-b-2 border-slate-300 bg-transparent w-[18rem]"
                            type="number"
                            placeholder="*Telefon nömrəniz"
                            name=""
                            id=""
                          />
                        </div>
                      </div>
                      <div className="flex gap-9 mt-10 max-sm:flex-col max-lg:flex-col">
                        <div>
                          {" "}
                          <input
                          required
                            className="border-b-2 border-slate-300 bg-transparent w-[18rem]"
                            type="text"
                            placeholder="Sifariş etmək istədiyiniz xidməti seçin"
                          />
                        </div>
                        <div>
                          {" "}
                          <input
                          required
                            className="border-b-2 border-slate-300 bg-transparent w-[18rem]"
                            type="text"
                            placeholder="Sifariş haqqında məlumat"
                          />
                        </div>
                      </div>
                      
                        
                        <button className="bg-blue-600 text-slate-50 rounded-lg w-52 h-12 text-center p-2 mt-7">
                          Sifariş et
                        </button>{" "}
                      
                    </form>
                    <div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-700  w-[40%] h-[22.8rem]   mt-10 text-white  max-sm:-mt-28 max-sm:w-[30rem] max-sm:h-[29rem] max-lg:h-[23.4rem] ">
                  <h1 className="text-3xl p-5">Əlaqə</h1>
                  <div className=" container m-auto ">
                  <span className="flex m-5 ">
                    <TbMapPin className="mt-0.5" />
                    <Link href={"https://maps.app.goo.gl/KWS67w3JSZ6xxFLh7"} target="_blank">Bakı ş., Şamaxı yolu 15-ci km.</Link>
                  </span>
                  <span className="flex ml-5 gap-3">
                    <span>
                      <BsTelephone />
                    </span>
                    <span className="flex flex-col">
                    <Link href={"tel:+994 12 565-1-565"} >(+994 12) 565-1-565
                  </Link>
                  <Link href={"tel:+994 12 565-2-565"} >(+994 12) 565-2-565
                  </Link>
                  <Link href={"tel:+994 55 222-34-19"} >(+994 55) 222-34-19
                  </Link>
                  <Link href={"tel:+994 55 222-32-46 "} >(+994 55) 222-32-46  </Link>
                    </span>
                  </span>
                  <span className="flex ml-5 mt-3 gap-5">
                    <span className="mt-1">
                      {" "}
                      <HiOutlineMail />{" "}
                    </span>
                    <span>
                      {" "}
                      <Link href={"mailto:"}>office@solitonservice.com</Link>
                    </span>
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

    </div>
  )
}

export default MasterConnect