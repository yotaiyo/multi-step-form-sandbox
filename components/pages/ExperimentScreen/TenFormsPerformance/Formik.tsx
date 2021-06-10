import { useFormik } from 'formik'
import { VStack, Box, Center } from '@chakra-ui/react'
import { LabelAndTextareaInput, Heading } from '../../../ui'

export const Formik: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      form1: '',
      form2: '',
      form3: '',
      form4: '',
      form5: '',
      form6: '',
      form7: '',
      form8: '',
      form9: '',
      form10: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 10))
    },
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false
  })

  return (
    <Center>
      <Box width='1024px' backgroundColor='white' padding='12'>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing='4'>
          <Heading variant='sectionTitle'>Formik</Heading>
            <LabelAndTextareaInput
              id='form1'
              name='form1'
              label='form1'
              value={formik.values.form1}
              onChange={formik.handleChange}
            />
            <LabelAndTextareaInput
              id='form2'
              name='form2'
              label='form2'
              value={formik.values.form2}
              onChange={formik.handleChange}
            />
            <LabelAndTextareaInput
              id='form3'
              name='form3'
              label='form3'
              value={formik.values.form3}
              onChange={formik.handleChange}
            />
            <LabelAndTextareaInput
              id='form4'
              name='form4'
              label='form4'
              value={formik.values.form4}
              onChange={formik.handleChange}
            />
            <LabelAndTextareaInput
              id='form5'
              name='form5'
              label='form5'
              value={formik.values.form5}
              onChange={formik.handleChange}
            />
            <LabelAndTextareaInput
              id='form6'
              name='form6'
              label='form6'
              value={formik.values.form6}
              onChange={formik.handleChange}
            />
            <LabelAndTextareaInput
              id='form7'
              name='form7'
              label='form7'
              value={formik.values.form7}
              onChange={formik.handleChange}
            />
            <LabelAndTextareaInput
              id='form8'
              name='form8'
              label='form8'
              value={formik.values.form8}
              onChange={formik.handleChange}
            />
            <LabelAndTextareaInput
              id='form9'
              name='form9'
              label='form9'
              value={formik.values.form9}
              onChange={formik.handleChange}
            />
            <LabelAndTextareaInput
              id='form10'
              name='form10'
              label='form10'
              value={formik.values.form10}
              onChange={formik.handleChange}
            />
          </VStack>
        </form>
      </Box>
    </Center>
  )
}
