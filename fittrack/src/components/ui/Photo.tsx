import { motion } from "framer-motion";

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
  const shared = {
    src: `/photos/${name}-1100.webp`,
    srcSet: `/photos/${name}-640.webp 640w, /photos/${name}-1100.webp 1100w`,
    sizes,
    alt,
    className,
  };

  // Priority (hero/LCP) images render immediately with no reveal effect.
  if (priority) {
    return <img {...shared} loading="eager" fetchPriority="high" />;
  }

  // Subtle premium reveal: photo settles from a gentle zoom as it scrolls
  // into view. Transform-only, so MotionConfig reducedMotion="user" (App.tsx)
  // automatically renders it static for prefers-reduced-motion users.
  return (
    <motion.img
      {...shared}
      loading="lazy"
      initial={{ scale: 1.08 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    />
  );
}
