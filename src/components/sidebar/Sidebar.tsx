import Image from "next/image";
import Link from "next/link";
import KevinImg from "../../../public/me-profile.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <span className="sidebar-img">
        <Image src={KevinImg} alt="Kevin Andrews" width={150} height={150} />
        <p>Kevin Andrews</p>
      </span>
      <span className="sidebar-links">
        <Link className="sidebar-link" href="#about">
          About
        </Link>
        <Link className="sidebar-link" href="#skills">
          Skills
        </Link>
        <Link className="sidebar-link" href="#projects">
          Projects
        </Link>
        <Link className="sidebar-link" href="#contact">
          Contact
        </Link>
        <span className="external-profile-links"></span>
      </span>
    </div>
  );
};

export default Sidebar;
