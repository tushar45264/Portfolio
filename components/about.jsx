import {details} from '../edit/data';
import Photo from './photo.png'
import Image from 'next/image';

const about = () => {
  return (
    <div className='flex justify-between items-center flex-col md:flex-row-reverse'>
    <div className='w-1/3 md:w-1/3 flex justify-center mt-24'>
    <Image
      src={Photo}
      alt="profile"
      className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-anchor-placement="center-bottom"
    />
  </div>

    <div className="flex flex-col py-2 font-Noto pl-12 md:pl-32" id="about" >
      <div className="w-full flex flex-col justify-between mt-20" >

        <div className=" text-blue-400 font-Space text-lg" data-aos="fade-up" data-aos-delay="500">Hello, I am</div>
        <div className="text-main  font-semibold opacity-[.95] text-4xl md:text-7xl pt-2" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="center-bottom">{details.firstName} {details.lastName}</div>
        <div className="text-main opacity-[.70] mt-6 text-3xl md:text-6xl" data-aos="fade-up" data-aos-delay="700" data-aos-anchor-placement="center-bottom">{details.role}</div>

      </div>

      <div className="w-4/5 md:w-1/2 flex flex-col justify-start" data-aos="fade-up" data-aos-delay="800" data-aos-anchor-placement="center-bottom">
        <div className="text-main opacity-[.70] mt-14 text-base md:text-lg font-Space">{details.about}</div>
      </div>

      <div data-aos="fade-up" data-aos-delay="900" data-aos-anchor-placement="center-bottom">
        {/* <button className="duration-500 mt-16 mr-4 hover:bg-transparent  bg-blue-500  hover:text-blue-500 text-main py-4 px-4 border border-transparent hover:border-blue-500 rounded-xl  font-Space font-semibold" onClick={() => window.location = `mailto: ${details.email}`}>Get in Touch</button> */}
        <a href="https://drive.google.com/file/d/1MPqCWfq74dAZeB65QlDbpmXz3MJVGE3G/view?usp=sharing
" target="_blank"><button className=" text-blue-500 duration-500 mt-16 bg-transparent hover:bg-blue-500 hover:text-main py-4 px-4 border border-blue-500 hover:border-transparent rounded  font-Space font-semibold">Resume</button></a>
      </div>
    </div>
    </div>
  );
};

export default about;
