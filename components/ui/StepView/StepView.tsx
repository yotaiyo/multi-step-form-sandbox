import { VStack, HStack, Text, Flex } from '@chakra-ui/react'
import { Heading } from '../Heading'
import { Pagination } from '../Pagination'
import { MenuNavigation, MenuNavigationProps } from './MenuNavigation'

export type StepViewProps = MenuNavigationProps & {
  stepIndex: number
  onClickPrevious: () => void
  onClickNext: () => void
}

export const StepView: React.FC<StepViewProps> = ({
  stepIndex,
  setStepIndex,
  stepTitles,
  stepErrors,
  onClickPrevious,
  onClickNext,
  onClickMenuItem,
  onClickConfirmButton,
  children,
}) => {
  const isFirstStep = stepIndex === 0
  const isLastStep = stepIndex === stepTitles.length - 1

  return (
    <HStack align='unset' spacing='48px'>
      <VStack spacing='48px' align='unset' width='60%'>
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
      <VStack width='40%'>
        <MenuNavigation
          stepTitles={stepTitles}
          setStepIndex={setStepIndex}
          stepErrors={stepErrors}
          onClickMenuItem={onClickMenuItem}
          onClickConfirmButton={onClickConfirmButton}
        />
      </VStack>
    </HStack>
  )
}