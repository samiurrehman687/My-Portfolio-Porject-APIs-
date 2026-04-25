import { useEffect, useState } from "react";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/contactinfo/`)
      .then((res) => res.json())
      .then((data) => setContactInfo(data))
      .catch((err) => console.log(err));
  }, []);

  const addressData = [
    {
      icon: faLocationDot,
      title: "Address",
      description: contactInfo?.address || "Loading...",
    },
    {
      icon: faEnvelope,
      title: "My Email",
      description: contactInfo?.email || "Loading...",
    },
    {
      icon: faPhone,
      title: "Call Me Now",
      description: contactInfo?.phone_number || "Loading...",
    },
  ];

  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">

          {/* LEFT SIDE */}
          <div>
            <p className="text-[35px] max-lg:hidden font-semibold text-[#132238]">
              Let’s discuss your Project
            </p>

            <p className="text-[12px] xs:text-[14px] sm:text-lg pt-4 text-soft-dark">
              I am a Backend Developer specializing in Django REST Framework. I am currently open to full-time opportunities and freelance projects involving backend development.
            </p>

            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>

            <SocialMedia />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full overflow-y-scroll py-6.5">
            <p className="text-xl mb-2 sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center">
              Let’s discuss your Project
            </p>

            <Form />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;