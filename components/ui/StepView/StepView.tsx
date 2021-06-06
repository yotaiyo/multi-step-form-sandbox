import { VStack, HStack, Center, Box, Text, Flex, Menu, MenuList, MenuItem, Button } from '@chakra-ui/react'
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
  onClickConfirmButton: () => void
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
        <Menu isOpen>
          <MenuList padding='12px'>
            <Box marginBottom='8px'>
              {stepTitles.map((title, index) => {
                return (
                  <MenuItem
                    key={index}
                    icon={stepErrors[index] ? <WarningTwoIcon color='red.600' /> : <CheckIcon />}
                    onClick={() => {
                      setStepIndex(index)
                      onClickMenuItem()
                    }}
                    fontSize='larger'
                  >
                    {title}
                  </MenuItem>
                )
              })}
            </Box>

            <Center>
              <Button
                colorScheme="blue"
                disabled={stepErrors.find(error => error)}
                onClick={onClickConfirmButton}
                size='lg'
              >
                  確認画面へ
              </Button>
            </Center>
          </MenuList>
        </Menu>
      </VStack>
    </HStack>
  )
}