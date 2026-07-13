export function Photo({
  name,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  name: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={`/photos/${name}-1100.webp`}
      srcSet={`/photos/${name}-640.webp 640w, /photos/${name}-1100.webp 1100w`}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
