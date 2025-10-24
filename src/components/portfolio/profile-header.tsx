
"use client";

import Image from 'next/image';
import { useState } from 'react';
import type { ProfileData, EducationItem } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Phone, Copy, School, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

interface ProfileHeaderProps {
  profile: ProfileData;
  education: EducationItem[];
  counts: {
    projects: number;
    certificates: number;
    skills: number;
  };
}

const StatItem = ({ count, label }: { count: number, label: string }) => (
  <div className="text-center">
    <span className="font-bold text-lg sm:text-xl">{count}</span>
    <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
  </div>
);

export default function ProfileHeader({ profile, counts, education }: ProfileHeaderProps) {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isEducationModalOpen, setEducationModalOpen] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: `${type} Copied!`,
        description: `${text} has been copied to your clipboard.`,
      });
    });
  };
  
  const emailAddress = profile.links.email.replace('mailto:', '');
  const phoneNumber = profile.links.phone.replace('tel:', '');

  return (
    <header className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
      <div className="flex-shrink-0">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-card shadow-md">
          <Image
            src={profile.avatar.url}
            alt={profile.name}
            width={150}
            height={150}
            className="object-cover w-full h-full"
            data-ai-hint={profile.avatar.hint}
            priority
          />
        </div>
      </div>

      <div className="flex-grow w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{profile.name}</h1>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
             <InteractiveHoverButton asChild text="GitHub" href={profile.links.github} target="_blank" rel="noopener noreferrer" />
             <InteractiveHoverButton asChild text="LinkedIn" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" />
            <ThemeToggle />
          </div>
        </div>

        <div className="hidden sm:flex justify-start items-center gap-8 mb-4">
          <StatItem count={counts.projects} label="Projects" />
          <StatItem count={counts.certificates} label="Certificates" />
          <StatItem count={counts.skills} label="Skills" />
        </div>

        <div>
          <h2 className="font-semibold text-foreground">{profile.title}</h2>
          <p className="text-muted-foreground text-sm">{profile.bio}</p>
        </div>

        <div className="flex sm:hidden justify-around items-center my-4 py-2 border-y border-border">
          <StatItem count={counts.projects} label="Projects" />
          <StatItem count={counts.certificates} label="Certificates" />
          <StatItem count={counts.skills} label="Skills" />
        </div>
        
        <div className="flex flex-wrap items-center gap-2 mt-4">
            <InteractiveHoverButton asChild text="View Resume" href={profile.links.resume} target="_blank" rel="noopener noreferrer" />
            <InteractiveHoverButton text="Contact Me" onClick={() => setContactModalOpen(true)} />
            <InteractiveHoverButton text="Education" onClick={() => setEducationModalOpen(true)} />
        </div>
      </div>

      <Dialog open={isContactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Information</DialogTitle>
            <DialogDescription>
              You can reach me via email or phone.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href={profile.links.email} className="text-sm font-medium hover:underline">{emailAddress}</a>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyToClipboard(emailAddress, 'Email')}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href={profile.links.phone} className="text-sm font-medium hover:underline">{phoneNumber}</a>
              </div>
               <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyToClipboard(phoneNumber, 'Phone Number')}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Dialog open={isEducationModalOpen} onOpenChange={setEducationModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Education</DialogTitle>
            <DialogDescription>My educational background and qualifications.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {education.map((edu, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{edu.period}</p>
                  {edu.details && <p className="text-sm mt-2 text-foreground/80">{edu.details}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

    </header>
  );
}
