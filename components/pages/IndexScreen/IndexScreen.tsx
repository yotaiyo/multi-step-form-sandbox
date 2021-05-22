import { Center, Box } from '@chakra-ui/react'
import { BasicInfoStep } from './Steps/BasicInfoStep'
import { AddressStep } from './Steps/AddressStep'
import { StepView } from '../../ui'

export const IndexScreen = () => (
  <Center>
    <Box backgroundColor='white' width='1024px' padding='24px' borderRadius='12px' >
      <StepView title="個人情報入力" currentStep={1} numOfStep={2}>
        <BasicInfoStep />
      </StepView>
    </Box>
  </Center>
)
