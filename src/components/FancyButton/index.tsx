import { Button, Theme } from "@mui/material"
import { SystemStyleObject } from '@mui/system'

import styles from './styles'
type FancyButtonProps = {
  children: string,
  style?: SystemStyleObject<Theme>,
}

const FancyButton = ({ children,style, ...restProps}:FancyButtonProps) => {
  return (
    <Button fullWidth variant='contained' sx={[styles.button, style as SystemStyleObject<Theme>  ]} {...restProps}>{children}</Button>
  )
}

export default FancyButton
