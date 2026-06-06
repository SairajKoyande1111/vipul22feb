import { Link } from "wouter";
import { ReactNode } from "react";

function isTranslationActive(): boolean {
  try {
    return /googtrans=\/en\/(?!en)/.test(document.cookie);
  } catch {
    return false;
  }
}

interface TranslateLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function TranslateLink({ href, className, children, onClick }: TranslateLinkProps) {
  if (isTranslationActive()) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
