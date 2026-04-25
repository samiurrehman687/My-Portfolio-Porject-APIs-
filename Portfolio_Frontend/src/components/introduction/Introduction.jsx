import { useEffect, useState } from "react";
import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

const Introduction = () => {
  const [homeData, setHomeData] = useState(null);
  const [info, setInfo] = useState(null); // 🔥 NEW STATE

  // 🔥 FETCH HOME API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/homedata/`)
      .then((res) => res.json())
      .then((data) => setHomeData(data))
      .catch((err) => console.log(err));
  }, []);

  // 🔥 FETCH INFO SUMMARY API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/infosummary/`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.log(err));
  }, []);

  // 🔥 DYNAMIC DATA BANAYA (loop ke liye)
  const informationSummaryData = info
    ? [
        {
          id: 1,
          title: "Experience",
          description: info.experience,
        },
        {
          id: 2,
          title: "Projects Completed",
          description: info.project_complete,
        },
        {
          id: 3,
          title: "Happy Clients",
          description: info.happy_clients,
        },
      ]
    : [];

  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">

        {/* 🔥 TEXT SECTION */}
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">

          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              {homeData?.heading || "Sami Ur Rehman"}
            </span>
          </p>

          {!homeData ? (
              <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
                Loading content please wait...
              </p>
            ) : (
              <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
                {homeData?.paragraph}
              </p>
            )}

          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="#contact"
            >
              Say Hello!
            </a>
          </p>
        </div>

        {/* 🔥 STATS SECTION (NOW DYNAMIC) */}
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 IMAGE SECTION */}
        <div className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative bg-gray-100 rounded-3xl overflow-hidden">
          
          {!homeData ? (
            // 🔹 Loading skeleton (no flash issue)
            <div className="w-full h-full animate-pulse bg-gray-200 rounded-3xl" />
          ) : (
            <img
              className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl transition-opacity duration-500"
              src={
                homeData?.image
                  ? `${import.meta.env.VITE_API_URL}${homeData.image}`
                  : person
              }
              alt="person"
            />
          )}

        </div>
    </div>
  );
};

export default Introduction;