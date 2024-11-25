import React from "react";
import Image from "next/image";
import { Sora } from "@next/font/google";
import { RiDownloadCloud2Line } from "react-icons/ri";
const sora = Sora({ subsets: ["latin"] });
const Herosession = () => {
  return (
    <div>
      <div
        className={`w-[1150px] h-[524px] flex items-center space-x-20 mx-auto `}
      >
        <div className="grid-container gap-y-12">
          <div className="grid-span  flex flex-col space-y-2">
            <p className={`${sora.className} text-[24px] text-hieveryone font-normal`}>
              Hi Everyone, I am
            </p>
            <p className={`${sora.className} font-bold text-[48px]`}>Rizfan Herlaya</p>
            <p className={`${sora.className} font-normal text-[20px] `}>
              Lorem ipsum dolor sit amet consectetur. Vitae maecenas
              pellentesque tellus tempus purus integer nisi cras fermentum.
            </p>
          </div>
          <div className="grid-span flex gap-6">
            <button className=" w-[274px] h-[64px] font-normal text-[20px] bg-cvbCK border button-border text-white">
              <div className="flex justify-evenly">
                Download CV{" "}
                <RiDownloadCloud2Line className="h-[30px] w-[30px] relative left-[-20px]" />
              </div>
            </button>
            <button className=" w-[274px] h-[64px] font-normal text-[20px] text-imgback bg-explorecolor border button-border ">
              Explore More
            </button>
          </div>
        </div>
        <div className="w-[479px] h-[320px] bg-imgback rounded-2xl  relative">
          <div className="mx-auto">
            <Image
              src={"/images/myphoto.png"}
              width={405}
              height={524.76}
              alt="Image"
              className=" absolute top-[-105px]"
            />
          </div>
        </div>
      </div> 
    {/* herosession done */}
      <div className="h-[616px] bg-white flex justify-evenly ">
        <div>
          <Image
            src={"/images/typing.png"}
            width={500}
            height={500}
            alt="typingphoto"
          />
        </div>
        <div className="w-[564px] h-[358px] mt-24 flex-col space-y-4">
          <p className={`${sora.className} text-imgback font-semibold text-[24px]`}>
            About
          </p>
          <h1 className={`${sora.className} font-bold text-[48px] text-black `}>
            About Me?
          </h1>
          <p className={`${sora.className} font-normal text-[20px] text-abouttext`}>
            Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a
            adipiscing non aliquet. Leo semper lacus fringilla consectetur cras
            ac ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam
            consectetur aliquam vitae suspendisse vel leo. Nec quisque senectus
            laoreet id pulvinar id vulputate. Montes consectetur diam non
            aliquam nunc maecenas non. Molestie pretium amet id dictum vitae nam
            vel sit. Rhoncus massa velit ut amet massa morbi eget.{" "}
          </p>
        </div>
      </div>
      <div className="w-[873px] h-[281px] flex flex-col items-center justify-start mx-auto">
        <h2 className={`${sora.className} font-semibold text-[32px] text-imgback `}>
          Skills
        </h2>
        <h1 className={`${sora.className} font-bold text-[48px] `}>
          What I am capable of?{" "}
        </h1>
        <div className={` h-[129px] w-[852px] gap-[30px] flex mt-4`}>
          <Image
            src={"/images/html.png"}
            height={107}
            width={102}
            alt="html"
          />
          <Image
            src={"/images/CSS.png"}
            height={101}
            width={91}
            alt="css"
          />
          <Image
            src={"/images/bootstrap.png"}
            height={101}
            width={101}
            alt="bootsrap"
          />
          <Image
            src={"/images/tailwindcss.png"}
            height={89}
            width={134}
            alt="tailwind"
          />
          <Image
            src={"/images/php.png"}
            height={97}
            width={166}
            alt="php"
          />
          <Image
            src={"/images/laravel.png"}
            height={129}
            width={108}
            alt="laravel"
          />
        </div>
      </div>
      <div className={`h-[1036px] bg-white  flex flex-col items-center justify-start `}>
        <h2 className={`${sora.className} font-semibold text-[32px] text-imgback`}>Projects</h2>
        <h1 className={`${sora.className} font-bold text-[48px] text-black`}>What I have made?</h1>
        <div className="grid-projects-container space-x-5 ml-6">
            <div className={`flex flex-col space-y-3 rounded-lg shadow-lg
                `}>
                <Image src={"/images/projects/1.png"} width={363} height={310} alt="project1"/> <h2 className={`${sora.className} font-semibold text-[20px]`}>Portfolio Website Design</h2>
                <h3 className={`${sora.className} text-[14px] font-normal  text-projectcolor`}>Lorem ipsum dolor sit amet consectetur.</h3>
                <p className={`${sora.className} text-[14px] text-imgback  flex p-6 space-x-4`}>Figma</p>

            </div>
            <div className={`flex flex-col space-y-3 rounded-lg shadow-lg`}><Image src={"/images/projects/2.png"} width={363} height={310} alt="project2"/><h2 className={`${sora.className} font-semibold text-[20px]`}>LitterCycle Exchange</h2>
                <h3 className={`${sora.className} text-[14px] font-normal  text-projectcolor`}>Lorem ipsum dolor sit amet consectetur.</h3>
                <div className={`${sora.className} text-[14px] text-imgback   flex p-6 space-x-4`}><h3>Live View</h3><h3>Github</h3><h3>Figma</h3></div>
             </div>
            <div className={`flex flex-col space-y-3 rounded-lg shadow-lg`}><Image src={"/images/projects/3.png"} width={363} height={310} alt="project3"/>
            <h2 className={`${sora.className} font-semibold text-[20px]`}>Edubix</h2>
                <h3 className={`${sora.className} text-[14px] font-normal  text-projectcolor`}>Lorem ipsum dolor sit amet consectetur.</h3>
                <div className={`${sora.className} text-[14px] text-imgback flex p-6 space-x-4`}><h3>Live View</h3><h3>Github</h3></div>
             </div>

        </div>
        <div className="grid-projects-container space-x-5 ml-6 my-[50px]">
            <div className={`flex flex-col space-y-3 rounded-lg shadow-lg
                `}>
                <Image src={"/images/projects/ppdb.png"} width={363} height={310} alt="project1"/> <h2 className={`${sora.className} font-semibold text-[20px]`}>PPDB SMK Telesandi Bekasi</h2>
                <h3 className={`${sora.className} text-[14px] font-normal  text-projectcolor`}>Lorem ipsum dolor sit amet consectetur.</h3>
                <p className={`${sora.className} text-[14px] text-imgback  flex p-6 space-x-4`}>Live View</p>

            </div>
            <div className={`flex flex-col space-y-3 rounded-lg shadow-lg`}><Image src={"/images/projects/ppdb.png"} width={363} height={310} alt="project2"/><h2 className={`${sora.className} font-semibold text-[20px]`}>PPDB SMK Telesandi Bekasi</h2>
                <h3 className={`${sora.className} text-[14px] font-normal  text-projectcolor`}>Lorem ipsum dolor sit amet consectetur.</h3>
                <div className={`${sora.className} text-[14px] text-imgback   flex p-6 space-x-4`}><h3>Live View</h3></div>
             </div>
            <div className={`flex flex-col space-y-3 rounded-lg shadow-lg`}><Image src={"/images/projects/ppdb.png"} width={363} height={310} alt="project3"/>
            <h2 className={`${sora.className} font-semibold text-[20px]`}>PPDB SMK Telesandi Bekasi</h2>
                <h3 className={`${sora.className} text-[14px] font-normal  text-projectcolor`}>Lorem ipsum dolor sit amet consectetur.</h3>
                <div className={`${sora.className} text-[14px] text-imgback flex p-6 space-x-4`}><h3>Live View</h3></div>
             </div>

</div>
</div>
    </div>
  );
};

export default Herosession
