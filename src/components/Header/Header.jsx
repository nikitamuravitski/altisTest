import { AppBar, Toolbar, Button, Box } from '@mui/material'
import BuyButton from '../components/BlackButton'
import { makeStyles } from '@mui/styles'


const pages = ['Tempo Studio', 'Tempo Move', 'How It Works', 'Workouts', 'Locations', 'Reviews']
const useStyles = makeStyles(theme => ({
  container: {

    padding: '6px 20px',
    margin: 0,
    backgroundColor: `${theme.palette.white.main} !important`,
  },
  header: {
    zIndex: 9999,
    minHeight: 0,
    justifyContent: 'space-between',
    backgroundColor: theme.palette.white.main,
    margin: 0,
    padding: 0
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '20px'
  },
  icon: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '16px'
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '24px'
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  }
}))

const Header = () => {
  const { header, container, right, icon, left, logo } = useStyles()
  return <header>
    <AppBar className={container} elevation='none'>
      <Toolbar className={header}>
        <Box className={left}>
          <Box className={icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="16"
              viewBox="0 0 19 16"
            >
              <g
                fill="black"
                fillRule="evenodd"
              >
                <g
                  fill="#000"
                >
                  <path
                    d="M0 0H19V2H0zM0 7H19V9H0zM0 14H19V16H0z"
                    transform="translate(-60.000000, -28.000000) translate(60.000000, 16.576577) translate(0.000000, 11.423423)"
                  >
                  </path>
                </g>
              </g>
            </svg>
          </Box>
          <Box className={logo}>
            <svg
              width="111px"
              height="25px"
              viewBox="0 0 111 25"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <g
                transform="translate(-81.000000, -649.000000)"
                fill="black"
              >
                <path
                  d="M92.978601,673.500004 L87.6945962,673.500004 C87.4286513,673.494951 87.1832491,673.357217 87.042121,673.133797 L81.105641,663.439143 C80.9315315,663.140367 80.975879,662.763787 81.2147349,662.512764 L81.9319356,661.801557 C82.0418214,661.692952 82.1901551,661.631151 82.3453438,661.629316 L88.4770444,661.629316 C88.717042,661.629855 88.9115438,661.82236 88.9123758,662.060178 L88.9123758,664.236212 C88.9123758,664.473108 88.6947101,664.667074 88.4556432,664.667074 L86.0634083,664.667074 C85.8264762,664.663493 85.6271659,664.842239 85.6071977,665.076212 C85.605279,665.159779 85.6279504,665.242093 85.6724452,665.313108 L88.6294626,670.160694 C88.7247385,670.320973 88.8984724,670.419348 89.0861952,670.419314 L89.8472422,670.419314 C89.9692642,670.422267 90.087175,670.375532 90.1734833,670.290007 C90.2597915,670.204483 90.3069541,670.087642 90.3039749,669.966728 L90.3039749,669.966728 L90.3039749,649.930869 C90.3047199,649.693217 90.498955,649.500746 90.7387843,649.500004 L96.3271036,649.500004 C96.5948684,649.499153 96.8396593,649.649755 96.9576556,649.887938 L102.916059,662.103109 C103.04804,662.367139 103.022976,662.68167 102.850811,662.921902 L101.763527,664.537764 C101.658275,664.684563 101.48851,664.772617 101.306794,664.77466 L95.239819,664.77466 C94.9999896,664.773922 94.8057546,664.58145 94.8050095,664.343798 L94.8050095,662.14604 C94.8057546,661.908388 94.9999896,661.715916 95.239819,661.715178 L98.5888435,661.715178 C98.8258107,661.7186 99.0251765,661.540009 99.0455761,661.30604 C99.0437741,661.232327 99.0289336,661.159498 99.0017297,661.090868 L95.0007521,652.882248 C94.8990231,652.688454 94.6991423,652.564663 94.4787719,652.558972 L94.0872868,652.558972 C93.704179,652.561761 93.3943014,652.868825 93.3914873,653.248455 L93.3914873,653.248455 L93.3914873,673.069142 C93.4134105,673.306038 93.2395911,673.478279 92.978601,673.500004 L92.978601,673.500004 L92.978601,673.500004 Z M112.345877,656.580653 L108.475523,656.580653 C108.213858,656.578442 108.00227,656.36307 108,656.096725 L108,653.984031 C107.997499,653.854893 108.046753,653.730261 108.136482,653.638927 C108.226211,653.547593 108.348653,653.497458 108.475523,653.500004 L119.524484,653.500004 C119.786148,653.502314 119.997736,653.717686 120,653.984031 L120,656.096725 C120.002419,656.225837 119.953136,656.350416 119.863427,656.44173 C119.773717,656.533044 119.651327,656.583208 119.524484,656.580653 L115.654129,656.580653 L115.654129,671.016076 C115.644137,671.279217 115.436714,671.49012 115.178185,671.500004 L112.821821,671.500004 C112.563293,671.49012 112.35587,671.279217 112.345877,671.016076 L112.345877,656.580653 L112.345877,656.580653 Z M123,653.984037 C122.997575,653.854814 123.04584,653.730117 123.133729,653.638774 C123.221618,653.547431 123.341521,653.497351 123.465719,653.500004 L133.534287,653.500004 C133.790455,653.502093 133.997729,653.717514 134,653.984037 L134,656.096718 C134.002344,656.225914 133.954051,656.350559 133.866182,656.441882 C133.778312,656.533205 133.658459,656.583314 133.534287,656.580643 L126.215293,656.580643 L126.215293,660.805477 L132.328842,660.805477 C132.581662,660.815404 132.784418,661.026359 132.793959,661.289402 L132.793959,663.424272 C132.791834,663.690615 132.584833,663.905986 132.328842,663.908197 L126.215293,663.908197 L126.215293,668.419371 L133.534287,668.419371 C133.790455,668.421352 133.997729,668.636772 134,668.903296 L134,671.015977 C134.002344,671.145173 133.954051,671.269818 133.866182,671.361141 C133.778312,671.452464 133.658459,671.502573 133.534287,671.500004 L123.465719,671.500004 C123.209552,671.497921 123.002277,671.2825 123,671.015977 L123,653.984037 L123,653.984037 Z M140.044935,653.885034 C140.068783,653.657915 140.270306,653.488898 140.503336,653.500574 L140.918254,653.500574 C141.100777,653.501139 141.268305,653.599532 141.354651,653.756881 L146.963381,665.542911 L147.05087,665.542911 L152.6596,653.756881 C152.747089,653.60771 152.856058,653.500574 153.095998,653.500574 L153.510916,653.500574 C153.794338,653.500574 153.947313,653.671274 153.968793,653.885034 L156.980617,670.667005 C157.068106,671.008919 156.849645,671.243696 156.522216,671.243696 L154.209257,671.243696 C153.97937,671.234835 153.783331,671.077948 153.728853,670.859236 L152.223203,661.400474 L152.135714,661.400474 L147.661722,671.222167 C147.618239,671.37185 147.465265,671.500004 147.225325,671.500004 L146.766924,671.500004 C146.526984,671.500004 146.418015,671.37185 146.330526,671.222167 L141.813052,661.400474 L141.725563,661.400474 L140.241392,670.859236 C140.219913,671.029936 140.001452,671.243696 139.782992,671.243696 L137.491512,671.243696 C137.164083,671.243696 136.946146,671.008919 137.011632,670.667005 L140.044935,653.885034 Z M160,653.983435 C159.997517,653.854456 160.046418,653.729977 160.135504,653.638756 C160.224591,653.547534 160.346156,653.497461 160.472116,653.500004 L166.375448,653.500004 C169.466762,653.500004 172,656.071367 172,659.192447 C172,662.378956 169.466762,664.972382 166.397091,664.972382 L163.263007,664.972382 L163.263007,671.016144 C163.253128,671.279068 163.047243,671.489887 162.790473,671.500004 L160.472116,671.500004 C160.21222,671.497565 160.002195,671.282272 160,671.016144 L160,653.983435 Z M166.174803,661.500004 C166.928111,661.500164 167.650278,661.226031 168.180785,660.738538 C168.711292,660.251045 169.006179,659.590587 168.999902,658.903968 C168.999902,657.542607 167.71597,656.500004 166.174803,656.500004 L163,656.500004 L163,661.500004 L166.174803,661.500004 L166.174803,661.500004 Z M182.989468,653.500004 C187.997717,653.500004 192,657.518708 192,662.521303 C192,667.523898 187.997717,671.500004 182.989468,671.500004 C177.981219,671.500004 174,667.523385 174,662.521303 C174,657.519222 177.981219,653.500004 182.989468,653.500004 L182.989468,653.500004 Z M182.989004,668.500004 C186.273971,668.500004 189,665.801088 189,662.522227 C189,659.243366 186.273971,656.500004 182.989004,656.500004 C179.704036,656.500004 177,659.243366 177,662.522227 C177,665.801088 179.704036,668.500004 182.989004,668.500004 Z"
                >
                </path>
              </g>
            </svg>
          </Box>
        </Box>
        <Box>
          {pages.map(page => {
            return <Button
              color='black'
              variant='plain'
              disableRipple={true}
              disableElevation={true}
              key={page}
              children={page}
            />
          })}
        </Box>
        <Box className={right}>
          <BuyButton />
          <Box className={icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
            >
              <g
                fill="black"
                fillRule="evenodd"
              >
                <g
                  fill="var(--text-primary)"
                >
                  <path
                    d="M0 0L0 1.651 1.808 1.651 5.977 8.974 4.217 12.544 13.672 12.544 13.672 10.893 6.852 10.893 7.743 9.085 15.046 9.085 19.536 0.929 7.487 0.929 7.487 1.755 7.487 2.58 16.762 2.58 14.091 7.434 6.981 7.434 3.464 1.255 2.749 0z" transform="translate(-1199.000000, -30.000000) translate(1199.000000, 30.000000)"></path><g><path d="M1.628 0C.729 0 0 .74 0 1.65c0 .912.729 1.651 1.628 1.651.899 0 1.627-.739 1.627-1.65C3.255.739 2.527 0 1.628 0M8.545 0c-.898 0-1.627.74-1.627 1.65 0 .912.729 1.651 1.627 1.651.9 0 1.628-.739 1.628-1.65C10.173.739 9.444 0 8.545 0" transform="translate(-1199.000000, -30.000000) translate(1199.000000, 30.000000) translate(3.662140, 13.616271)"
                    >
                    </path>
                  </g>
                </g>
              </g>
            </svg>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  </header>
}

export default Header