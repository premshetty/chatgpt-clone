import SessionProvide from '../components/SessionProvider'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log(session?.user);

  return (
    <html>
      <head>
        <title>PREM - GPT</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body>
        <SessionProvide session={null}>

          {!session ?
            <Login /> :
            (<div className='flex'>
              <div className='max-w-xs bg-[#202123] h-screen overflow-y-auto md:min-w-[20rem]'>

                <Sidebar />
              </div>
              {/* Client provider */}
              <div className='bg-[#343541] flex-1'>
                {children}
              </div>
            </div>)}
        </SessionProvide>
      </body>
    </html>
  )
}
