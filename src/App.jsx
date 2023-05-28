import { ColorModeSwitcher } from './ColorModeSwitcher';
import Emoji from './Components/Emoji';
import { Flex ,Container} from '@chakra-ui/react';

function App() {
  return (
    <Container  maxW='container.sm'>
      <Flex justify="flex-end">
      <ColorModeSwitcher />
      </Flex>
      <Flex>
        <Emoji />
      </Flex>
    </Container>
  );
}

export default App;
