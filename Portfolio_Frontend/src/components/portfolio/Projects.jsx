import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="max-w-106 rounded-lg border border-gray-200 shadow-gray-300 hover:shadow-2xl transition-all duration-300 overflow-hidden">

      {/* 🔥 IMAGE FIX (IMPORTANT) */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={
            data?.image
              ? data.image.startsWith("http")
                ? data.image
                : `${import.meta.env.VITE_API_URL}/${data.image.startsWith("/") ? "" : "/"}${data.image}`
              : ""
          }
          alt={data?.title}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">
          {data?.category}
        </p>

        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>

        <p className="text-gray-600 text-xs xxs:text-[14px] leading-5">
          {data?.description}
        </p>

        <a
          href={data?.link}
          target="_blank"
          rel="noreferrer"
          className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full inline-flex items-center"
        >
          Case Study
          <span className="ms-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;