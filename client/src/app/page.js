import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/AnimalListings'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'PetControl',
}

const  Home =  async  ()  =>  {
    const response  = await fetch('http://127.0.0.1:8000/api/animal');
    const animals = await response.json();

    return (
    <div className="mx-auto max-w-6xl">
        <StoreHeading />
        <ProductListings Animals={animals} />
        <Footer />
    </div>
    )
}

export default Home
