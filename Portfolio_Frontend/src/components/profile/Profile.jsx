import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/about/`)
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">

        {/* IMAGE SECTION */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={
                about?.image
                  ? `${import.meta.env.VITE_API_URL}${about.image}`
                  : ""
              }
            />
          </div>

          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 bg-white rounded-[4px] shadow-2xl">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="max-sm:w-full w-[33rem]">
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] max-md:text-center font-semibold mb-8">
            {about?.heading || "Loading..."}
          </h2>

          <div className="text-sm sm:text-lg text-gray-600 max-md:text-center">
            <p>
              {about?.paragraph || "Loading description..."}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn px-6 py-3 btn-primary text-sm"
              href="#portfolio"
            >
              My Projects
            </a>

            <a
              className="btn px-6 py-3 bg-white ms-4 hover:text-picto-primary"
              href={
                about?.cv_file
                  ? `${import.meta.env.VITE_API_URL}${about.cv_file}`
                  : "#"
              }
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;