import React from 'react'
import Link from 'next/link'
import { Center, Box, VStack, Link as ChakraLink } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const IndexScreen: React.FC = () => {
  return (
    <Center>
      <Box backgroundColor='white' width='1024px' padding='6' borderRadius='8' >
        <VStack align='start' spacing='4'>
          <Link href='/users/1/edit'>
            <a>
              <ChakraLink isExternal>
                Try Multi-Step From <ExternalLinkIcon mx='1' />
              </ChakraLink>
            </a>
          </Link>
          <Link href='https://github.com/yotaiyo/multi-step-form-sandbox'>
            <a>
              <ChakraLink isExternal>
                Source Code <ExternalLinkIcon mx='1' />
              </ChakraLink>
            </a>
          </Link>
        </VStack>
      </Box>
    </Center>
  )
}