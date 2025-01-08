import Link from 'next/link';
import React from 'react';

const Experience = () => {
    const experiences = [
        {
            logo: 'https://media.licdn.com/dms/image/v2/D560BAQHwQ5Kye2yTpg/company-logo_200_200/company-logo_200_200/0/1701942046455/marianaai_logo?e=1744243200&v=beta&t=IvUEm7scJZsNg7NgnwaDGqhidRT2ki2rJI4Q-d7Z5bA', // Replace with your company logo URL
            companyName: 'MarianaAI',
            role: 'Software Engineer Intern',
            start: 'AUG 2024',
            end: 'Present',
            location: 'Bengaluru, Karnataka',
            link: 'https://marianaai.com'
        },
        {
            logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEbNJET8cw0_Q/company-logo_200_200/company-logo_200_200/0/1630568526588/fintricity_logo?e=1744243200&v=beta&t=vwS4TZiSinIks9PTX7e5G1ruLnhM0F-0JiN5dEZDFhg', // Replace with your company logo URL
            companyName: 'Fintricity',
            role: 'Full Stack Developer Intern',
            start: 'April 2024',
            end: 'AUG 2024',
            location: 'Remote',
            link: 'https://fintricity.com'
        },
    ];

    return (
        <div
            id="experience"
            className="flex min-h-screen flex-col py-2 font-Noto pl-12 md:pl-32">
            <div
                className="h-[6px] w-[64px] bg-blue-500 pt-2 mt-44 rounded-md"
                data-aos="fade-up"
                data-aos-duration="100"
            ></div>
            <div
                data-aos="fade-up"
                className="text-main font-semibold opacity-[.95] text-3xl md:text-6xl"
            >
                Experience
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="flex md:justify-start flex-col md:flex-row"
            >
                {experiences.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-row gap-4 justify-start mr-20 my-6 md:my-16 rounded-md p-4 shadow-md"
                    > 
                        <Link href={item.link}>
                        <img
                            src={item.logo}
                            alt={`${item.companyName} logo`}
                            className="w-16 h-16 mb-4 rounded-lg cursor-pointer"
                        />
                        </Link>
                        <div> 
                        <Link href={item.link}>
                        <div className="text-blue-600 cursor-pointer font-semibold opacity-[.95] text-xl md:text-3xl">
                            {item.companyName}
                        </div>
                        </Link>
                        <div className="text-main font-light text-sm md:text-base font-Space mt-2 opacity-[.70]">
                            {item.role}
                        </div>
                        <div className="text-gray-600 font-light text-sm md:text-base font-Space mt-1 opacity-[.85]">
                            {item.start} - {item.end}
                        </div>
                        <div className="text-gray-500 font-light text-sm md:text-base font-Space mt-1 opacity-[.75]">
                            {item.location}
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
