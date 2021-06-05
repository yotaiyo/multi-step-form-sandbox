import { VStack, HStack, Text, Flex } from '@chakra-ui/react'
import { Heading } from '../Heading'
import { Pagination } from '../Pagination'
import { useStepView, useStepViewProps } from './useStepView'

export type StepViewProps = useStepViewProps & {
  onClickPrevious?: () => void
  onClickNext?: () => void
}

export const StepView: React.FC<StepViewProps> = ({
  configs,
  onClickPrevious,
  onClickNext,
  children
}) => {
  const {
    stepInfo: { currentIndex },
    numOfStep,
    title,
    previousTitle,
    nextTitle,
    backward,
    forward
  } = useStepView({ configs })

  return (
    <VStack align='unset'>
      <VStack spacing='48px' align='unset' width='50%'>
        <VStack align='unset'>
          <HStack>
            <Heading variant='screenTitle'>{currentIndex + 1}</Heading>
            <Flex height='40px'>
              <Text color='gray.500' alignSelf='flex-end'>{`/ ${numOfStep}`}</Text>
            </Flex>
          </HStack>
          <Heading variant='sectionTitle'>{title}</Heading>
        </VStack>

        {children}

        <Pagination
          previousTitle={previousTitle}
          nextTitle={nextTitle}
          onClickPrevious={() => {
            backward && backward()
            onClickPrevious && onClickPrevious()
          }}
          onClickNext={() => {
            forward && forward()
            onClickNext && onClickNext()
          }}
        />
      </VStack>
    </VStack>
  )
}