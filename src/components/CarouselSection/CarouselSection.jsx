import { Box, Typography, useMediaQuery } from '@mui/material'
import { firstCarousel, secondCarousel } from './data'
import { makeStyles, useTheme } from '@mui/styles'
import Carousel from '../Carousel'
import BlackButton from '../components/BlackButton'

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
    height: '100vh'
  },
  container: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '0 18px',
      width: '100%'
    },
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 40px'
  },
  carouselContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  carouselItem: {
    paddingLeft: '20px',
    width: 'fit-content'
  },
  content: {
    [theme.breakpoints.down('xl')]: {
      width: '100%'
    },
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'inherit',
  },
  text: {
    [theme.breakpoints.down('md')]: {
      width: '80%',
      padding: '20px 0 16px 0'
    },
    width: '55%'
  }
}))
const CarouselSection = () => {

  const theme = useTheme()
  const classes = useStyles()
  const matchesSmall = useMediaQuery(theme.breakpoints.down('xl'))

  return <Box className={classes.wrapper}>
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Typography variant='h1' narrow='true' color='black' sx={{ marginBottom: '20px' }}>
          1,000s of live and on-demand workouts.
        </Typography>
        <Typography className={classes.text} variant='main' sx={{ marginBottom: '20px' }}>
          Strength training, HIIT, cardio, boxing, yoga, low-impact, prenatal, agility, and mobility. We've got exactly what you need to meet your goals, and add new classes daily to keep things fresh.
        </Typography>
        <BlackButton title='Learn More' color='black' />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.carouselContainer}>
          <Box className={classes.carouselItem}>
            <Carousel data={!matchesSmall ? firstCarousel : [...firstCarousel, ...secondCarousel]} speed={5000} />
          </Box>
          {!matchesSmall &&
            <Box className={classes.carouselItem}>
              <Carousel data={secondCarousel} speed={8000} />
            </Box>
          }
        </Box>
      </Box>
    </Box>
  </Box>
}

export default CarouselSection