import { VStack, Box, HStack, FormControl, FormLabel } from '@chakra-ui/react'
import { LabelAndTextInput, Select, LabelAndSelectInput,StepView } from '../../../../ui'
import { useBasicInfo } from './useBasicInfo'
import { DefaultStepProps } from '../types'
import { range } from '../../../../../utils'

export const BasicInfoStep: React.FC<DefaultStepProps> = ({
  title,
  currentStep,
  numOfStep,
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext
}) => {
  const { methods, setValues } = useBasicInfo()
  const { register, formState: { errors } } = methods

  const startBirthDayYear = 1900
  const currentYear = new Date().getFullYear()

  console.count('BasicInfoStepがレンダリングされた回数')
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
        <LabelAndTextInput
          label='お名前'
          id='name'
          errorMessage={errors.name?.message}
          required={true}
          {...register('name')}
        />
        <LabelAndTextInput
          label='フリガナ'
          id='nameKana'
          errorMessage={errors.nameKana?.message}
          required={true}
          {...register('nameKana')}
        />

        {/* FIXME: コンポーネントとして切り出す */}
        <FormControl>
          <FormLabel>生年月日</FormLabel>
          <HStack spacing='4px'>
            <Box width='100px'>
              <Select {...register('birthDayYear')}>
                {
                  range(startBirthDayYear, currentYear - startBirthDayYear + 1).map((year) => (
                    <option key={year} label={`${year}年`} value={year} />
                  ))
                }
              </Select>
            </Box>
            <Box width='100px'>
              <Select {...register('birthDayMonth')}>
                {
                  range(1, 12).map((month) => (
                    <option key={month} label={`${month}月`} value={month} />
                  ))
                }
              </Select>
            </Box>
            <Box width='120px'>
              <Select {...register('birthDayDay')}>
                {
                  range(1, 31).map((day) => (
                    <option key={day} label={`${day}日`} value={day} />
                  ))
                }
              </Select>
            </Box>
          </HStack>
        </FormControl>

        <LabelAndSelectInput label='性別' width='100px' {...register('gender')}>
          <option label='男性' value='man' />
          <option label='女性' value='woman' />
          <option label='その他' value='other' />
          <option label='未回答' value='unanswered' />
        </LabelAndSelectInput>

        <LabelAndTextInput label='国' id='country' {...register('country')} />
        <LabelAndTextInput label='出身地' id='birthPlace' {...register('birthPlace')} />
        <LabelAndTextInput label='言語' id='language' {...register('language')} />
        <LabelAndTextInput label='所属企業' id='company' {...register('company')} />
        <LabelAndTextInput label='職業' id='job' {...register('job')} />
      </VStack>
    </StepView>
  )
}