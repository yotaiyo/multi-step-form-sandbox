import { Heading as ChakraHeading } from '@chakra-ui/react'

export type HeadingProps = {
  variant: 'screenTitle' | 'sectionTitle' | 'blockTitle' | 'subBlockTitle'
}

export const Heading: React.FC<HeadingProps> = ({ variant, children }) => {
  switch (variant) {
    case 'screenTitle':
      return <ChakraHeading as='h1' size='2xl'>{children}</ChakraHeading>
    case 'sectionTitle':
      return <ChakraHeading as='h2' size='lg'>{children}</ChakraHeading>
    case 'blockTitle':
      return <ChakraHeading as='h3' size='md'>{children}</ChakraHeading>
    case 'subBlockTitle':
      return <ChakraHeading as='h4' size='sm'>{children}</ChakraHeading>
  }
}