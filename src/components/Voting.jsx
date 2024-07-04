import { useDispatch } from 'react-redux'
import { vote } from '../reducers/rulingReducer'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import VotingButton from "./VotingButton"
import { useState } from "react"

dayjs.extend(relativeTime)

const Voting = ({ruling, layout}) => {
  const dispatch = useDispatch()
  const [selectedVote, setSelectedVote] = useState(null)
  const [voted, setVoted] = useState(false)

  const setVote = (voteType) => {
    return (e) => {
      e.preventDefault()
      setSelectedVote(prevVote => prevVote === voteType ? null : voteType)
    }
  }

  const handleVote = (id, voteType) => {
    setVoted(!voted)
    setSelectedVote(null)
    voted ? null : dispatch(vote(id, voteType))
  }

  const eyebrowText = voted ? 'Thank you for your vote!' : `${dayjs(ruling.lastUpdated).from()} in ${ruling.category.charAt(0).toUpperCase() + ruling.category.slice(1)}`

  return (
    <div className={`card__voting flex flex-col content-end gap-y-2 ${layout === 'List' ? 'md:!basis-1/4 md:!shrink-0 md:!h-full md:!justify-center' : ''}`}>
      <p className='card__voting--text min-w-fit text-white text-end lg:text-sm'>
        {eyebrowText}
      </p>
      <div className='card__voting-buttons w-full flex flex-nowrap justify-end items-center gap-2 mb-4 lg:!mb-2'>
        <VotingButton type={'up'} isSelected={selectedVote === 'positive' ? true : false} voted={voted} setVote={() => setVote('positive')}/>
        <VotingButton type={'down'} isSelected={selectedVote === 'negative' ? true : false} voted={voted} setVote={() => setVote('negative')}/>
        <button onClick={() => (handleVote(ruling.id, selectedVote))}
                className={`card__vote-button text-white min-w-fit !h-10 py-2 px-4 bg-black/60 border-2 border-white`} 
                style={ {backgroundColor: selectedVote ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.1)'} } 
                disabled={!selectedVote && !voted}>
                  {voted ? 'Vote Again' : 'Vote Now'}
        </button>
      </div>
    </div>
  )
}

export default Voting