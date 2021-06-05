import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContactInfoRecoilStates } from '../../../../../recoil'

const schema = yup.object().shape({})


export const useContactInfo = () => {
  const { contactInfo, setContactInfo } = useContactInfoRecoilStates()

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: contactInfo,
    resolver: yupResolver(schema)
  })

  const setValues = () => {
    const values = methods.getValues()
    setContactInfo(values)
  }

  React.useEffect(() => {
    // FIXME
  }, [methods.formState.isValid])

  return {
    methods,
    setValues
  }
}