import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setLayout } from '../reducers/layoutReducer';

const LayoutSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch()

  const layout = useSelector(({layout}) => {
    return layout
  })

  const options = ['List', 'Grid'];

  return (
    <div className="relative basis-40 hidden md:!block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-around w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border-2 border-black"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {layout}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute z-10 w-full text-center bg-white border-2 border-t-0 border-black"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div>
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className={`block px-4 py-2 text-sm text-gray-700 ${
                  index === 0 ? 'border-b-2 border-black' : ''
                }`}
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setLayout(option))
                  setIsOpen(false);
                }}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LayoutSelector