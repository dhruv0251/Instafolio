
"use client"

import { portfolioData } from '@/lib/data';
import ProfileHeader from '@/components/portfolio/profile-header';
import Highlights from '@/components/portfolio/highlights';
import PostsGrid from '@/components/portfolio/posts-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap } from 'lucide-react';
import Footer from '@/components/portfolio/footer';
import { motion } from 'framer-motion';

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
    <div className="flex flex-col min-h-screen bg-transparent">
      <main className="flex-grow z-10">
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ProfileHeader profile={profile} counts={postCounts} education={education} />
            
            <section className="mt-12">
              <h2 className="text-xl font-bold mb-4 text-foreground">Skills</h2>
              <Highlights highlights={highlights} />
            </section>

            <div className="my-8">
              <hr className="border-border" />
            </div>
            
            <Tabs defaultValue="certs" className="w-full">
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
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
