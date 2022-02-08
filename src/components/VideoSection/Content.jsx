import { Typography, Box, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 9999,
    width: '35%',
    marginLeft: '60px'
  },
  text: {
    marginBottom: '40px',
    color: "white",
    lineHeight: 1.1,
    fontWeight: 100
  }
})

const Content = () => {
  const { wrapper, text } = useStyles()

  return <Box className={wrapper}>
    <Box className={text}>
      <Typography variant='main'>
        The only home gym with a built-in personal trainer.
      </Typography>
    </Box>
    <Button variant='round' color='white' sx={{ maxWidth: 170 }} children='How It Works' />
  </Box>
}
export default Content