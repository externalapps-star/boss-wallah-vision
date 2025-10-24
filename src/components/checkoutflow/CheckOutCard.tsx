import React from 'react'
import {
  Box,
  CardContent,
  Card,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material'

import ApplyCoupon from './couponflow/PurchaseDetails'
import Cookies from 'js-cookie'

interface CheckOutCardProps {
  children: React.ReactNode
  handlePage: (page: string, activeStepper: number) => boolean
  currentPage: string
}
const CheckOutCard: React.FC<CheckOutCardProps> = ({
  children,
  handlePage,
  currentPage,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const memId = Cookies.get('mem_id') || ''
  return (
    <>
      <Box
        sx={{
          margin: 0,
          flexBasis: '50%',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignContent: isMobile
            ? currentPage !== 'Purchase'
              ? 'flex-start'
              : 'center'
            : 'center',
        }}
      >
        <Card
          sx={{
            flex: 1,
            height: isMobile
              ? currentPage === 'Purchase' ||
                currentPage === 'Apply Coupon' ||
                currentPage === 'Payment Failed'
                ? 'auto'
                : currentPage === 'Email' || currentPage === 'Mobile'
                  ? '85%'
                  : '90%'
              : '88%',
            // p: 1,
            mx: {
              xs: 1,
              md: 2,
            },
            my: 0.8,
            backgroundColor: '#fff',
            color: '#1d1d1e',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '10px',
          }}
        >
          <CardContent sx={{ flex: 1 }}>{children}</CardContent>
          {currentPage === 'Purchase' && (
            <Button
              sx={{
                textAlign: 'center',
                textTransform: 'none',
                background: '#1d1d1e',
                color: '#fff',
                height: '48px',
                borderRadius: '8px',
                margin: 2,
                display: isMobile ? 'none' : 'block',
                fontWeight: '600',
              }}
              onClick={() => handlePage('Initial Details', 1)}
            >
              Continue
            </Button>
          )}
        </Card>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            color: '#1d1d1e',
            fontSize: {
              xs: '12px',
              md: '14px',
            },
            fontWeight: 300,
            margin: {
              xs: '10px',
              md: '0',
            },
          }}
        >
          <img
            src="/icons/razorpay-shield.svg"
            alt="chevron Icon"
            width={isMobile ? 18 : 24}
            height={isMobile ? 18 : 24}
          />
          All payments secured by RazorPay
        </Typography>
      </Box>
      {currentPage === 'Purchase' && (
        <Box
          sx={{
            display: isMobile ? 'block' : 'none',
            mx: 'auto',
            background: '#fff',
            width: '100%',
            position: 'sticky',
            bottom: 0,
          }}
        >
          (!memId ?
          <Button
            sx={{
              textAlign: 'center',
              textTransform: 'none',
              background: '#1d1d1e',
              height: '45px',
              color: '#fff',
              margin: 2,
              width: '92%',
            }}
            onClick={() => handlePage('Initial Details', 1)}
          >
            Continue
          </Button>
          ):('')
        </Box>
      )}
    </>
  )
}

export default CheckOutCard
