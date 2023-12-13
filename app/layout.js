import AuthContext from '@/app/context/authContext'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZBlog',
  description: 'Novels',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContext>
        <body className={`${inter.className} m-0 p-0 w-full overflow-x-hidden`}>
          {children}
        </body>
      </AuthContext>
    </html>
  )
}
