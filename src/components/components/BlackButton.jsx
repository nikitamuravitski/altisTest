import { Button } from '@mui/material'

const BlackButton = () => {
  return <Button
    variant='round'
    color='black'
    children='Buy Tempo'
    disableRipple={true}
    disableElevation={true}
  />
}

export default BlackButton