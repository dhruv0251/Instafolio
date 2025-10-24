import { RetroGrid } from "../ui/retro-grid";

export default function Footer() {
  return (
    <footer className="relative flex h-48 w-full flex-col items-center justify-center overflow-hidden border-t bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-center text-sm font-light tracking-tighter text-transparent">
        Made with ❤ by Dhruv Gola
      </span>
      <RetroGrid />
    </footer>
  );
}
