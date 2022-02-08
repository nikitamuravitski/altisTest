import { Box, Typography } from '@mui/material'
import { firstCarousel, secondCarousel } from './data'
import { makeStyles } from '@mui/styles'
import Carousel from '../Carousel'
import BlackButton from '../components/BlackButton'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100vh'
  },
  container: {
    display: 'flex',
    width: '1520px',
    padding: '0 40px'
  },
  carouselContainer: {
    display: 'flex',
    marginLeft: 54
  },
  content: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'inherit',
  },
  text: {
    width: '55%'
  }
})

const CarouselSection = () => {
  const { wrapper, carouselContainer, content, container, text } = useStyles()
  return <Box className={wrapper}>
    <Box className={container}>
      <Box className={content}>
        <Typography variant='h1' color='black' sx={{ marginBottom: '20px' }}>
          1,000s of live and on-demand workouts.
        </Typography>
        <Typography className={text} variant='main' sx={{ marginBottom: '20px' }}>
          Strength training, HIIT, cardio, boxing, yoga, low-impact, prenatal, agility, and mobility. We've got exactly what you need to meet your goals, and add new classes daily to keep things fresh.
        </Typography>
        <BlackButton />
      </Box>
      <Box className={carouselContainer}>
        <Carousel data={firstCarousel} speed={5000} />
        <Carousel data={secondCarousel} speed={8000} />
      </Box>
    </Box>
  </Box>
}

export default CarouselSection