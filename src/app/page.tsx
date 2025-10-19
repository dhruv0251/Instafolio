import { portfolioData, Post } from '@/lib/data';
import ProfileHeader from '@/components/portfolio/profile-header';
import Highlights from '@/components/portfolio/highlights';
import PostsGrid from '@/components/portfolio/posts-grid';
import Footer from '@/components/portfolio/footer';

export default function Home() {
  const { profile, highlights, posts } = portfolioData;

  const postCounts = posts.reduce((acc, post) => {
    if (post.type === 'project') acc.projects++;
    if (post.type === 'certificate') acc.certificates++;
    if (post.type === 'achievement') acc.achievements++;
    return acc;
  }, { projects: 0, certificates: 0, achievements: 0 });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProfileHeader profile={profile} counts={postCounts} />
          <Highlights highlights={highlights} />
          <div className="my-8">
            <hr className="border-border" />
          </div>
          <PostsGrid posts={posts} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
