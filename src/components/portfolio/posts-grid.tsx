"use client";

import { useState } from 'react';
import type { Post } from '@/lib/data';
import PostCard from './post-card';
import PostModal from './post-modal';

interface PostsGridProps {
  posts: Post[];
}

export default function PostsGrid({ posts }: PostsGridProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            post={post} 
            onPostClick={() => setSelectedPost(post)}
          />
        ))}
      </div>
      {selectedPost && (
        <PostModal 
          post={selectedPost} 
          isOpen={!!selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </section>
  );
}
