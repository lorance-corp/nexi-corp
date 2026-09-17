import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
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
  title: {
    default: 'NEXI Corp — Deep Neuro TechBio',
    template: '%s',
  },
  description:
    'NEXI Corp is the holding company behind NEXI Biotech and the partner network translating living neural systems into deep neuro techbio — spanning longevity, personalized medicine, precision neurology, and brain–computer interfacing.',
  openGraph: {
    type: 'website',
    url: 'https://www.nexi-corp.com',
    siteName: 'NEXI Corp',
    title: 'NEXI Corp — Deep Neuro TechBio',
    description:
      'The nexus of mind and machine: IP holding company for NEXI Biotech and the partner marketplace for CNS translation across eight deeptech domains.',
    images: [
      {
        url: '/images/hero-wide-gen.png',
        width: 1024,
        height: 1024,
        alt: 'NEXI Corp — a translucent brain fused to a circuit substrate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXI Corp — Deep Neuro TechBio',
    description:
      'The nexus of mind and machine: the holding company and partner marketplace for deep neuro techbio.',
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
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
