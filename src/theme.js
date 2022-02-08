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
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'main' },
          style: {
            textTransform: 'none',
            fontSize: '60px',
            fontFamily: 'Helvetica Neue',
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'plain' },
          style: {
            textTransform: 'none',
            fontSize: '16px',
            fontFamily: 'Helvetica Neue',
            fontWeight: 500,
            borderRadius: 0,
            padding: 0,
            margin: '0 17px',
            color: palette.black.main,
            '&:hover': {
              boxShadow: 'inset 0 -1px 0 0 black',
              backgroundColor: palette.white.main
            }
          }
        },
        {
          props: { variant: 'round' },
          style: {
            textTransform: 'none',
            fontFamily: 'Helvetica Neue',
            // maxWidth: 200,
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
            console.log(props.theme.palette[color].main)
            console.log(props)
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
            console.log(props.theme.palette[color].main)
            console.log(props)
            return {
              color: props.theme.palette[color].contrastText,
              backgroundColor: props.theme.palette[color].main,
              '&:hover': {
                backgroundColor: props.theme.palette[color].main,
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