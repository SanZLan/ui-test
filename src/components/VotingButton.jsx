const VotingButton = ({type, isSelected, voted, setVote}) => {
  const orientation = type === 'up' ? 'positive' : 'negative';
  const selected = isSelected ? '!border-2' : '!border-0';
  const display = voted ? 'hidden' : 'grid';

  return (
    <button onClick={setVote()} className={`card__thumbs-${type}-button box-content !h-9 !w-9 ${display} place-content-center bg-${orientation} ${selected}`}>
      <img src={`../../assets/img/thumbs-${type}.svg`} alt={`thumbs-up`}/>
    </button>
  )
}

export default VotingButton