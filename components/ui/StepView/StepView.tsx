import { VStack, Box, HStack, Text, Flex } from '@chakra-ui/react'
import { Heading } from '../Heading'

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
          <Heading variant='screenTitle'>{currentStep}</Heading>
          <Flex height='36px'>
            <Text color='gray.500' alignSelf='flex-end'>{`/ ${numOfStep}`}</Text>
          </Flex>
        </HStack>
        <Heading variant='sectionTitle'>{title}</Heading>
      </VStack>
      {children}
    </VStack>
  )
}