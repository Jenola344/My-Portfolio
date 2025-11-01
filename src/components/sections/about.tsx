import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';

const aboutImage = placeholderData.placeholderImages.find(
  (img) => img.id === 'about-me'
);

export default function AboutSection() {
  return (
    <section id="about" className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -translate-x-4 translate-y-4 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
           {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={600}
              height={600}
              data-ai-hint={aboutImage.imageHint}
              className="rounded-lg relative w-full h-auto object-cover"
            />
           )}
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">From Developer to DevRel Catalyst</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            My passion for technology began with a single line of code. This curiosity blossomed into a deep expertise in frontend development, where I learned to craft beautiful and intuitive user experiences. But I couldn't ignore the revolutionary potential of blockchain.
          </p>
          <p className="text-muted-foreground text-lg">
            Driven to be part of the decentralized future, I dove into smart contract engineering, mastering the logic that powers Web3. I realized my true calling wasn't just in building, but in empowering others to build. As a Developer Relations professional, I now merge my technical skills with my passion for community, helping to grow vibrant ecosystems and make blockchain technology accessible to all.
          </p>
        </div>
      </div>
    </section>
  );
}
