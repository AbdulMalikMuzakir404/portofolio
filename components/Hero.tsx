import React from "react";
import { Spotlight } from "./ui/SpotLight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-30 p-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-42 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 -left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-wider text-xs text-center text-blue-100 max-w-80">Dynamic Web Magic with Next.js</h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concept into Seamless User Experiences"
          />

          <p className="text-center md:-tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Abdul Malik Muzakir, I&apos;m a Back-end & Mobile Developer
          </p>

          <p className="text-center md:-tracking-wider mb-4 text-xs md:text-base lg:text-xl">
            I am a software engineer with almost one year and a half of experience, specializing in back-end and mobile
            development using technologies such as NestJS and Laravel. I am also skilled in front-end development with frameworks
            like Vue.js and Next.js,and I have experience building mobile applications using Flutter
          </p>

          <p className="text-center md:-tracking-wider mb-4 text-xs md:text-base lg:text-xl">
            Programming is not just a profession for me—it’s a passion. I am a quick learner who adheres to best practices,
            consistently delivering high-quality solutions efficiently and on time.
          </p>

          <a href="#about">
            <MagicButton title="Show my work" icon={<FaLocationArrow />} position={"right"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
