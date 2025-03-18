import './App.css'
import React, { useState } from 'react'
import UpvoteList from './scripts/UpvoteList'

function App() {
  // change the number here to add more upvote lists
  const numOfLists = 2

      // Load activeStates from localStorage or initialize with false
  const [activeStates, setActiveStates] = useState(() => {
    const savedActiveStates = localStorage.getItem('activeStates')
    return savedActiveStates ? JSON.parse(savedActiveStates) : Array(numOfLists).fill(false)
  })

  const toggleActive = (index) => {
    setActiveStates((prevState) => {
      const newStates = [...prevState];
      newStates[index] = !newStates[index];
      localStorage.setItem('activeStates', JSON.stringify(newStates))
      return newStates
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Upvote-Container">
        {activeStates.map((active, index) => (
          <UpvoteList
            key={index}
            index={index}
            active={active}
            onToggleActive={() => toggleActive(index)}
          />
        ))}
        </div>
        
      </header>
    </div>
  );
}

export default App
