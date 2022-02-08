import { Typography, Box, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: '0 18px'
    },
    [theme.breakpoints.down('lg')]: {
      margin: '0 18px'
    },
    width: '35%',
    marginLeft: '60px'
  },
  text: {
    marginBottom: '40px',
    color: "white",
    lineHeight: 1.1,
    fontWeight: 100
  }
}))

const Content = () => {
  const { wrapper, text } = useStyles()

  return <Box className={wrapper}>
    <Box className={text}>
      <Typography variant='h1'>
        The only home gym with a built-in personal trainer.
      </Typography>
    </Box>
    <Button variant='round' color='white' sx={{ maxWidth: 170 }} children='How It Works' />
  </Box>
}
export default Content