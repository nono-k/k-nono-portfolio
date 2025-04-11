import type { SiteConfig, HeaderLink } from "@/types/config";

export const siteConfig: SiteConfig = {
  siteTitle: "K-Nono Portfolio",
  siteDesc: "My Site Description",
  siteUrl: "https://example.com",
  siteType: "website",
  siteLocale: "ja_JP",
  siteIcon: "/favicon.ico",
  siteImg: "/ogp.png",
}

export const headerLink: HeaderLink[] = [
  { name: 'about', url: '/about' },
  { name: 'work', url: '/work' },
  { name: 'demo', url: '/demo' },
  { name: 'contact', url: '/contact' },
]