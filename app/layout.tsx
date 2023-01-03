import '../styles/globals.css'

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
        </body>
    </html>
  )
}
