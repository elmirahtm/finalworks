import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Card = () => {
  return (
    <div className=" bg-slate-300 flex flex-col items-center">
      <h2>KONDİSİONER</h2>
      <Image src="/kondisioner.png" alt="beko" width={245} height={291} />
      <Link
        className="w-[80px] h-[40px]  rounded-tl-[80px] rounded-tr-[80px] bg-blue-600 flex justify-center items-center  "
        href={"#"}
      >
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Card;

// background: url(<path-to-image>), lightgray 50% / cover no-repeat;
// mix-blend-mode: multiply;
