const PersonInfo = ({ruling, layout, overalRuling}) => {
  const orientation = overalRuling === 'up' ? 'positive' : 'negative';

  return (
    <div className={`card__info-person ${layout === 'List' ? 'md:flex md:flex-col md:justify-center md:ml-72 lg:ml-60' : ''}`}>
      <div className={`card__name-person relative ${layout === 'List' ? 'md:!static' : ''}`}>
        <span className={`card__name-person card--thumbs absolute !h-8 !w-8 bottom-0 -left-10 -translate-y-1 grid place-content-center text-white bg-${orientation} ${layout === 'List' ? 'md:!top-0 md:!left-0 md:!translate-y-0 ' : ''}`}>
          <img src={`../../assets/img/thumbs-${overalRuling}.svg`} alt={`overal-ruling`}/>
        </span>
        <h3 className='card__name text-4xl lg:!text-3xl text-white line-clamp-2 mb-2 lg:!mb-1'>{ruling.name}</h3>
      </div>
      <p className='card__description lg:!text-sm text-white line-clamp-2'>{ruling.description}</p>
    </div>
  )
}

export default PersonInfo