
import './globals.css'
import { Inter } from 'next/font/google'
import { DarkModeProvider } from '@/Components/Context/Theme'
import { Navbar } from '@/Components/Navbar'
import { Button } from '@/Components/Button/Button'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gowwing',
  description: 'A website to grow bigger and bigger',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>
            <Navbar />
            {children}
            <Button />
        </DarkModeProvider>
        </body>
    </html>
  )
}
