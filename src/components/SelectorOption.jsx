import { useDispatch } from "react-redux";
import { setLayout } from '../reducers/layoutReducer';

const SelectorOption = ({option, lastOption, setOpen}) => {
  const dispatch = useDispatch()

  return (
    <a href="#"
      className={`rulings__layout-selector__option block px-4 py-2 text-sm text-gray-700 ${lastOption === false ? 'border-b-2 border-black' : ''}`}
      role="menuitem"
      onClick={(e) => {
        e.preventDefault();
        dispatch(setLayout(option))
        setOpen(false);
      }}
    >{option}</a>
  )
}

export default SelectorOption