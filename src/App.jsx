import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeRulings } from './reducers/rulingReducer'

function App() {
  const dispatch = useDispatch()
  const rulings = useSelector(({rulings}) => {
    return rulings;
  })
  
  useEffect(() => {
    dispatch(initializeRulings())
  }, [])

  return (
    <>
      <h2>Previous Rulings</h2>
      {[...rulings].map(ruling =>
        <div key={ruling.id}>
          <div>
            <h3>{ruling.name}</h3>
          </div>
        </div>
      )}
    </>
  )
}

export default App
