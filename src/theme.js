import { createTheme } from '@mui/material'
import './fonts/style.css'

const palette = {
  white: {
    main: '#fff',
    contrastText: '#000'
  },
  black: {
    main: '#000',
    contrastText: '#fff'
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1024,
      xl: 1200,
      xxl: 1600
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.white.main
        })
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
          backgroundColor: theme.palette.white.main,
          [theme.breakpoints.up('lg')]: {
            padding: '6px 20px',
          },
          [theme.breakpoints.down('lg')]: {
            padding: '6px 5px',
          },
        })
      }
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'main' },
          style: {
            textTransform: 'none',
            fontFamily: 'Helvetica Neue',
            lineHeight: 1.3
          }
        },
        {
          props: { variant: 'h1' },
          style: ({ theme }) => ({
            textTransform: 'none',
            [theme.breakpoints.down('md')]: {
              fontSize: 32,
              letterSpacing: 2
            },
            fontSize: 60,
            fontFamily: 'Helvetica Neue',
            lineHeight: 1.1
          })
        },
        {
          props: { variant: 'h1', narrow: 'true' },
          style: ({ theme }) => ({
            [theme.breakpoints.down('md')]: {
              letterSpacing: 0
            }
          })
        },
        {
          props: { variant: 'h1', color: 'black' },
          style: {
            color: '#000',
          }
        },
        {
          props: { variant: 'filled' },
          style: {
            zIndex: 10,
            display: 'flex',
            width: 'fit-content',
            justifyContent: 'center',
            fontFamily: 'Helvetica Neue',
            backgroundColor: '#000',
            color: '#fff',
            fontSize: 12,
            padding: '0 10px',
            borderRadius: 11
          }
        },
        {
          props: { variant: 'h1', size: 'small', thick: 'true' },
          style: {
            zIndex: 10,
            fontSize: 16,
            fontWeight: 500
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'plain' },
          style: ({ theme }) => ({
            [theme.breakpoints.up('lg')]: {
              margin: '0 17px',
              fontSize: '16px',
            },
            [theme.breakpoints.down('lg')]: {
              margin: '0 7px',
              fontSize: '15px',
            },
            textTransform: 'none',

            fontFamily: 'Helvetica Neue',
            fontWeight: 500,
            borderRadius: 0,
            padding: 0,

            color: palette.black.main,
            '&:hover': {
              boxShadow: 'inset 0 -1px 0 0 black',
              backgroundColor: palette.white.main
            }
          })
        },
        {
          props: { variant: 'round' },
          style: {
            textTransform: 'none',
            fontFamily: 'Helvetica Neue',
            width: 'fit-content',
            fontWeight: 500,
            fontSize: '14px',
            height: '41px',
            borderRadius: '100px',
            padding: '0.85rem 1.5rem',
            '&:hover': {
              outline: 'black solid 1.5px',

            }
          }
        },
        {
          props: { variant: 'round', color: 'white' },
          style: (props) => {
            const color = props.ownerState.color
            return {
              color: props.theme.palette[color].contrastText,
              backgroundColor: props.theme.palette[color].main,
              '&:hover': {
                backgroundColor: props.theme.palette[color].main,
              }
            }
          }
        },
        {
          props: { variant: 'round', color: 'black' },
          style: (props) => {
            const color = props.ownerState.color
            return {
              color: props.theme.palette[color].contrastText,
              backgroundColor: props.theme.palette[color].main,
              '&:hover': {
                color: props.theme.palette.black.main,
                backgroundColor: props.theme.palette.white.main,
              }
            }
          }
        },
      ]
    }
  },
  palette
})

export default theme