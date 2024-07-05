import { Nunito } from 'next/font/google'
import '@/app/global.css'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const AppLayout = ({ children }) => {
    return (
            <span>{children}</span>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default AppLayout
