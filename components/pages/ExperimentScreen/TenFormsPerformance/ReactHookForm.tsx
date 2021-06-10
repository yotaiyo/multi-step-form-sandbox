import { useForm, SubmitHandler } from 'react-hook-form'
import { VStack, Box, Center } from '@chakra-ui/react'
import { LabelAndTextareaInput, Heading } from '../../../ui'

type Inputs = {
  form1: string
  form2: string
  form3: string
  form4: string
  form5: string
  form6: string
  form7: string
  form8: string
  form9: string
  form10: string
}

export const ReactHookForm: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Center>
      <Box width='1024px' backgroundColor='white' padding='12'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing='4'>
          <Heading variant='sectionTitle'>react-hook-form</Heading>
            <LabelAndTextareaInput label='form1' {...register('form1')} />
            <LabelAndTextareaInput label='form2' {...register('form2')} />
            <LabelAndTextareaInput label='form3' {...register('form3')} />
            <LabelAndTextareaInput label='form4' {...register('form4')} />
            <LabelAndTextareaInput label='form5' {...register('form5')} />
            <LabelAndTextareaInput label='form6' {...register('form6')} />
            <LabelAndTextareaInput label='form7' {...register('form7')} />
            <LabelAndTextareaInput label='form8' {...register('form8')} />
            <LabelAndTextareaInput label='form9' {...register('form9')} />
            <LabelAndTextareaInput label='form10' {...register('form10')} />
          </VStack>
        </form>
      </Box>
    </Center>
  )
}