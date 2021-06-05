import {
  VStack,
  FormControl,
  FormLabel,
  HStack,
  Box
} from '@chakra-ui/react'
import { LabelAndTextInput, StepView, Select } from '../../../../ui'
import { useCarrer } from './useCarrer'
import { DefaultStepProps } from '../types'
import { range } from '../../../../../utils'

export const CarrerStep: React.FC<DefaultStepProps> = ({
  title,
  currentStep,
  numOfStep,
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext
}) => {
  const { methods, setValues } = useCarrer()
  const { register, formState: { errors } } = methods

  const startBirthDayYear = 1900
  const currentYear = new Date().getFullYear()

  console.count('CarrerStepがレンダリングされた回数')
  return (
    <StepView
      title={title}
      currentStep={currentStep}
      numOfStep={numOfStep}
      previousTitle={previousTitle}
      nextTitle={nextTitle}
      onClickPrevious={onClickPrevious}
      onClickNext={() => {
        onClickNext && onClickNext()
        setValues()
      }}
    >
      <VStack spacing="24px">
        <LabelAndTextInput label='会社名' {...register('companyName')} />
        <LabelAndTextInput label='場所' {...register('place')} />
        <LabelAndTextInput label='役職' {...register('position')} />
        <LabelAndTextInput label='雇用形態' {...register('employmentStatus')} />

        {/* FIXME: コンポーネントとして切り出す */}
        <FormControl>
          <FormLabel>開始日</FormLabel>
          <HStack spacing='4px'>
            <Box width='120px'>
              <Select {...register('startDateYear')}>
                {
                  range(startBirthDayYear, currentYear - startBirthDayYear + 1).map((year) => (
                    <option key={year} label={`${year}年`} value={year} />
                  ))
                }
              </Select>
            </Box>
            <Box width='120px'>
              <Select {...register('startDateMonth')}>
                {
                  range(1, 12).map((month) => (
                    <option key={month} label={`${month}月`} value={month} />
                  ))
                }
              </Select>
            </Box>
          </HStack>
        </FormControl>

        {/* FIXME: コンポーネントとして切り出す */}
        <FormControl>
          <FormLabel>終了日</FormLabel>
          <HStack spacing='4px'>
            <Box width='120px'>
              <Select {...register('endDateYear')}>
                {
                  range(startBirthDayYear, currentYear - startBirthDayYear + 1).map((year) => (
                    <option key={year} label={`${year}年`} value={year} />
                  ))
                }
              </Select>
            </Box>
            <Box width='120px'>
              <Select {...register('endDateMonth')}>
                {
                  range(1, 12).map((month) => (
                    <option key={month} label={`${month}月`} value={month} />
                  ))
                }
              </Select>
            </Box>
          </HStack>
        </FormControl>
      </VStack>
    </StepView>
  )
}