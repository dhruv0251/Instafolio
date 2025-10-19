import type { HighlightItem } from '@/lib/data';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface HighlightsProps {
  highlights: HighlightItem[];
}

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <section className="mt-8">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-6 pb-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent flex items-center justify-center border-2 border-border shadow-sm">
                <highlight.icon className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground w-20 truncate">{highlight.text}</span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
