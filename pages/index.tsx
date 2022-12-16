import { Header } from './components/Header';
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='grid grid-cols-[1fr_1000px_1fr] grid-rows-[60px_1fr]'>
        <Header logoText='LOGO'/>
        <main className='row-start-2 col-start-2 mt-6'>
            Hello world
        </main>
    </div>
  )
}
