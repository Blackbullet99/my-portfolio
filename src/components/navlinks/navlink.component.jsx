import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { NavLinkConatiner, NavLink, Top, Middle, Bottom } from "./navlink.styles";



const NavLinks = () => {
  return (
    <NavLinkConatiner>
      <Top>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/">Resume</NavLink>
      </Top>
      <Middle>
        <h3>let's talk</h3>
        <a href="">hello@zekeInc.dev</a>
      </Middle>
      <Bottom>
        <a href="https://twitter.com/Blackbu99">
          <BsTwitter color="#7f5af0" />
        </a>
        <a href="https://www.linkedin.com/in/isaac-okanigbe/">
          <BsLinkedin color="#7f5af0"/>
        </a>
        <a href="https://github.com/Blackbullet99">
          <BsGithub color="#7f5af0"/>
        </a>
        <a href="">
          <MdEmail color="#7f5af0" />
        </a>
      </Bottom>
    </NavLinkConatiner>
  );
};

export default NavLinks;
