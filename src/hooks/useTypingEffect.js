import { useState, useEffect } from 'react';

export function useTypingEffect(texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentText = texts[currentIndex % texts.length];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText === currentText) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}