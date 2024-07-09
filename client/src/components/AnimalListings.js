import AnimalCard from '@/components/AnimalCard'

function AnimalListings({ Animals }) {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {
        Animals.map((Animal, index) => (
          <AnimalCard key={index} Animal={Animal} />
        ))
      }
    </div>
  )
}

export default AnimalListings
