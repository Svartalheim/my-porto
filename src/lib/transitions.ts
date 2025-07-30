// Custom transition utilities using GSAP
import { gsap } from 'gsap';

export const pageTransitions = {
  // Fade transition
  fade: {
    enter(element: Element) {
      gsap.fromTo(element, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    },
    exit(element: Element) {
      return gsap.to(element, { 
        opacity: 0, 
        duration: 0.3, 
        ease: "power2.in" 
      });
    }
  },

  // Slide from right
  slideRight: {
    enter(element: Element) {
      gsap.fromTo(element,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    },
    exit(element: Element) {
      return gsap.to(element, {
        x: "-100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in"
      });
    }
  },

  // Scale transition
  scale: {
    enter(element: Element) {
      gsap.fromTo(element,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }
      );
    },
    exit(element: Element) {
      return gsap.to(element, {
        scale: 1.1,
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  },

  // Rotate transition
  rotate: {
    enter(element: Element) {
      gsap.fromTo(element,
        { rotation: -10, scale: 0.9, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 1, duration: 0.7, ease: "elastic.out(1, 0.6)" }
      );
    },
    exit(element: Element) {
      return gsap.to(element, {
        rotation: 5,
        scale: 0.95,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  },

  // Elastic bounce
  bounce: {
    enter(element: Element) {
      gsap.fromTo(element,
        { y: -100, opacity: 0, scale: 0.3 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "bounce.out" }
      );
    },
    exit(element: Element) {
      return gsap.to(element, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.in"
      });
    }
  }
};

// Apply transition to specific elements
export function applyPageTransition(transitionName: keyof typeof pageTransitions) {
  const main = document.querySelector('main');
  if (main && pageTransitions[transitionName]) {
    pageTransitions[transitionName].enter(main);
  }
}
