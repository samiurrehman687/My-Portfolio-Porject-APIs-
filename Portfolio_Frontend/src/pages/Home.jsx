import { Helmet } from "react-helmet-async";

import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SamiNuxIT | Sami Ur Rehman - Python & Django Developer</title>

        <meta
          name="description"
          content="Sami Ur Rehman is a Python and Django Developer specializing in Django REST Framework, REST APIs, backend development, and modern web applications. Explore my portfolio and projects."
        />

        <link
          rel="canonical"
          href="https://my-portfolio-porject-ap-is-mkav.vercel.app/"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="SamiNuxIT | Sami Ur Rehman - Python & Django Developer"
        />

        <meta
          property="og:description"
          content="Explore Sami Ur Rehman's Python, Django, REST API and backend development portfolio."
        />

        <meta
          property="og:url"
          content="https://my-portfolio-porject-ap-is-mkav.vercel.app/"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative">
        <div className="introduction-profile-background">
          <div className="content">
            <Introduction />
            <Profile />
          </div>
        </div>

        <div className="bg-soft-white pt-30">
          <WorkProcess />
        </div>

        <div id="portfolio">
          <Portfolio />
        </div>

        <div className="bg-gray-900">
          <WorkTogether />
        </div>

        <div className="blog-background">
          <Blog />
        </div>

        <div className="bg-soft-white">
          <Profession />
        </div>

        <HappyClients />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
};

export default Home;