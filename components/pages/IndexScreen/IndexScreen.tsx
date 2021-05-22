import { Center, Box } from '@chakra-ui/react'
import { BasicInfoStep } from './Steps/BasicInfoStep'

export const IndexScreen = () => (
  <Center>
    <Box backgroundColor='white' width='1024px' padding='24px' borderRadius='12px' >
      <BasicInfoStep />
    </Box>
  </Center>
)
