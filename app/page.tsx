import { Hero as HeroSection } from "@/components/Hero";
import { Skills as SkillsSection } from "@/components/Skills";
import { Projects as ProjectsSection } from "@/components/Projects";
import { Divider } from "@nextui-org/react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <div className="container">
        <Divider className="mt-20 mb-10" />
      </div>
      <ProjectsSection />
    </>
  );
};

export default Home;
