"use client";
import Twitter from "../../../public/skills/Twitter.svg";
import LinkedIn from "../../../public/skills/LinkedIn.svg";
import GitHub from "../../../public/skills/Github-Dark.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BadgeSocialMedia() {
  const router = useRouter();
  const socialMedia = [
    { name: "Twitter", image: Twitter, link: "https://x.com/howlilcode" },
    {
      name: "LinkedIn",
      image: LinkedIn,
      link: "https://www.linkedin.com/in/mhdulilabshar/",
    },
    { name: "GitHub", image: GitHub, link: "https://github.com/howlil" },
  ];

  return (
    <section className="flex items-center gap-4 p-4 border border-neutral-50 border-opacity-15 bg-neutral-50 bg-opacity-5 rounded-2xl backdrop-blur-sm ">
      {socialMedia.map((social) => (
        <div
          key={social.name}
          onClick={() => router.push(social.link)}
          className="cursor-pointer w-full p-2 rounded-md bg-neutral-100 bg-opacity-15 flex items-center gap-2"
        >
          <Image
            src={social.image}
            className="p1"
            height={32}
            alt={social.name}
          />
          <p className="text-md text-neutral-300">{social.name}</p>
        </div>
      ))}
    </section>
  );
}
