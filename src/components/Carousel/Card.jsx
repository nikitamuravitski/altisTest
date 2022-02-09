import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

const Wrap = styled(Box)({
  width: 'fit-content',
  height: 'fit-content',
  position: 'relative',
  cursor: 'pointer'
})

const Card = ({ src, label, slug }) => {
  return <Wrap>
    <Box sx={{ position: 'absolute', top: 21, left: 21 }}>
      <Typography variant='filled'>
        {label}
      </Typography>
      <Typography
        variant='main'
        size='small'
        thick='true'
      >
        {slug}
      </Typography>
    </Box>
    <img
      style={{ zIndex: -1 }}
      width={228}
      height={306}
      src={src}
    />
  </Wrap>
}

export default Card