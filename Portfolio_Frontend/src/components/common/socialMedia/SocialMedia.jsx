import { useEffect, useState } from "react";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = () => {
  const [about, setAbout] = useState(null);

  // 🔥 FETCH ABOUT API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/about/`)
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.log(err));
  }, []);

  // 🔥 DYNAMIC LINKS
  const socialIcons = [
    {
      icon: faLinkedin,
      link: about?.linkedin,
    },
    {
      icon: faGithub,
      link: about?.github,
    },
  ];

  return (
    <>
      {socialIcons.map((item, index) => {
        // agar link empty ho to hide
        if (!item.link) return null;

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:p-3 md:p-3.75 hover:text-white rounded-md"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-xl w-4.5"
            />
          </a>
        );
      })}
    </>
  );
};

export default SocialMedia;