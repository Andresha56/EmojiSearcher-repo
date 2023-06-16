import { ColorModeSwitcher } from './ColorModeSwitcher';
import Emoji from './Components/Emoji';
import { Flex, Container } from '@chakra-ui/react';


function App() {
  
  return (
    <Container maxWidth="7xl">
      <Flex justify="flex-end">
        <ColorModeSwitcher />
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        
        <Emoji />
      </Flex>
    </Container>
  );
}

export default App;
