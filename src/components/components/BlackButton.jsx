import { Button } from '@mui/material'

const BlackButton = ({ title, color }) => {
  return <Button
    variant='round'
    color={color}
    children={title}
    disableRipple={true}
    disableElevation={true}
  />
}

export default BlackButton