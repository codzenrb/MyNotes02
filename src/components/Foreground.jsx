// import React, { useRef, useState } from 'react';
// import Card from './Card';

// const Foreground = () => {
//   const ref = useRef(null);
  
//   const [cardDetails, setCardDetails] = useState([
//     {
//       "title": "Introduction to Web Development",
//       "description": "A beginner's guide to building websites using HTML, CSS, and JavaScript."
//     },
//     {
//       "title": "JavaScript Basics",
//       "description": "Covers the fundamental concepts of JavaScript, including variables, loops, and functions."
//     },
//     {
//       "title": "React.js Essentials",
//       "description": "Learn the core concepts of React, including components, state, and props."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     },
//     {
//       "title": "CSS Flexbox and Grid",
//       "description": "Understand modern layout techniques using Flexbox and CSS Grid."
//     }
//   ]);    

//   // Function to remove a card
//   const removeCard = (index) => {
//     setCardDetails((prevCards) => prevCards.filter((_, idx) => idx !== index));
//   };

//   return (
//     <>
    
//     <div ref={ref} className="foreground absolute w-full h-auto z-2 top-0 left-0 py-20 px-10 flex gap-12 flex-wrap">
//       {cardDetails.map((item, idx) => (
//         <Card key={idx} cardDet={item} cardidx={idx} reference={ref} removeCard={removeCard} />
//       ))}
//     </div>
    
//     </>
    
//   );
// };

// export default Foreground;


//cursor code
import React, { useRef } from 'react';
import Card from './Card';

const Foreground = ({ cardDetails, updateCard, removeCard }) => {
  const ref = useRef(null);

  return (
    <>
    <div ref={ref} className="foreground absolute w-full h-auto z-2 top-0 left-0 py-20 px-10 flex gap-12 flex-wrap">
      {cardDetails.map((item, idx) => (
        <Card 
          key={idx} 
          cardDet={item} 
          cardidx={idx} 
          reference={ref} 
          removeCard={removeCard}
          updateCard={updateCard}
        />
      ))}
    </div>
    </>
  );
};

export default Foreground;