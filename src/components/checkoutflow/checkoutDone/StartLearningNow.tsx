import React, { useEffect, useRef } from 'react'
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import MagicLink from '../MagicLink'

export default function StartLearningNow() {
  const theme = useTheme()
  const packageState = useSelector((state: RootState) => state.package)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const {startLearningDetails} = useSelector((state: RootState) => state.payment)

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignContent: 'center',
          my: 2,
          mx: isMobile ? 0.5 : 5,
          background: 'linear-gradient(#A78027 40%, #F1DD80 53%, #B28D33 100%)',
          borderRadius: isMobile ? 3 : 3,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
            width: isMobile ? '100%' : '50%',
            px: 6.5,
            py: 1,
            height: '100%',
          }}
        >
          <img
            src="https://prduplds.ffreedomapp.com/indianmo/financial_freedom_app/uploads/website_images/subscription_strip.png"
            alt="Background"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <Typography
            sx={{
              position: 'relative',
              textAlign: 'center',
              fontWeight: '600',
              color: '#fff',
              paddingTop: '0px',
              marginTop: '10px',
            }}
            component="h3"
          >
            {startLearningDetails.title}
          </Typography>
          <Typography
            sx={{
              position: 'relative',
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '600',
              color: '#fff',
              paddingTop: '20px',
            }}
            zIndex={1}
          >
            {startLearningDetails.sub_title}
          </Typography>
        </Box>
        <Typography
          sx={{
            backgroundColor: '#fff',
            color: 'black',
            py: isMobile ? 2 : 2,
            pl: isMobile ? 0 : 2,
            px: 2,
            borderTopRightRadius: isMobile ? 0 : 8,
            borderBottomRightRadius: isMobile ? 0 : 8,
            fontSize: {
              xs: '13px',
              md: '15px',
            },
          }}
        >
          🎉 <b>Congratulations!</b> You’ve unlocked <b>Prime Access! </b>
          Enjoy unlimited access to all courses and the exclusive features of
          the app!
        </Typography>
      </Box>
      <Typography
        sx={{
          mx: isMobile ? 2 : 5,
          textAlign: 'center',
          my: 4,
          color: '#1d1d1e',
          fontWeight: '600',
        }}
        component="h3"
      >
        To start learning...
      </Typography>
      <Box
        sx={{
          mx: isMobile ? 2 : 5,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.32)',
              p: isMobile ? 1 : 4,
              borderRadius: 50,
            }}
          >
            <IconButton className="back-icon">
              <SmsOutlinedIcon
                sx={{
                  color: '#1d1d1e',
                  fontSize: isMobile ? 20 : 60,
                  m: 0,
                }}
              />
            </IconButton>
          </Box>
          <Typography
            sx={{
              textAlign: 'center',
              width: isMobile ? '90%' : '70%',
              my: 2,
              fontSize: {
                xs: '13px',
                md: '14px',
              },
              color: '#1d1d1e',
            }}
          >
            Your course awaits! Open the link in your SMS to download the app &
            start learning.
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            border: 0.1,
            m: 0,
            p: 0,
            borderColor: '#D5D5DD',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.32)',
                p: 0.5,
                borderRadius: 4,
                my: isMobile ? 2 : 0,
              }}
            >
              {/* QR Code */}
              <IconButton
                className="back-icon"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  p: 0.5,
                  m: 2,
                }}  
              >
                <MagicLink height={150} width={150}/>
              </IconButton>
            </Box>
            <Typography
              sx={{
                textAlign: 'center',
                width: '70%',
                my: 2,
                fontSize: {
                  xs: '13px',
                  md: '14px',
                },
                color: '#1d1d1e',
              }}
            >
              Alternatively, scan the QR Code to download the app & access your
              courses.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
