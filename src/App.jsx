import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeRulings } from './reducers/rulingReducer'
import RulingsSection from './components/RulingsSection'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initializeRulings())
  }, [])

  return (
    <div className='tailwind'>
      <RulingsSection title='Previous Rulings' />
    </div>
  )
}

export default App
