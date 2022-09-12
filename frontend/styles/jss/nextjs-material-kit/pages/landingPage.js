import { container, title } from '/styles/jss/nextjs-material-kit.js'

const landingPageStyle = {
  container: {
    zIndex: '12',
    color: '#FFFFFF',
    ...container,
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginInline: '84px',
    gap: '12px',
    ['@media (min-height:800px)']: { marginInline: '24px' },
  },
  grayBall: {
    backgroundColor: 'gray',
    borderRadius: '50%',
    height: '32px',
    width: '32px',
  },
  avatarBall: {
    backgroundColor: 'gray',
    borderRadius: '50%',
  },
}

export default landingPageStyle
