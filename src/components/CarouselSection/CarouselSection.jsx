import { Box, Typography } from '@mui/material'
import { firstCarousel, secondCarousel } from './data'
import { makeStyles } from '@mui/styles'
import Carousel from '../Carousel'
import BlackButton from '../components/BlackButton'

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100vh'
  },
  container: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: 'fit-content',
      padding: '0 18px',
      width: '100%'
    },
    display: 'flex',
    width: '1520px',
    padding: '0 40px'
  },
  carouselContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 54,
    width: 'fit-content',
    minWidth: 400,
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      // width: '100%',
    },
  },
  carousel: {
    display: 'flex',

  },
  content: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '60%',
    },
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'inherit',
  },
  text: {
    [theme.breakpoints.down('md')]: {
      width: '60%',
      padding: '20px 0 16px 0'
    },
    width: '55%'
  }
}))

const CarouselSection = () => {
  const { wrapper, carouselContainer, content, container, text, carousel } = useStyles()
  return <Box className={wrapper}>
    <Box className={container}>
      <Box className={content}>
        <Typography variant='h1' narrow='true' color='black' sx={{ marginBottom: '20px' }}>
          1,000s of live and on-demand workouts.
        </Typography>
        <Typography className={text} variant='main' sx={{ marginBottom: '20px' }}>
          Strength training, HIIT, cardio, boxing, yoga, low-impact, prenatal, agility, and mobility. We've got exactly what you need to meet your goals, and add new classes daily to keep things fresh.
        </Typography>
        <BlackButton title='Learn More' />
      </Box>
      <Box className={carouselContainer}>

        <Carousel data={firstCarousel} speed={5000} />
        <Carousel data={secondCarousel} speed={8000} />


      </Box>
    </Box>
  </Box>
}

export default CarouselSection