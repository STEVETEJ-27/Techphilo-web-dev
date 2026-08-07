"use client";

import { ReactNode, AnchorHTMLAttributes, useEffect } from "react";
import NextLink from "next/link";
import { usePathname, useRouter as useNextRouter, useParams as useNextParams } from "next/navigation";

export function RouterProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function useRouter() {
  const pathname = usePathname() || "/";
  const nextRouter = useNextRouter();

  const navigate = (to: string) => {
    nextRouter.push(to);
  };

  return { path: pathname, navigate };
}

/** Scrolls to top on every path change */
export function useScrollToTopOnNavigate() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
}

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  children: ReactNode;
}

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  return (
    <NextLink href={to} onClick={onClick} {...rest}>
      {children}
    </NextLink>
  );
}

/** Matches a route pattern like '/courses/:slug' against a real path */
export function matchPath(pattern: string, path: string): Record<string, string> | null {
  const clean = (s: string) => s.replace(/\/+$/, "") || "/";
  const p = clean(pattern);
  const u = clean(path);
  const pSegs = p.split("/").filter(Boolean);
  const uSegs = u.split("/").filter(Boolean);
  if (pSegs.length !== uSegs.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < pSegs.length; i++) {
    if (pSegs[i].startsWith(":")) {
      params[pSegs[i].slice(1)] = decodeURIComponent(uSegs[i]);
    } else if (pSegs[i] !== uSegs[i]) {
      return null;
    }
  }
  return params;
}

export function useParams<T extends Record<string, string> = Record<string, string>>(_pattern?: string): T {
  const nextParams = useNextParams() || {};
  return nextParams as T;
}

export function isActivePath(current: string, target: string): boolean {
  if (target === "/") return current === "/";
  return current === target || current.startsWith(target + "/");
}
