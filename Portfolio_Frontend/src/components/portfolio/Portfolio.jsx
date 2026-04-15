import { useEffect, useState } from "react";
import Projects from "./Projects";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  // FETCH API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/project/`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  // LOAD MORE
  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2">
      
      {/* TITLE */}
      <div className="xl:mb-17.5 mb-5 text-center">
        <p className="section-title">Portfolio</p>
        <p className="font-normal text-[18px] pt-6 text-gray-400">
          Here's a selection of my recent work
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projects.slice(0, visibleCount).map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

      {/* BUTTON */}
      {visibleCount < projects.length && (
        <div className="text-center">
          <button
            onClick={loadMore}
            className="btn btn-primary py-3 px-6 mt-12.5 text-[16px] font-semibold"
          >
            More Project
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;