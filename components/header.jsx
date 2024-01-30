import {Link} from 'react-scroll'
const header = () => {
  return (
    <div className="sticky z-40 top-0 justify-end hidden md:flex" data-aos="fade-down"
    data-aos-delay="100">
        <Link activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500} 
              className="cursor-pointer m-4 mt-8 text-xs text-main"><span className="mr-2 text-blue-500 font-normal">
              01.</span>About
          </Link>
          <Link activeClass="active"
              
              to="technologies"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500} 
              className="cursor-pointer m-4 mt-8 text-xs text-main"><span className="mr-2 text-blue-500 font-normal">
              02.</span>Technologies
          </Link>
          <Link activeClass="active"
              
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500} 
              className="cursor-pointer m-4 mt-8 text-xs text-main"><span className="mr-2 text-blue-500 font-normal">
              03.</span>Projects
          </Link>
          <Link activeClass="active"
              
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500} 
              className="cursor-pointer m-4 mt-8 text-xs text-main"><span className="mr-2 text-blue-500 font-normal">
              04.</span>Contact
          </Link>
        
    </div>
  )
}

export default header