import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

export const ConnectWithUs = () => {
  return (
    <section className="py-10 bg-[url(/programmes/footer-bg.svg)] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1320px] mx-auto w-full">
        <h3 className="text-[40px] font-semibold mb-5 text-white">
          Connect With Us
        </h3>
        <div className="flex items-center gap-6">
          <div className="w-3/12">
            <Link
              href="tel:9311411717"
              className="bg-[#ffffff0d] backdrop-blur-[22px] p-2.5 border border-[#ffffff40] rounded-[30px] flex items-center"
            >
              <div className="w-[50px] h-[50px] bg-[#e31e24] flex items-center justify-center rounded-full">
                <PhoneCall className="text-xl text-white" />
              </div>
              <span className=" p-2.5 flex items-center gap-2.5 text-sm font-bold text-white">
                <span className="">Call Us:</span>
                <span>9311411717</span>
              </span>
            </Link>
          </div>
          <div className="w-4/12">
            <Link
              href="#"
              className="bg-[#ffffff0d] backdrop-blur-[22px] p-2.5 border border-[#ffffff40] rounded-[30px] flex items-center"
            >
              <div className="w-[50px] h-[50px] bg-[#e31e24] flex items-center justify-center rounded-full">
                <Mail className="text-xl text-white" />
              </div>
              <span className=" p-2.5 flex items-center gap-2.5 text-sm font-bold text-white">
                <span className="">Email Us:</span>
                <span>welcome@krmangalam.edu.in</span>
              </span>
            </Link>
          </div>
          <div className="w-5/12">
            <Link
              href="#"
              className="bg-[#ffffff0d] backdrop-blur-[22px] p-2.5 border border-[#ffffff40] rounded-[30px] flex items-center"
            >
              <div>
                <div className="w-[50px] h-[50px] bg-[#e31e24] flex items-center justify-center rounded-full">
                  <MapPin className="text-xl text-white" />
                </div>
              </div>
              <span className=" p-2.5 flex items-center gap-2.5 text-sm font-bold text-white">
                <span className=""></span>
                <span>
                  Address: K.R. Mangalam University, Sohna - Gurgaon Road,
                  Sohna, Sohna Rural, Gurugram, Haryana 122103
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
