import { useEffect, useRef } from 'react';

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    // Observe the element itself or all children with scroll-reveal class
    const targets = element.querySelectorAll('.scroll-reveal');
    if (targets.length > 0) {
      targets.forEach((target) => observer.observe(target));
    } else {
      if (element.classList.contains('scroll-reveal')) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollReveal;
