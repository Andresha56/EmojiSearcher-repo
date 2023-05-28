import { Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import './emoji.css';
function Emoji() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [font, setFont] = useState(null);

  useEffect(() => {
    const handleResize = () => setwindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    const SetFontSise = windowWidth >= 600 ? 'xl' : 'md';
    setFont(SetFontSise);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      <Heading size={font}>Easy Search Emojis</Heading>
    </>
  );
}

export default Emoji;
