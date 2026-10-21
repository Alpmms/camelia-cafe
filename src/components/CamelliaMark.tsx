/**
 * TEMPORARY stand-in mark: an original line drawing of a camellia.
 * It is NOT the Camelia Cafe logo. Once the authentic logo file is added
 * (see `logo` in src/content/site.ts), the header and footer use it instead.
 * This drawing can stay as a small decorative accent if the owner likes it.
 */
export function CamelliaMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {petals.map((r) => (
        <path
          key={r}
          transform={`rotate(${r} 32 32)`}
          d="M32 30 C 24 22, 24 9, 32 6 C 40 9, 40 22, 32 30 Z"
        />
      ))}
      {petals.map((r) => (
        <path
          key={`i${r}`}
          transform={`rotate(${r + 36} 32 32)`}
          d="M32 30 C 28 25, 28 18, 32 15 C 36 18, 36 25, 32 30 Z"
        />
      ))}
      <circle cx="32" cy="32" r="3.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
