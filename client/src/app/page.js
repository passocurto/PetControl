import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/AnimalListings'

export const metadata = {
    title: 'PetControl',
}

const Home = () => {

    return (
    <div className="mx-auto max-w-6xl">
        <StoreHeading />
        <ProductListings products={[{},{},{},{},{},{}]} />
    </div>
    )
}

export default Home
