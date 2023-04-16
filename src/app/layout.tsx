
import './globals.css'
import { Source_Sans_Pro } from 'next/font/google'



const sourceSansPro = Source_Sans_Pro({ subsets: ['latin'], weight: ["400", "600", "700"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.className} bg-gray-900`}>{children}</body>
    </html>
  )
}
