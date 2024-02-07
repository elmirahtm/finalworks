import Link from 'next/link'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { TbMapPin } from 'react-icons/tb'

const Phone = () => {
  return (
    <div>
        <div className="bg-[url('/elaqebg.jpg')] bg-no-repeat  w-[160rem] h-[29rem] mr-72 mt-10 text-white ml-[40rem] max-sm:m-auto max-sm:mt-36">
              <h1 className="text-3xl p-5">Əlaqə</h1>
              <span className="flex m-5 ">
                <TbMapPin className="mt-0.5" />
                <p>Bakı ş., Şamaxı yolu 15-ci km.</p>
              </span>
              <span className="flex ml-5 gap-3">
                <span>
                  <BsTelephone />
                </span>
                <span>
                  <p>(+994 12) 565-1-565</p>
                  <p>(+994 12) 565-2-565</p>
                  <p>(+994 55) 222-34-19</p>
                  <p>(+994 55) 222-32-46</p>
                </span>
              </span>
              <span className="flex ml-5 mt-3 gap-5">
                <span className="mt-1">
                  {" "}
                  <HiOutlineMail />{" "}
                </span>
                <span>
                  {" "}
                  <h4>office@solitonservice.com</h4>
                </span>
              </span>
            </div>

    </div>
  )
}

export default Phone