import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const container = ref.current;
    if (container) {
      // Observe the container itself if it has the reveal class
      if (container.classList.contains('reveal')) {
        container.classList.add('opacity-0', 'translate-y-8');
        observer.observe(container);
      }

      // Observe all children with the reveal class
      const revealElements = container.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-8');
        observer.observe(el);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
