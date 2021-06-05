import { VStack, HStack, Text, Flex } from '@chakra-ui/react'

import { Heading } from '../Heading'
import { Pagination, PaginationProps } from '../Pagination'

export type StepViewProps = PaginationProps & {
  title: string
  currentStep: number
  numOfStep: number
  stepErrors: boolean[]
  setStepErrors: React.Dispatch<React.SetStateAction<boolean[]>>
}

export const StepView: React.FC<StepViewProps> = ({
  title,
  currentStep,
  numOfStep,
  children,
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext,
  stepErrors,
  setStepErrors
}) => {
  return (
    <VStack align='unset'>
      <VStack spacing='48px' align='unset' width='50%'>
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

        <Pagination previousTitle={previousTitle} nextTitle={nextTitle} onClickPrevious={onClickPrevious} onClickNext={onClickNext} />
      </VStack>
    </VStack>
  )
}