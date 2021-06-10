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

  const {
    companyName,
    position,
    employmentStatus,
    place,
    startDateYear,
    startDateMonth,
    endDateYear,
    endDateMonth,
    description
  } = carrer

  const {
    mobilePhone,
    postalCode,
    prefecture,
    city,
    block,
    building,
    nearestStation,
    website
  } = contactInfo

  const {
    sports,
    book,
    tv,
    movie,
    webService
  } = selfIntroduction

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
      <Box backgroundColor='white' width='1024px' padding='6' borderRadius='8' >
        <VStack spacing='4' align='start'>
          <Heading variant='sectionTitle'>確認画面</Heading>

          <Box>
            <VStack spacing='1' align='start'>
              <Heading variant='blockTitle'>基本情報</Heading>
              <VStack spacing='1' align='start'>
                <Text>お名前: {name}</Text>
                <Text>カナ: {nameKana}</Text>
                <Text>生年月日: {`${birthDayYear ? birthDayYear + '年' : ''}${birthDayMonth ? birthDayMonth + '月' : ''}${birthDayDay ? birthDayDay + '日' : ''}`}</Text>
                <Text>性別: {genderMapper(gender)}</Text>
                <Text>国: {country}</Text>
                <Text>出身地: {birthPlace}</Text>
                <Text>言語: {language}</Text>
              </VStack>
            </VStack>
          </Box>

          <Box>
            <VStack spacing='1' align='start'>
              <Heading variant='blockTitle'>職業</Heading>
              <VStack spacing='1' align='start'>
                <Text>会社名: {companyName}</Text>
                <Text>役職: {position}</Text>
                <Text>雇用形態: {employmentStatus}</Text>
                <Text>場所: {place}</Text>
                <Text>開始日: {`${startDateYear ? startDateYear + '年' : ''}${startDateMonth ? startDateMonth + '月' : ''}`}</Text>
                <Text>終了日: {`${endDateYear ? endDateYear + '年' : ''}${endDateMonth ? endDateMonth + '月' : ''}`}</Text>
                <Text>説明: {description}</Text>
              </VStack>
            </VStack>
          </Box>

          <Box>
            <VStack spacing='1' align='start'>
              <Heading variant='blockTitle'>連絡先</Heading>
              <VStack spacing='1' align='start'>
                <Text>携帯番号: {mobilePhone}</Text>
                <Text>郵便番号: {postalCode}</Text>
                <Text>住所: {`${prefecture} ${city}${block ? block : ''}${building ? ' ' + building : ''}`}</Text>
                <Text>最寄り駅: {nearestStation}</Text>
                <Text>ウェブサイト: {website}</Text>
              </VStack>
            </VStack>
          </Box>

          <Box>
            <VStack spacing='1' align='start'>
              <Heading variant='blockTitle'>自己紹介</Heading>
              <VStack spacing='1' align='start'>
                <Text>好きなスポーツについて: {sports}</Text>
                <Text>最近読んだ本について: {book}</Text>
                <Text>よく観るテレビ番組について: {tv}</Text>
                <Text>好きな映画について: {movie}</Text>
                <Text>よく使うWebサービスについて: {webService}</Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Center>
  )
}