import React from 'react'
import { Flex, VStack, Text, HStack, Spacer, Center } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

export type PaginationProps = {
  previousTitle?: string
  nextTitle?: string
  onClickPrevious?: () => void
  onClickNext?: () => void
  lastButton?: React.ReactNode
}

export const Pagination: React.FC<PaginationProps> = ({
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext,
  lastButton
}) => {
  return (
    <Flex>
      {previousTitle &&
        <VStack alignItems='flex-start' onClick={onClickPrevious} style={{ cursor: 'pointer' }}>
          <Text>previous</Text>
          <HStack>
            <ArrowBackIcon boxSize='6' color='orange.500' />
            <Text fontSize='large' color='orange.500' fontWeight='600'>{previousTitle}</Text>
          </HStack>
        </VStack>
      }

      <Spacer />

      {
        nextTitle ?
          <VStack alignItems='flex-end' onClick={onClickNext} style={{ cursor: 'pointer' }}>
            <Text>next</Text>
            <HStack>
              <Text fontSize='large' color='blue.500' fontWeight='600'>{nextTitle}</Text>
              <ArrowForwardIcon boxSize='6' color='blue.500' />
            </HStack>
          </VStack>
        : <Center>{lastButton}</Center>
      }
    </Flex>
  )
}