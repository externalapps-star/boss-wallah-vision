import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import styles from './bannerContent.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function BannerContent() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const packageState = useSelector((state: RootState) => state.package)
  return (
    <Box className={styles.bannerContainer}>
      {/* Crown Icon and Title */}

      {/* <Box className={styles.crownIconContainer}>
        <Image
          src="/icons/crown.svg"
          alt="crown"
          width={isMobile ? 24 : 24}
          height={isMobile ? 24 : 22}
        />
        <Typography variant="h5" component="h2" className={styles.title} color="#1d1d1e">
          PRIME ACCESS
        </Typography>
      </Box> */}
      <img
        src="https://prduplds.ffreedomapp.com/indianmo/financial_freedom_app/uploads/website_images/prime_access.png"
        alt="crown"
        width={isMobile ? 200 : 300}
        height={isMobile ? 40 : 60}
      />

      {/* Banner Background and Text */}
      <Box className={styles.bannerBackground}>
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
        <Typography variant="h5" className={styles.bannerTitle} color="#fff" component="h3">
          {packageState.subscriptionType.charAt(0).toUpperCase() +
            packageState.subscriptionType.slice(1)}
        </Typography>
        <Typography
          variant="subtitle2"
          className={styles.bannerSubtitle}
          zIndex={1}
          pt={2}
          color="#fff"
          component="p"
          fontWeight={600}
        >
          {packageState.subscriptionType.charAt(0).toUpperCase() +
            packageState.subscriptionType.slice(1)}{' '}
          Subscription (Cancel Anytime)
        </Typography>
      </Box>

      {/* Features List */}
      <Box className={styles.featuresList}>
        {/* Feature 1: YouTube Access */}
        {packageState.benifit_details.map((benefit, index) => (
          // <li key={benefit.id}>{benefit.title}</li>
          <Box className={styles.featureItem} key={index}>
            <img
              src={benefit.image}
              width={32}
              height={32}
              alt={benefit.id}
            />
            <Typography
              sx={{
                fontFamily: 'Fira Sans, sans-serif',
                fontWeight: 400,
                fontSize: {
                  xs: '13px',
                  md: '14px',
                },
                lineHeight: '22px',
                letterSpacing: '0%',
                color: '#1d1d1e',
              }}
            >
              {benefit.title}
            </Typography>
          </Box>
        ))}

        {/* Disclaimer */}
        <Typography variant="body2" className={styles.disclaimer}>
          *Only available in mobile app.
        </Typography>
      </Box>
    </Box>
  )
}
