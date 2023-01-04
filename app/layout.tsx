import '../styles/globals.css'
import Header from './Header'
import Footer from './Footer';
import Router from "next/navigation"

import ProgressBar from '@badrap/bar-of-progress'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
     
      <body>
         {/* Header */}
     
      {/* Banner */}
        <div>
        {children}
        </div>

        <footer>
      <Footer/>
     </footer>
        </body>
    </html>
  )
}
