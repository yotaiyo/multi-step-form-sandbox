import { VStack, HStack, Text, Flex, Menu, MenuList, MenuItem } from '@chakra-ui/react'
import { WarningTwoIcon, CheckIcon } from '@chakra-ui/icons'
import { Heading } from '../Heading'
import { Pagination } from '../Pagination'

export type StepViewProps = {
  stepIndex: number
  setStepIndex: React.Dispatch<React.SetStateAction<number>>
  stepTitles: string[]
  stepErrors: boolean[]
  onClickPrevious: () => void
  onClickNext: () => void
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
  children,
}) => {
  const isFirstStep = stepIndex === 0
  const isLastStep = stepIndex === stepTitles.length - 1

  return (
    <HStack align='unset' spacing='48px'>
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
      <VStack width='50%'>
        <Menu isOpen={true}>
          <MenuList>
            {stepTitles.map((title, index) => {
              return (
                <MenuItem
                  key={index}
                  icon={stepErrors[index] ? <WarningTwoIcon color='red.600' /> : <CheckIcon />}
                  onClick={() => {
                    setStepIndex(index)
                    onClickMenuItem()
                  }}
                >
                  {title}
                </MenuItem>
              )
            })}
          </MenuList>
        </Menu>
      </VStack>
    </HStack>
  )
}