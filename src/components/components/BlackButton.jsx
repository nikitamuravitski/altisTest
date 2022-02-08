import { Button } from '@mui/material'

const BlackButton = ({ title }) => {
  return <Button
    variant='round'
    color='black'
    children={title}
    disableRipple={true}
    disableElevation={true}
  />
}

export default BlackButton