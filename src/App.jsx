



//cursor code

import React, { useState, useEffect } from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Addbtn from './components/Addbtn'

const App = () => {
  // Initialize state from localStorage or use default data
  const [cardDetails, setCardDetails] = useState(() => {
    try {
      const savedCards = localStorage.getItem('cardDetails');
      if (savedCards) {
        const parsed = JSON.parse(savedCards);
        return parsed.length > 0 ? parsed : [];
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
    return [];
  });

  // Save to localStorage whenever cardDetails changes
  useEffect(() => {
    try {
      localStorage.setItem('cardDetails', JSON.stringify(cardDetails));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }, [cardDetails]);

  // Function to add a new card
  const addNewCard = (newCard) => {
    try {
      setCardDetails(prev => {
        const updatedCards = [...prev, newCard];
        localStorage.setItem('cardDetails', JSON.stringify(updatedCards));
        return updatedCards;
      });
    } catch (error) {
      console.error('Error adding new card:', error);
      alert('Failed to add new card. Please try again.');
    }
  };

  // Function to update a card
  const updateCardDetails = (index, updatedCard) => {
    try {
      setCardDetails(prev => {
        const updatedCards = prev.map((card, idx) => 
          idx === index ? updatedCard : card
        );
        localStorage.setItem('cardDetails', JSON.stringify(updatedCards));
        return updatedCards;
      });
    } catch (error) {
      console.error('Error updating card:', error);
      alert('Failed to update card. Please try again.');
    }
  };

  // Function to remove a card
  const removeCardDetails = (index) => {
    try {
      setCardDetails(prev => {
        const updatedCards = prev.filter((_, idx) => idx !== index);
        localStorage.setItem('cardDetails', JSON.stringify(updatedCards));
        return updatedCards;
      });
    } catch (error) {
      console.error('Error removing card:', error);
      alert('Failed to remove card. Please try again.');
    }
  };

  const isEmpty = cardDetails.length === 0;

  return (
    <>
    <div className="relative max-w-full h-screen flex justify-center">
      <Background />
      {!isEmpty && (
        <Foreground 
          cardDetails={cardDetails} 
          updateCard={updateCardDetails}
          removeCard={removeCardDetails}
        />
      )}
      <Addbtn onAddCard={addNewCard} isEmpty={isEmpty}/>
    </div>
    </>
  )
}

export default App