import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useSelfIntroductionRecoilStates } from '../../../../../recoil'

const schema = yup.object().shape({})

export const useSelfIntroduction = () => {
  const { selfIntroduction, setSelfIntroduction } = useSelfIntroductionRecoilStates()

  const methods = useForm({
    mode: 'onBlur',
    defaultValues: selfIntroduction,
    resolver: yupResolver(schema)
  })

  const setValues = () => {
    const values = methods.getValues()
    setSelfIntroduction(values)
  }

  React.useEffect(() => {
    // FIXME
  }, [methods.formState.isValid])

  return {
    methods,
    setValues
  }
}