import React from 'react'
import { VStack, Text, Center, Box } from '@chakra-ui/react'
import { Heading } from '../../../ui'
import { useUserInfoRecoilStates } from '../../../../recoil'

export const UserInfoConfirmScreen: React.FC = () => {
  const { basicInfo, carrer, contactInfo, selfIntroduction } = useUserInfoRecoilStates()

  const {
    name,
    nameKana,
    birthDayYear,
    birthDayMonth,
    birthDayDay,
    gender,
    country,
    birthPlace,
    language
   } = basicInfo

    const genderMapper = (gender: 'man' | 'woman' | 'other' | 'unanswered' | null) => {
      switch(gender) {
        case 'man':
          return '男性'
        case 'woman':
          return '女性'
        case 'other':
          return 'その他'
        case 'unanswered':
          return '未回答'
        default:
          return null
      }
   }

  return (
    <Center>
      <Box backgroundColor='white' width='1024px' padding='24px' borderRadius='12px' >
        <VStack spacing='12px' align='unset'>
          <Heading variant='sectionTitle'>確認画面</Heading>

          <Box>
            <VStack spacing='4px' align='unset'>
              <Heading variant='blockTitle'>基本情報</Heading>
              <VStack spacing='4px' align='unset'>
                <Text>お名前: {name}</Text>
                <Text>カナ: {nameKana}</Text>
                <Text>生年月日: {`${birthDayYear}年${birthDayMonth}月${birthDayDay}日`}</Text>
                <Text>性別: {genderMapper(gender)}</Text>
                <Text>国: {country}</Text>
                <Text>出身地: {birthPlace}</Text>
                <Text>言語: {language}</Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Center>
  )
}