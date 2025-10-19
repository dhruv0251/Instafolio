export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Dhruv Gola. Built with InstaFolio.
        </p>
      </div>
    </footer>
  );
}
