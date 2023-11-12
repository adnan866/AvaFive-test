import './globals.css'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import Navbar from './Components/navbar';
import Footer from './Components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ava Five',
  description: 'Software development services',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">

      <body className={inter.className} suppressHydrationWarning={true}>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
