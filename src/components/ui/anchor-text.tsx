import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface AnchorTextProps {
  /** URL for the anchor link */
  href: string;
  /** Target attribute for the link (e.g., '_blank' for external links) */
  target?: string;
  /** Rel attribute for the link */
  rel?: string;
  /** Additional CSS classes to apply to the anchor */
  className?: string;
  /** Content to display inside the anchor */
  children: React.ReactNode;
  /** Color of the blank gap (should match background color), defaults to 'white' */
  gapColor?: string;
}

/**
 * AnchorText component with animated underline gap effect.
 * - Default underline on text
 * - On cursor enter: blank gap animates left-to-right across underline (0.3s)
 * - On cursor leave: same animation with longer duration (0.6s)
 * - Supports internal and external routing via href prop
 */
const AnchorText = ({
  href,
  target,
  rel,
  className,
  children,
  gapColor = 'white',
}: AnchorTextProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const gapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (gapRef.current) {
      // Reset gap to starting position (off-screen left)
      gapRef.current.style.left = '-24px';
      // Force reflow to ensure the reset is applied before animating
      void gapRef.current.offsetWidth;
      // Animate gap to end position (off-screen right)
      gapRef.current.style.left = '100%';
    }
  }, [isHovered]);

  const transitionDuration = isHovered ? '0.3s' : '0.6s';

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : rel}
      className={cn(
        'relative inline-block text-current no-underline',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {/* Base underline */}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current" />
      {/* Animated blank gap */}
      <span
        ref={gapRef}
        className="absolute bottom-0 h-[2px]"
        style={{
          width: '24px',
          backgroundColor: gapColor,
          transition: `left ${transitionDuration} linear`,
          left: '-24px',
        }}
      />
    </a>
  );
};

export default AnchorText;
