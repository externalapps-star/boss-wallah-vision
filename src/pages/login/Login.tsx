import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import CallRoundedIcon from '@mui/icons-material/CallRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import LoginEmailAndMobile from '@/components/loginForm/LoginEmailAndMobile'
import { useTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setLoginType } from '@/redux/slices/loginDetailsSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button as ButtonUI } from '@/components/ui/button'
import styles from './login.module.css'
import styles2 from '@/components/checkoutflow/addDetails/EmailAndMobileDetails.module.css'


type Props = {}

function Login({}: Props) {
  const [login, setLogin] = useState({
    showLogin: false,
    loginFrom: '',
  })
  const dispatch = useDispatch()
  const memId = Cookies.get('mem_id')
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  useEffect(() => {
    document.body.id = 'login'
    
    // Handle redirect parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    const redirectToExpertSubscriptionPage = urlParams.get('rtesp')
    const expertId = urlParams.get('eid')
    
    if (redirectToExpertSubscriptionPage === 'true') {
      localStorage.setItem('rtesp', 'true')
    }
    if (expertId) {
      localStorage.setItem('eid', expertId)
    }
    
    return () => {
      document.body.id = ''
    }
  }, [])

  if (memId) {
    // Show authentication animation briefly before redirect
    setTimeout(() => {
      window.location.href = '/'
    }, 1500) // 1.5 second delay to show the animation
    
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '120px 0 80px 0',
        }}
      >
        <img
          src="/images/auth.gif"
          alt="auth"
          height={300}
          width={300}
          className={styles.circularImage}
        />
        <Typography
          variant="h2"
          sx={{
            color: '1d1d1e',
            fontSize: '24px',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          Authenticating....
        </Typography>
      </Box>
    )
  } else {
    return (
      <Box
        id="login"
        sx={{
          height: {
            xs: '100%',
            md: '100vh',
          },
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          mt: isMobile ? '120px' : 0,
          mb: isMobile ? '80px' : 0,
          p: isMobile ? 0 : isTablet ? 4 : 0,
          gap: isMobile ? 2 : isTablet ? 4 : 0,
        }}
      >
        <Box
          sx={{
            width: isMobile ? '100%' : '50%',
            display: isMobile ? 'none' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: '#FEEFE9',
          }}
        >
          <img
            src="/icons/loginBannerNew.svg"
            alt="login banner"
            width={654.75}
            height={331.71}
            className={styles.loginImage}
          />
        </Box>

        <Box
          sx={{
            width: isMobile || isTablet ? '100%' : '50%',
            display: 'flex',
            flexDirection: 'column',
            marginTop: {
              xs: '70px',
              md: '100px',
            },
            alignItems: isMobile ? 'center' : 'center',
            px: isMobile ? 2 : isTablet ? 4 : 8,
            marginY: {
              xs:'40px',
              md:'0px'
            },
            position: 'relative'
          }}
        >
          {/* Home Button - Positioned at top left */}
          <Box
            sx={{
              position: isMobile ? 'fixed' : 'absolute',
              top: isMobile ? '20px' : '20px',
              left: isMobile ? '16px' : '32px',
              zIndex: 10
            }}
          >
            <ButtonUI
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </ButtonUI>
          </Box>
          {!login.showLogin && (
            <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
              <Typography
                component="h1"
                sx={{
                  color: '#1d1d1e',
                  mt: isMobile ? 1 : 20,
                  mb: isMobile ? 2 : 4,
                  fontSize: isMobile ? 20 : 26,
                  fontWeight: '700',
                }}
              >
                Login
              </Typography>
              <Typography
                sx={{
                  color: '#2E2E54',
                  width: isMobile ? '100%' : '100%',
                  fontSize: isMobile ? 14 : 16,
                  mx: isMobile ? 'auto' : 0,
                }}
              >
                Unlock your courses and continue building your future.
              </Typography>
              <Box
                sx={{
                  gap: 2,
                  textAlign: 'center',
                  mt: isMobile ? 2 : 4,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth={isMobile}
                  size="large"
                  onClick={() => {
                    setLogin({
                      ...login,
                      showLogin: true,
                      loginFrom: 'Mobile',
                    })
                    dispatch(setLoginType(1))
                  }}
                  sx={{
                    textTransform: 'none',
                    background: '#1d1d1e',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: isMobile ? 12 : 14,
                    borderRadius: 2,
                    my: 2,
                    width: isMobile ? '100%' : '100%',
                    fontWeight: 600,
                  }}
                >
                  <div className={`mobile-icon ${styles2.btnSub}`}>
                    <CallRoundedIcon
                      sx={{
                        color: 'white',
                        fontSize: isMobile ? 16 : 20,
                        mr: 2,
                      }}
                    />
                  </div>
                  Login via Mobile Number
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth={isMobile}
                  size="large"
                  onClick={() => {
                    setLogin({
                      ...login,
                      showLogin: true,
                      loginFrom: 'Email',
                    })
                    dispatch(setLoginType(2))
                  }}
                  sx={{
                    textTransform: 'none',
                    background: '#1d1d1e',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: isMobile ? 12 : 14,
                    borderRadius: 2,
                    my: 2,
                    width: isMobile ? '100%' : '100%',
                    fontWeight: 600,
                  }}
                >
                  <div className={`email-icon ${styles2.btnSub}`}>
                    <EmailRoundedIcon
                      sx={{
                        color: 'white',
                        fontSize: isMobile ? 16 : 20,
                        mr: 2,
                      }}
                    />
                  </div>
                  Login via Email ID
                </Button>
              </Box>
            </Box>
          )}

          {login.showLogin && (
            <LoginEmailAndMobile
              handlePage={() => {
                return true
              }}
              loginTypeFE={login.loginFrom as never}
            />
          )}
        </Box>
      </Box>
    )
  }
}

export default Login
