import { VStack, HStack, Text, Flex, Spacer } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import { Heading } from '../Heading'

export type StepViewProps = {
  title: string
  currentStep: number
  numOfStep: number
  previousTitle?: string
  nextTitle?: string
  onClickPrevious?: () => void
  onClickNext?: () => void
}

export const StepView: React.FC<StepViewProps> = ({
  title,
  currentStep,
  numOfStep,
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext,
  children
}) => {
  return (
    <VStack align='left'>
      <VStack spacing='48px' align='left' width='60%'>
        <VStack align='left'>
          <HStack>
            <Heading variant='screenTitle'>{currentStep}</Heading>
            <Flex height='40px'>
              <Text color='gray.500' alignSelf='flex-end'>{`/ ${numOfStep}`}</Text>
            </Flex>
          </HStack>
          <Heading variant='sectionTitle'>{title}</Heading>
        </VStack>

        {children}

        <Flex>
          <VStack align='left' onClick={onClickPrevious} style={{ cursor: 'pointer' }}>
            <HStack>
              <ArrowBackIcon />
              <Text>previous</Text>
            </HStack>
            <Text>{previousTitle}</Text>
          </VStack>

          <Spacer />

          <VStack  onClick={onClickNext} style={{ cursor: 'pointer' }}>
            <HStack>
              <Text>next</Text>
              <ArrowForwardIcon />
            </HStack>
            <Text>{nextTitle}</Text>
          </VStack>
        </Flex>
      </VStack>
    </VStack>
  )
}