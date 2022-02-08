import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Content from './Content'
import './videoSection.css'

const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    height: '100vh',
    paddingBottom: '50px'
  }
})

const VideoSection = () => {
  const { wrapper } = useStyles()
  return <Box className={wrapper}>
    <Content />
    <video
      autoPlay
      loop
      muted
      id='video'
    >
      <source
        src="https://videos.ctfassets.net/5j7k2jx5znk1/7mS4EpY28RJ2zMSpxMtkcY/a626b96d7e9c2322f90ca36d98cfa692/Move_Homepage_Hero_220107_16x9_8mb.mp4"
        type="video/mp4"
      />
    </video>
  </Box>
}
export default VideoSection