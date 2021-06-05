import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useCarrerRecoilStates } from '../../../../../recoil'

const schema = yup.object().shape({
  companyName: yup.string().required('会社名は必須項目です'),
  position: yup.string().required('役職は必須項目です'),
  employmentStatus: yup.string().required('雇用形態は必須項目です')
})


export const useCarrer = () => {
  const { carrer, setCarrer } = useCarrerRecoilStates()

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: carrer,
    resolver: yupResolver(schema)
  })

  const setValues = () => {
    const values = methods.getValues()
    setCarrer(values)
  }

  React.useEffect(() => {
    // FIXME
  }, [methods.formState.isValid])

  return {
    methods,
    setValues
  }
}