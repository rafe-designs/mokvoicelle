// data/team.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Omojola Kanyinsola",
    role: "CEO & Strategic Lead",
    bio: "Leading innovative digital agency initiatives, driving global recognition and all-round brand transformation.",
    image: "/images/team/kanyin.jpg",
  },
  {
    id: "2",
    name: "Aminu Abubakar",
    role: "Lead Software & Web Developer",
    bio: "Architecting high-performance web applications, modern interactive interfaces, and scalable full-stack solutions.",
    image: "/images/team/peter.jpg",
  },
  {
    id: "3",
    name: "Osho Oluwajomiloju",
    role: "3D Animator",
    bio: "Crafting immersive 3D animation, character models, and visual storytelling experiences.",
    image: "/images/team/jomiloju.jpg",
  },
  {
    id: "4",
    name: "Oyeniyi Olayinka",
    role: "Voiceover Artist",
    bio: "Delivering captivating voiceovers and audio branding for commercial and corporate media.",
    image: "/images/team/niyi.jpg",
  },
  {
    id: "5",
    name: "Ariyo David",
    role: "Graphics Designer & Video Editor",
    bio: "Specializing in visual identity, motion graphics, and post-production video editing.",
    image: "/images/team/david.jpg",
  },
  {
    id: "6",
    name: "Alade Omotayo",
    role: "Social Media Manager",
    bio: "Driving brand engagement, content strategy, and digital community growth.",
    image: "/images/team/alade.jpeg",
  },
  {
    id: "7",
    name: "Demilade Mogbojuri",
    role: "Content Creator & Creative Writer",
    bio: "Crafting compelling narratives and strategic copy that capture brand voices and deeply resonate with audiences.",
    image: "/images/team/audrey.jpg",
  },
  {
    id: "8",
    name: "Nifemi Oluwalana",
    role: "Music Producer",
    bio: "Engineering custom soundscapes, beats, and sonic identities that elevate media productions and brand experiences.",
    image: "/images/team/nifemi.heic",
  },
  {
    id: "9",
    name: "Israel Uzibor",
    role: "Poet & Video Editor",
    bio: "Blending rhythmic lyrical expression with cinematic post-production editing to create emotive visual stories.",
    image: "/images/team/israel.jpg",
  },
  {
    id: "10",
    name: "Abiobun Timileyin",
    role: "Content Creator & Videographer",
    bio: "Capturing striking visual moments and producing high-converting dynamic video content for modern brands.",
    image: "/images/team/timi.jpg",
  },
];