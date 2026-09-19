import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { EngageCta } from '@/components/engage-cta'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexi-corp.com'),
  alternates: { canonical: '/' },
  title: {
    default: 'NEXI Corp · Deep Neuro TechBio',
    template: '%s',
  },
  description:
    'NEXI Corp turns the function of human brain circuits into a measured model, the foundation of a new category of neurotechnology across eight deeptech domains.',
  openGraph: {
    type: 'website',
    url: 'https://www.nexi-corp.com',
    siteName: 'NEXI Corp',
    title: 'NEXI Corp · Deep Neuro TechBio',
    description:
      'The nexus of mind and machine: a measured model of how the brain computes, across eight deeptech domains.',
    images: [
      {
        url: '/images/hero-wide-gen.png',
        width: 1024,
        height: 1024,
        alt: 'NEXI Corp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXI Corp · Deep Neuro TechBio',
    description:
      'The nexus of mind and machine: a measured model of how the brain computes.',
    images: ['/images/hero-wide-gen.png'],
  },
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0f1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-background">
          <SiteHeader />
          <main>{children}</main>
          <EngageCta />
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
