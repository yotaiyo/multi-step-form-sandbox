import { VStack, HStack, Text, Flex, Spacer, Box } from '@chakra-ui/react'
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
    <VStack align='unset'>
      <VStack spacing='48px' align='unset' width='60%'>
        <VStack align='unset'>
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
          <VStack alignItems='flex-start' onClick={onClickPrevious} style={{ cursor: 'pointer' }}>
            <Text>previous</Text>
            <HStack>
              <ArrowBackIcon color='orange.500' />
              <Text color='orange.500' fontWeight='600'>{previousTitle}</Text>
            </HStack>
          </VStack>

          <Spacer />

          <VStack alignItems='flex-end' onClick={onClickNext} style={{ cursor: 'pointer' }}>
            <Text>next</Text>
            <HStack>
              <Text color='blue.500' fontWeight='600'>{nextTitle}</Text>
              <ArrowForwardIcon color='blue.500' />
            </HStack>
          </VStack>
        </Flex>
      </VStack>
    </VStack>
  )
}