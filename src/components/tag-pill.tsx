type TagPillProps = {
  children: string;
};

export function TagPill({ children }: TagPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/90 px-3 py-1 text-[0.76rem] font-medium tracking-[0.02em] text-muted">
      {children}
    </span>
  );
}
