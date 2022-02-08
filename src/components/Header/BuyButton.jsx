import { Button } from '@mui/material'


const BuyButton = () => {
  return <Button
    variant='round'
    color='black'
    children='Buy Tempo'
    disableRipple={true}
    disableElevation={true}
  />
}

export default BuyButton