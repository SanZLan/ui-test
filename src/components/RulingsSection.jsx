import { useSelector } from 'react-redux'
import RulingCard from './RulingCard.jsx'
import LayoutSelector from './LayoutSelector.jsx';

const RulingsSection = ({title}) => {
  const rulings = useSelector(({rulings}) => {
    return rulings;
  })

  const layout = useSelector(({layout}) => {
    return layout;
  })

  return (
    <div>
      <div className="rulings-heading w-full flex justify-between content-center font-lato my-6">
        <h2 className="rulings__header text-4xl font-light">{title}</h2>
        <LayoutSelector />
      </div>
      <div className={`rulings__cards-container flex flex-row gap-6 overflow-auto md:!flex-col shrink-0 ${layout === 'Grid' ? 'md:!grid md:grid-cols-2 lg:grid-cols-3' : ''} `}>
        {[...rulings].map(ruling =>
          <RulingCard key={ruling.id} ruling={ruling}/>
        )}
      </div>
    </div>
  )
}

export default RulingsSection