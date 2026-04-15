import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "API Development",
    description:
      "I build REST APIs using Django REST Framework for basic web applications.",
  },
  {
    id: 2,
    title: "Database Management",
    description:
      "I work with SQL databases and focus on data handling and queries.",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "I develop server-side applications using Python and Django.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I am a Backend Developer specializing in Django and Django REST Framework. I build backend applications and REST APIs using Python and Django, focusing on clean structure and functionality.
            I have experience working with databases using SQL and developing basic to intermediate backend systems with Django.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            I am continuously improving my skills in API development, authentication, and database design.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
