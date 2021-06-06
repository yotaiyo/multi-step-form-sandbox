import React from 'react'
import { Center, Box, Menu, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { WarningTwoIcon, CheckIcon } from '@chakra-ui/icons'

export type MenuNavigationProps = {
  stepTitles: string[]
  setStepIndex: React.Dispatch<React.SetStateAction<number>>
  stepErrors: boolean[]
  onClickMenuItem: () => void
  bottomButton: React.ReactNode
}

export const MenuNavigation: React.FC<MenuNavigationProps> = ({
  stepTitles,
  setStepIndex,
  stepErrors,
  onClickMenuItem,
  bottomButton
}) => {
  return (
    <Menu isOpen>
      <MenuList padding='12px'>
        <Box marginBottom='8px'>
          {stepTitles.map((title, index) => {
            return (
              <MenuItem
                key={index}
                icon={stepErrors[index] ? <WarningTwoIcon color='red.600' /> : <CheckIcon />}
                onClick={() => {
                  setStepIndex(index)
                  onClickMenuItem()
                }}
                fontSize='larger'
              >
                {title}
              </MenuItem>
            )
          })}
        </Box>

        <Center>
          {bottomButton}
        </Center>
      </MenuList>
    </Menu>
  )
}