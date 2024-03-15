import SkillCard from "@/components/skill-card";
import ButtonsCard from "@/components/buttons-card";
import MainCard from "@/components/main-card";

export default function MainContent() {
  return (
    <>
      <MainCard />
      <div className="flex flex-1 flex-col lg:flex-row gap-4 w-full">
        <SkillCard />
        <ButtonsCard />
      </div>
    </>
  );
}
