import AnimalImage from '@/components/AnimalImage'
import AnimalDetails from '@/components/AnimalDetails'

function AnimalSection({ AnimalData }) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
      <AnimalImage images={AnimalData.images.edges} />
      <AnimalDetails AnimalData={AnimalData} />
    </div>
  )
}

export default AnimalSection
