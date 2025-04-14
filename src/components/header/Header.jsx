import Navbar from "../navbar/Navbar";
import image from "../../assets/images/mohammadpahlevani.jpg";

export default function Header() {

  return (
    <div className="container pt-10" id="home">
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center gap-10 mt-20 lg:flex-row">
        <img
          className="rounded-full size-50 object-cover shadow-xl shadow-gray-500 transition-all duration-300 delay-100 hover:scale-110"
          src={image}
          alt="personal-image"
        />
        <span className="block w-25 rounded h-[0.3rem] bg-linear-to-r from-blueme to-redme"></span>
        <p className="font-Vazir-Medium text-lg text-center lg:w-60">
          این منم محمد پهلوانی! فردی مسئولیت‌پذیر، دقیق با توانایی کار تیمی و حل
          مسائل، همچنین در شرایط دشوار به خوبی عمل می‌کنم و در یادگیری سریع و
          خودآموز نیز مهارت دارم.
        </p>
        <a
          href="#contact"
          className="font-Vazir-Medium text-white bg-linear-to-r from-blueme to-redme rounded-full pt-3 pb-3 pl-6 pr-6 transition-all duration-300 delay-100 hover:text-black"
        >
          با من در ارتباط باشید
        </a>
      </div>
 
    </div>
  );
}
