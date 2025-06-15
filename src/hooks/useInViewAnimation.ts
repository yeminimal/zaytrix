
import { useEffect, useRef } from "react";

/**
 * Adds a fade-in animation to a component as it enters the viewport.
 * Returns a ref and a boolean indicating if the element is in view.
 */
export function useInViewAnimation(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let observer: IntersectionObserver;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.classList.add("animate-fade-in");
          observer.disconnect();
        }
      });
    };

    observer = new window.IntersectionObserver(handleIntersect, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.1,
      ...options,
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return ref;
}
