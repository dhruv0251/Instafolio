"use client";

import Image from 'next/image';
import type { Post } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon } from 'lucide-react';

interface PostModalProps {
  post: Post;
  isOpen: boolean;
  onClose: () => void;
}

export default function PostModal({ post, isOpen, onClose }: PostModalProps) {
  const getButtonText = () => {
    switch (post.type) {
      case 'project':
        return 'View Project';
      case 'certificate':
        return 'View Certificate';
      case 'achievement':
        return 'View Proof';
      default:
        return 'View';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="relative w-full aspect-video">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover rounded-t-lg"
            data-ai-hint={post.imageHint}
          />
        </div>
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl">{post.title}</DialogTitle>
          <DialogDescription className="text-base pt-4 text-foreground">
            {post.longDescription}
          </DialogDescription>
        </DialogHeader>
        {post.link && post.link !== '#' && (
          <div className="px-6 pb-6">
            <Button asChild>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="mr-2 h-4 w-4" />
                {getButtonText()}
              </a>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
