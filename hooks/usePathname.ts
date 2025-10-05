import { useRouter } from "next/router";

export function usePathname(): string {
  const { asPath } = useRouter();
  return asPath || "/";
}
