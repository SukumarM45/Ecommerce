import React, { useState } from 'react';
import './Dialogue.css';

function DialogueBox() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialogue = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dialogue-container">
      <button onClick={toggleDialogue}>Toggle Dialogue</button>
      {isOpen && (
        <div className="dialogue-overlay">
          <div className="dialogue">
            <div className="dialogue-content">
              <h2>This is a Dialogue Box</h2>
              <p>You can put your content here.</p>
              <button onClick={toggleDialogue}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DialogueBox;
