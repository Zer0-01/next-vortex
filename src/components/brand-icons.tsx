type BrandIconProps = {
  className?: string;
};

export function InstagramIcon({ className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73Z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}
