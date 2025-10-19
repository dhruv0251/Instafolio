
import Image from 'next/image';
import type { Post } from '@/lib/data';

interface PostCardProps {
  post: Post;
  onPostClick: () => void;
}

export default function PostCard({ post, onPostClick }: PostCardProps) {
  return (
    <div
      className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onClick={onPostClick}
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPostClick()}
      role="button"
      aria-label={`View details for ${post.title}`}
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 33vw"
        data-ai-hint={post.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
        <div className="text-white">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p className="text-sm opacity-90">{post.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
