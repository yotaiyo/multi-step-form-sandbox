import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useSelfIntroductionRecoilStates } from '../../../../../recoil'

const schema = yup.object().shape({})

type useSelfIntroductionType = {
  stepIndex: number
  stepErrors: boolean[]
  setStepErrors: React.Dispatch<React.SetStateAction<boolean[]>>
}

export const useSelfIntroduction = ({ stepIndex, stepErrors, setStepErrors }: useSelfIntroductionType) => {
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
    setStepErrors(stepErrors.map((error, index) => {
      return (
        index === stepIndex ? !methods.formState.isValid : error
      )
    }))
  }, [methods.formState.isValid])

  return {
    methods,
    setValues
  }
}