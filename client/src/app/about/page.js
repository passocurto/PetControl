'use client'
import Header from '@/app/(app)/Header'
import { useRouter } from 'next/navigation'
import  Link  from 'next/link'

export default function About() {
    const router = useRouter();
    console.log("Roter", router);
   return (
        <>
            <Header title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Esta Pagina foi criada por Ricardo Passinho
                            <br />
                            <Link href="/">Back to home</Link>
                            <Link href="/about/Ricardo">Back to Ricardo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
