import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  fullWidth?: boolean;
}

const Section = ({
  children,
  className,
  innerClassName,
  fullWidth,
}: SectionProps) => {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      {fullWidth ? (
        children
      ) : (
        <div
          className={cn(
            "max-w-[1440px] mx-auto px-5 lg:px-8",
            innerClassName
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
