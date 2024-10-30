import Image from "next/image";
import ProfileUser from "@/components/Home/ProfileUser";
import Vector from "../../public/vector.svg";
import Summary from "@/components/Home/Summary";
import Skill from "@/components/Home/Skill";
import BadgeSocialMedia from "@/components/Home/BadgeSocialMedia";

export default function Home() {
  return (
    <>
      <section className="grid relative z-10 grid-cols-2 gap-4 ">
        <div className="space-y-4">
          <ProfileUser />
          <Summary />
        </div>
        <div className="space-y-4">
          <Skill />
          <BadgeSocialMedia />
        </div>
      </section>
      <Image
        src={Vector}
        alt="vec"
        className="absolute blur-xl z-0 -bottom-64 -right-12"
      />
    </>
  );
}
