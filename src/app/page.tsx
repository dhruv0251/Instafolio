
"use client"

import { portfolioData } from '@/lib/data';
import ProfileHeader from '@/components/portfolio/profile-header';
import Highlights from '@/components/portfolio/highlights';
import PostsGrid from '@/components/portfolio/posts-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, School } from 'lucide-react';
import Footer from '@/components/portfolio/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const { profile, highlights, posts, education } = portfolioData;

  const projects = posts.filter(p => p.type === 'project');
  const certificatesAndAchievements = posts.filter(p => p.type === 'certificate' || p.type === 'achievement');

  const postCounts = {
    projects: projects.length,
    certificates: certificatesAndAchievements.length,
    skills: highlights.length,
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProfileHeader profile={profile} counts={postCounts} />
          
          <section className="mt-12">
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <Highlights highlights={highlights} />
          </section>

          <div className="my-8">
            <hr className="border-border" />
          </div>

          <section className="my-8">
            <h2 className="text-xl font-bold mb-4 flex items-center"><School className="mr-2 h-5 w-5" /> Education</h2>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{edu.period}</p>
                    {edu.details && <p className="text-sm mt-2">{edu.details}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="my-8">
            <hr className="border-border" />
          </div>

          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="projects">
                <Briefcase className="mr-2 h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="certs">
                <GraduationCap className="mr-2 h-4 w-4" />
                Certificates & Achievements
              </TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="mt-6">
              <PostsGrid posts={projects} />
            </TabsContent>
            <TabsContent value="certs" className="mt-6">
              <PostsGrid posts={certificatesAndAchievements} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
