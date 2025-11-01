import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const text = "Building the bridge between Developers and Web3 Ecosystems.".split(" ");

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 pb-4">
             {text.map((el, i) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: i / 10,
                    }}
                    key={i}
                    className={["Developers", "Web3", "Ecosystems."].includes(el) ? "glowing-text" : ""}
                >
                    {el}{" "}
                </motion.span>
            ))}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            I'm Jesutola Olusegun, a passionate Developer Relations professional with a knack for frontend development and smart contract engineering.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
