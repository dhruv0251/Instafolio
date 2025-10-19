import Image from 'next/image';
import type { ProfileData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

interface ProfileHeaderProps {
  profile: ProfileData;
  counts: {
    projects: number;
    certificates: number;
    achievements: number;
  };
}

const StatItem = ({ count, label }: { count: number, label: string }) => (
  <div className="text-center">
    <span className="font-bold text-lg sm:text-xl">{count}</span>
    <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
  </div>
);

export default function ProfileHeader({ profile, counts }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
      <div className="flex-shrink-0">
        <Image
          src={profile.avatar.url}
          alt={profile.name}
          width={150}
          height={150}
          className="rounded-full border-4 border-card shadow-md object-cover"
          data-ai-hint={profile.avatar.hint}
          priority
        />
      </div>

      <div className="flex-grow w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{profile.name}</h1>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
             <Button asChild variant="outline" size="sm">
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            <ThemeToggle />
          </div>
        </div>

        <div className="hidden sm:flex justify-start items-center gap-8 mb-4">
          <StatItem count={counts.projects} label="Projects" />
          <StatItem count={counts.certificates} label="Certificates" />
          <StatItem count={counts.achievements} label="Achievements" />
        </div>

        <div>
          <h2 className="font-semibold text-foreground">{profile.title}</h2>
          <p className="text-muted-foreground text-sm">{profile.bio}</p>
        </div>

        <div className="flex sm:hidden justify-around items-center my-4 py-2 border-y border-border">
          <StatItem count={counts.projects} label="Projects" />
          <StatItem count={counts.certificates} label="Certificates" />
          <StatItem count={counts.achievements} label="Achievements" />
        </div>
        
        <div className="flex items-center gap-2 mt-4">
            <Button asChild size="sm">
                <a href={profile.links.resume} download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
            </Button>
            <Button asChild variant="secondary" size="sm">
                <a href={profile.links.email}>
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
            </Button>
        </div>
      </div>
    </header>
  );
}
