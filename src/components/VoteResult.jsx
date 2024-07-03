const VoteResult = ({type, percentage}) => {
  const justify = type === 'up' ? 'start' : 'end';
  const orientation = type === 'up' ? 'positive' : 'negative';
  const direction = type === 'up' ? 'flex-row' : 'flex-row-reverse';

  return (
    <div style={{ width: `${percentage}%` }} className={`card__votes-${type} flex ${direction} flex-nowrap justify-start items-center py-2 p${justify[0]}-2 gap-2 lg:text-lg lg:!py-1 bg-${orientation} bg-opacity-60`}>
      <img src={`../../assets/img/thumbs-${type}.svg`} alt={`thumbs-${type}`} />
      <span className={`card__votes-${type}--text`}>{percentage}%</span>
    </div>
  )
}

export default VoteResult