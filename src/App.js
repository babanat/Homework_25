import React, { useState } from 'react';
import { Header } from './header/Header';
import { Results } from './results/Results';

const App = () => {
  const [emojiClicks, setEmojiClicks] = useState(null); // хранит результаты
  const [showResults, setShowResults] = useState(false); // флаг для отображения результатов

 const handleShowResults = (results) => {
  setEmojiClicks(results);
  setShowResults(true); 
};
 const handleResetResults = () => {
  setEmojiClicks(null);
  setShowResults(false); 
};


  return (
    <div>
       <Header showResults={handleShowResults} resetResults={handleResetResults} />
       {showResults && emojiClicks  && <Results emojiClicks={emojiClicks} />}
    </div>
  );
};

export default App;
