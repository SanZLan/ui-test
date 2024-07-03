import { describe, beforeEach, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../store'
import RulingCard from './RulingCard'

describe('renders correctly', () => {
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

  beforeEach(() => {
    render(
      <Provider store={store}>
        <RulingCard ruling={ruling} />
      </Provider>
    )
  })

  test('renders name correctly', () => {
    const element = screen.getByText('Test name')
    expect(element).toBeDefined()
  })

  test('renders category correctly', () => {
    const element = screen.getByText('Test description')
    expect(element).toBeDefined()
  })
})