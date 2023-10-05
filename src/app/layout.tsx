'use Client';
import { Navbar } from '@/components/common/Navbar'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'eKYC',
  description: 'Decentralized KYC Verification System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 // const pathname = usePathname();
  //const isLoginPage = pathname === '/login'
  return (
    <html lang="en">
      <body className={inter.className}>

         <Navbar/>
        {children}
      </body>
    </html>
  )
}
