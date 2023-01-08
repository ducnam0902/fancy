import { Button, Theme } from "@mui/material"
import { SystemStyleObject } from '@mui/system'

import styles from './styles'
type FancyButtonProps = {
  children: string,
  styleButton?: SystemStyleObject<Theme>
}
type button = FancyButtonProps & React.ComponentPropsWithoutRef<typeof Button>;

const FancyButton = ({ children,styleButton, ...restProps}:button) => {
  return (
    <Button fullWidth variant='contained' sx={[styles.button, styleButton as SystemStyleObject<Theme> ]} {...restProps}>{children}</Button>
  )
}

export default FancyButton
