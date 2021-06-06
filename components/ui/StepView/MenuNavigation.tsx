import React from 'react'
import { Center, Box, Menu, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { WarningTwoIcon, CheckIcon } from '@chakra-ui/icons'

export type MenuNavigationProps = {
  stepTitles: string[]
  setStepIndex: React.Dispatch<React.SetStateAction<number>>
  stepErrors: boolean[]
  onClickMenuItem: () => void
  onClickConfirmButton: () => void
}

export const MenuNavigation: React.FC<MenuNavigationProps> = ({
  stepTitles,
  setStepIndex,
  stepErrors,
  onClickMenuItem,
  onClickConfirmButton
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
          <Button
            colorScheme="blue"
            disabled={stepErrors.find(error => error)}
            onClick={onClickConfirmButton}
            size='lg'
          >
              確認画面へ
          </Button>
        </Center>
      </MenuList>
    </Menu>
  )
}