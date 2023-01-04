import '../styles/globals.css'
import Header from './Header'
import Footer from './Footer';
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
