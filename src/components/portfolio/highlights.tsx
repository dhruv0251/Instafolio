
"use client";

import { useState } from 'react';
import type { HighlightItem } from '@/lib/data';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface HighlightsProps {
  highlights: HighlightItem[];
}

export default function Highlights({ highlights }: HighlightsProps) {
  const [selectedHighlight, setSelectedHighlight] = useState<HighlightItem | null>(null);

  return (
    <section>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-6 pb-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 text-center cursor-pointer group"
              onClick={() => setSelectedHighlight(highlight)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedHighlight(highlight)}
              aria-label={`View details for ${highlight.text}`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary flex items-center justify-center border-2 border-border shadow-sm transition-all duration-300 group-hover:border-primary group-hover:shadow-md group-hover:scale-105">
                <highlight.icon className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground w-20 truncate transition-colors duration-300 group-hover:text-primary">{highlight.text}</span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {selectedHighlight && (
        <Dialog open={!!selectedHighlight} onOpenChange={() => setSelectedHighlight(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader className="items-center text-center">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center border-4 border-primary mb-4">
                <selectedHighlight.icon className="h-12 w-12 text-primary" />
              </div>
              <DialogTitle className="text-2xl">{selectedHighlight.text}</DialogTitle>
              <DialogDescription className="text-base pt-2 text-foreground whitespace-pre-wrap">
                {selectedHighlight.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
