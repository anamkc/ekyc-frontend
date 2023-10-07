import { Navbar } from '@/components/common/Navbar'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from './Context/store'

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
  return (
    <html lang="en">
      <body className={inter.className}>
<GlobalContextProvider>
<Navbar/>
        {children}
</GlobalContextProvider>
         
      </body>
    </html>
  )
}
