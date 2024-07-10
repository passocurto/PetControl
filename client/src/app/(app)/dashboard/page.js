import Header  from '@/app/(app)/Header'

export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-5">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-4 ">
                            <div class="p-6 rounded-lg">
                                <div class="grid grid-cols-3 gap-6 mb-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
