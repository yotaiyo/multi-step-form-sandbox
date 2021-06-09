import { VStack, HStack, Text, Flex, Button } from '@chakra-ui/react'
import { Heading } from '../Heading'
import { Pagination } from '../Pagination'
import { MenuNavigation } from './MenuNavigation'

export type StepViewProps = {
  stepIndex: number
  stepTitles: string[]
  setStepIndex: React.Dispatch<React.SetStateAction<number>>
  stepErrors: boolean[]
  onClickPrevious: () => void
  onClickNext: () => void
  onClickConfirmButton: () => void
  onClickMenuItem: () => void
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

  const ConfirmButton = () => (
    <Button
      colorScheme="blue"
      disabled={stepErrors.find(error => error)}
      onClick={onClickConfirmButton}
      size='lg'
    >
        確認画面へ
    </Button>
  )

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
          lastButton={<ConfirmButton />}
        />

      </VStack>
      <VStack width='40%'>
        <MenuNavigation
          stepTitles={stepTitles}
          setStepIndex={setStepIndex}
          stepErrors={stepErrors}
          onClickMenuItem={onClickMenuItem}
          bottomButton={<ConfirmButton />}
        />
      </VStack>
    </HStack>
  )
}