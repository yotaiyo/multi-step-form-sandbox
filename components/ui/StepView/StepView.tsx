import { VStack, HStack, Text, Flex } from '@chakra-ui/react'

import { Heading } from '../Heading'
import { Pagination } from '../Pagination'

export type StepViewProps = {
  stepIndex: number
  stepTitles: string[]
  stepErrors: boolean[]
  setStepErrors: React.Dispatch<React.SetStateAction<boolean[]>>
  onClickPrevious: () => void
  onClickNext: () => void
}

export const StepView: React.FC<StepViewProps> = ({
  stepIndex,
  stepTitles,
  stepErrors,
  setStepErrors,
  onClickPrevious,
  onClickNext,
  children,
}) => {
  const isFirstStep = stepIndex === 0
  const isLastStep = stepIndex === stepTitles.length - 1

  return (
    <VStack align='unset'>
      <VStack spacing='48px' align='unset' width='50%'>
        <VStack align='unset'>
          <HStack>
            <Heading variant='screenTitle'>{stepIndex + 1}</Heading>
            <Flex height='40px'>
              <Text color='gray.500' alignSelf='flex-end'>{`/ ${stepTitles.length}`}</Text>
            </Flex>
          </HStack>
          <Heading variant='sectionTitle'>{stepTitles[stepIndex]}</Heading>
        </VStack>

        {children}

        <Pagination
          previousTitle={!isFirstStep ? stepTitles[stepIndex - 1] : undefined}
          nextTitle={!isLastStep ? stepTitles[stepIndex + 1] : undefined}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
        />
      </VStack>
    </VStack>
  )
}