import { Github, Send, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by an elite Web3 full-stack developer. ©{" "}
            {new Date().getFullYear()} Jesutola Olusegun.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/Jenola344" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://x.com/jenola_dev" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://t.me/Jenolabase_eth" target="_blank" rel="noreferrer">
            <Send className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="mailto:jenoladev@gmail.com" target="_blank" rel="noreferrer">
            <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}