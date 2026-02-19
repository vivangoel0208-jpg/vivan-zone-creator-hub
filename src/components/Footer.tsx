import { Link } from "react-router-dom";
import { Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Videos", path: "/videos" },
  { label: "Projects", path: "/projects" },
  { label: "Files", path: "/files" },
  { label: "Team", path: "/team" },
  { label: "About", path: "/about" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Vivan Zone" className="h-12 w-12 rounded-full border-2 border-primary" />
            <span className="font-heading text-2xl font-bold text-gradient-red">VIVAN ZONE</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.youtube.com/channel/UC5AFDEZuWZWDr-Dg0eh6h1g?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/15 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://discord.com/invite/eK4Drc7tGE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/15 transition-colors"
              aria-label="Discord"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vivan Zone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
