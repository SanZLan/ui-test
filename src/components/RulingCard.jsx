import { useSelector } from 'react-redux'

const RulingCard = ({ruling}) => {
  const layout = useSelector(({layout}) => {
    return layout;
  })

  return (
    <div style={{ '--bg-image': `url(./assets/img/${ruling.picture})` }} className={`relative basis-96 shrink-0 aspect-square bg-cover bg-center bg-no-repeat bg-[image:var(--bg-image)] ${ layout === 'List' ? 'md:!h-48 md:!bg-contain md:!bg-left md:!aspect-auto' : '' }`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black from-10% to-transparent to-50% opacity-50">
        <h3>{ruling.name}</h3>
        <p>{ruling.description}</p>
        <p>{ruling.lastUpdated}</p>
      </div>
    </div>
  )
}

export default RulingCard