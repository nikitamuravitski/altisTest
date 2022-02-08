import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

const Wrap = styled(Box)({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: 228,
  height: 302,
  padding: '22px 18px'
})

const Card = ({ src, label, slug }) => {
  return <Wrap>
    <Typography variant='filled'>{label}</Typography>
    <Typography variant='main' size='small' thick='true'>{slug}</Typography>
    <img style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} src={src} height={302} />
  </Wrap>
}

export default Card