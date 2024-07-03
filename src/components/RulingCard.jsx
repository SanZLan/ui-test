import { useSelector } from 'react-redux'
import PersonInfo from './PersonInfo'
import VoteResult from './VoteResult'
import Voting from './Voting'

const RulingCard = ({ruling}) => {
  const layout = useSelector(({layout}) => {
    return layout;
  })

  const getPercentages = ({ positive, negative } ) => {
    let positivePctg = ((positive / ( positive + negative )) * 100).toFixed(1)
    let negativePctg = ((negative / ( positive + negative )) * 100).toFixed(1)

    if (positive === 0 && negative === 0) {
      positivePctg = 50
      negativePctg = 50
    }
    
    return {
      positivePctg,
      negativePctg
    }
  }

  const { positivePctg, negativePctg } = getPercentages(ruling.votes)

  const overalRuling = positivePctg > negativePctg ? "up" : "down"

  return (
    <div style={{ '--bg-image': `url(./assets/img/${ruling.picture})` }} className={`card relative basis-96 shrink-0 aspect-square bg-cover bg-center bg-no-repeat bg-[image:var(--bg-image)] ${ layout === 'List' ? 'md:!h-40 lg:!h-48 md:!bg-30% md:!bg-left-40 md:!basis-auto' : '' }`}>
      <div className={`card card--overlay ${layout} absolute inset-0`}>
        <div className='card__content h-full'>
          <div className={`card__info h-[calc(100%-2.75rem)] lg:!h-[calc(100%-2.25rem)] flex flex-col justify-end gap-y-4 lg:!gap-y-2 ms-10 me-6 ${layout === 'List' ? 'md:!flex-row' : ''}`}>
            <PersonInfo ruling={ruling} layout={layout} overalRuling={overalRuling} />
            <Voting ruling={ruling} layout={layout} />
          </div>
          <div className='card__votes flex text-xl text-white'>
            <VoteResult type="up" percentage={positivePctg} />
            <VoteResult type="down" percentage={negativePctg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RulingCard