import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
  deleteDelay?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  words, 
  delay = 100,
  deleteDelay = 50
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText !== currentWord) {
          timeout = setTimeout(() => {
            setCurrentText(currentWord.substring(0, currentText.length + 1));
          }, delay);
        } else {
          // Wait before starting to delete
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        // Deleting
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          timeout = setTimeout(() => {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          }, deleteDelay);
        }
      }
    };

    timeout = setTimeout(animateText, 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, deleteDelay]);

  return (
    <span className="relative">
      {currentText}
      <span className="absolute -right-1 top-0 w-0.5 h-full bg-blue-500 animate-blink"></span>
    </span>
  );
};

export default TypeWriter;