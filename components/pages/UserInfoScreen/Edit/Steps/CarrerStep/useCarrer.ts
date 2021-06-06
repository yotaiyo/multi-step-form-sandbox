import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserInfoRecoilStates } from '../../../../../../recoil'

const schema = yup.object().shape({
  companyName: yup.string().required('会社名を入力してください'),
  position: yup.string().required('役職を入力してください'),
  employmentStatus: yup.string().required('雇用形態を入力してください')
})

type useCarrerType = {
  stepIndex: number
  stepErrors: boolean[]
  setStepErrors: React.Dispatch<React.SetStateAction<boolean[]>>
}

export const useCarrer = ({ stepIndex, stepErrors, setStepErrors }: useCarrerType) => {
  const { carrer, setCarrer } = useUserInfoRecoilStates()

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