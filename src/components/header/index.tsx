/* eslint-disable jsx-a11y/anchor-is-valid */
import { PrimaryButton } from "components/button";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { resumeView } from "utils/helper";
import socialLinks from "json/social-link.json";

type PropsTypes = {
  refProp: any;
  about: () => void;
};

export const Header: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div className="min-h-screen grid content-center" ref={props.refProp}>
      <div className="container w-full mx-auto px-4 sm:px-0 text-center lg:text-left">
        <div>
          <p className="text-[22px] text-primary">Hello ! I'm</p>
          <p className="capitalize font-bold text-[34px] sm:text-[40px] lg:text-[60px] xl:text-[80px] mb-2 lg:mb-0 leading-tight text-white">
            Abdullah Al Mamun
          </p>
          <p className="text-[22px] xl:text-[28px] font-bold text-primary">
            Software Engineer
          </p>
          <div className="flex justify-center lg:justify-start gap-2 mb-2">
            <p className="text-[17px] text-white">Backend Developer</p>
            <p className="text-[17px] text-white">|</p>
            <p className="text-[17px] text-white">Frontend Developer</p>
          </div>

          {/* Follw me */}
          <div className="flex justify-center lg:justify-start gap-2 mb-9">
            <div className="bg-secondary h-[2px] w-8 mt-3" />
            <div>
              <p className="text-base font-normal text-secondary">Follow Me</p>
            </div>
            <div className="inline-flex gap-2">
              <a href={socialLinks.github} rel="noreferrer" target="_blank">
                <AiOutlineGithub size={20} className="text-white" />
              </a>
              <a href={socialLinks.linkedin} rel="noreferrer" target="_blank">
                <GrLinkedinOption size={20} className="text-white" />
              </a>
              <a href={socialLinks.leetcode} rel="noreferrer" target="_blank">
                <SiLeetcode size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Button group */}
          <div className="inline-flex gap-4">
            <PrimaryButton type="button" filled onClick={() => resumeView()}>
              My Resume
            </PrimaryButton>
            <PrimaryButton type="button" onClick={props.about}>
              About Me
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
