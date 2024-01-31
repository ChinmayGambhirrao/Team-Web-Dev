import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';

import { styles } from "../styles";
// import { github } from "../assets";
import website from "../assets/website.png";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({index, name, description, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img
              src={website}
              alt="website"
              className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
  <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Our Work</p>
        <h2 className={styles.sectionHeadText}>Websites We Build.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          At Acture Media, we take immense pride in the diverse and dynamic portfolio of exceptional websites we've crafted. Each project not only meets but consistently surpasses our clients' expectations, serving as a testament to our unwavering commitment to excellence, innovation, and client satisfaction. We approach every project with a relentless drive to push the boundaries of what's possible, infusing creativity, expertise, and cutting-edge technology into every aspect of our work. Our dedication to understanding our clients' unique needs, combined with our passion for delivering results that exceed expectations, has earned us a reputation as a trusted partner in the digital realm.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard
        key={`project-${index}`}
        index={index}
        {...project} />
      ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works");