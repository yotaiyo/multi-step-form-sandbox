import { VStack, HStack, Heading } from '@chakra-ui/react'

export type StepViewProps = {
  title: string
  currentStep: number
  numOfStep: number
}

export const StepView: React.FC<StepViewProps> = ({ title, currentStep, numOfStep, children }) => {
  return (
    <VStack spacing='48px' align='left'>
      <VStack align='left'>
        <HStack>
          <Heading as='h2' size='2xl'>{currentStep}</Heading>
          <Heading color='gray' as='h5' size='md'>{`/ ${numOfStep}`}</Heading>
        </HStack>
        <Heading as='h3' size='lg'>{title}</Heading>
      </VStack>
      {children}
    </VStack>
  )
}