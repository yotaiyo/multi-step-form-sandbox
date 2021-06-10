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
          <a
            target="_blank"
            href="https://github.com/yotaiyo/multi-step-form-sandbox"
            rel="noopener noreferrer"
          >
            <ChakraLink isExternal>
              Source Code <ExternalLinkIcon mx='1' />
            </ChakraLink>
          </a>
        </VStack>
      </Box>
    </Center>
  )
}