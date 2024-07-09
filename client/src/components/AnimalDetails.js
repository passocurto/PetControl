import { useState } from 'react'
import BackToAnimalButton from '@/components/BackToAnimalButton'
import AnimalInfo from '@/components/AnimalInfo'
import AnimalForm from '@/components/AnimalForm'

function AnimalDetails({ AnimalData }) {
  const [variantPrice, setVariantPrice] = useState(AnimalData.variants.edges[0].node.price)

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToAnimalButton />
      <AnimalInfo
        title={AnimalData.title}
        description={AnimalData.description}
        price={variantPrice}
      />
      <AnimalForm
        title={AnimalData.title}
        handle={AnimalData.handle}
        variants={AnimalData.variants.edges}
        mainImg={AnimalData.images.edges[0].node}
        setVariantPrice={setVariantPrice}
      />
    </div>
  )
}

export default AnimalDetails
