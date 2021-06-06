import { StepViewProps } from '../../../../ui'

export type DefaultStepProps = Omit<StepViewProps, 'onClickMenuItem'> & {
  setStepErrors: React.Dispatch<React.SetStateAction<boolean[]>>
}