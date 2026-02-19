import { motion } from "framer-motion";
import { Youtube, MessageCircle, Instagram } from "lucide-react";
import Layout from "@/components/Layout";
import SeeMore from "@/components/SeeMore";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
  socials: { type: string; url: string }[];
}

// Manually add team members here
const team: TeamMember[] = [
  {
    id: "1",
    name: "Vivan XD",
    role: "Founder & Creator",
    avatar: "",
    description: "The founder of Vivan Zone. Passionate Minecraft content creator, community builder, and gaming enthusiast dedicated to creating amazing content and experiences for the community.",
    socials: [
      { type: "youtube", url: "https://www.youtube.com/channel/UC5AFDEZuWZWDr-Dg0eh6h1g?sub_confirmation=1" },
      { type: "discord", url: "https://discord.com/invite/eK4Drc7tGE" },
    ],
  },
  {
    id: "2",
    name: "Member 2",
    role: "Moderator",
    avatar: "",
    description: "A dedicated moderator helping keep the community safe, organized, and fun for everyone. Always available to help community members.",
    socials: [
      { type: "discord", url: "https://discord.com/invite/eK4Drc7tGE" },
    ],
  },
  {
    id: "3",
    name: "Member 3",
    role: "Builder",
    avatar: "",
    description: "Talented Minecraft builder specializing in medieval and fantasy builds. Contributes stunning creations to the Vivan Zone projects.",
    socials: [
      { type: "discord", url: "https://discord.com/invite/eK4Drc7tGE" },
    ],
  },
];

const socialIcon = (type: string) => {
  switch (type) {
    case "youtube": return <Youtube size={18} />;
    case "discord": return <MessageCircle size={18} />;
    case "instagram": return <Instagram size={18} />;
    default: return null;
  }
};

const Team = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-gradient-red">The Team</span>
          </motion.h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Meet the people behind Vivan Zone
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-xl border border-border bg-card p-6 card-hover flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-secondary border-2 border-primary flex items-center justify-center mb-4 overflow-hidden">
                  {member.avatar ? (
                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-heading text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{member.name}</h3>
                <span className="text-xs text-primary font-medium mb-3">{member.role}</span>
                <SeeMore text={member.description} />
                <div className="flex gap-3 mt-4">
                  {member.socials.map((social, j) => (
                    <a
                      key={j}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/15 transition-colors"
                    >
                      {socialIcon(social.type)}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
