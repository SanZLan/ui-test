import { describe, beforeEach, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'

import store from '../store'
import Voting from './Voting'

const tester = userEvent.setup()

const ruling = {
  "id": "0",
  "name": "Test name",
  "description": "Test description",
  "category": "Test Category",
  "picture": "kanye.png",
  "lastUpdated": "2024-03-10T23:08:57.892Z",
  "votes": {
    "positive": 0,
    "negative": 0
  }
}

const layout = 'Grid'

let container

describe('renders correctly', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Voting ruling={ruling} layout={layout}/>
      </Provider>
    )
  })

  test('renders category text', () => {
    const element = screen.getByText(/.*Test Category.*/)
    expect(element).toBeDefined()
  })

  test('renders category text', () => {
    const voteButton = screen.getByText('Vote Now')
    expect(voteButton).toBeDefined()
  })
})

describe('correctly performs actions', () => {
  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <Voting ruling={ruling} layout={layout}/>
      </Provider>
    ).container
  })

  test('starts with vote button disabled', async () => {
    const voteButton = screen.getByText('Vote Now')

    expect(voteButton).toBeDisabled();
  })

  test('senables vote button when selecting thumbs up', async () => {
    const thumbsUpButton = container.querySelector('.card__thumbs-up-button')
    const voteButton = screen.getByText('Vote Now')

    await tester.click(thumbsUpButton)

    expect(voteButton).not.toBeDisabled();
  })

  test('senables vote button when selecting thumbs up', async () => {
    const thumbsDownButton = container.querySelector('.card__thumbs-down-button')
    const voteButton = screen.getByText('Vote Now')

    await tester.click(thumbsDownButton)

    expect(voteButton).not.toBeDisabled();
  })

  test('perfroms vote action', async () => {
    const thumbsDownButton = container.querySelector('.card__thumbs-down-button')
    const voteButton = screen.getByText('Vote Now')

    await tester.click(thumbsDownButton)
    await tester.click(voteButton)

    expect(voteButton).not.toBeDisabled();
    expect(voteButton).toHaveTextContent('Vote Again')
  })
})