import { Heading, Input,Box,Text} from '@chakra-ui/react';
import { useState } from 'react';
import './emoji.css';
import { useEffect } from 'react';

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

  const [value, setValue] = useState(' ');
  const input = val => {
    setValue(val.target.value);
  };

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(
      'https://emoji-api.com/emojis?access_key=57487e229a7d898d7a8c51c84d78165f69c22864'
    ).then(request => {
      request.json().then(response => {
        console.log(response);
        setApiData(response);
      });
    });
  }, []);
  return (
    <>
      <Heading size={font} fontFamily="heading">
        Easy Search Emojis
      </Heading>

      <Input
        placeholder="Search for emoji"
        size="lg"
        onChange={input}
        value={value}
      />
        <Box mt="25px">
          <Text>
              {
                apiData.map((value)=>{
                  return value.character
                })
              }
          </Text>
        </Box>

    </>
  );
}

export default Emoji;
