import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

interface PaymentFailedProps {
  handlePage: (page: string, activeStepper: number) => boolean
  handleCheckoutModal: (open: boolean) => void
  onRetryPayment: () => void
}

function PaymentFailed({
  handlePage,
  handleCheckoutModal,
  onRetryPayment,
}: PaymentFailedProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#3E3E3E',
      }}
    >
      <img
        src="/icons/Exclamation.svg"
        alt="chevron Icon"
        width={isMobile ? 30 : 60}
        height={isMobile ? 30 : 60}
      />
      <Typography
        component="h3"
        sx={{
          color: 'black',
          fontSize: isMobile ? 15 : 17,
          fontWeight: '600',
          mt: 2,
        }}
      >
        Payment Failed
      </Typography>
      <Typography
        sx={{
          color: 'black',
          width: isMobile ? '90%' : '80%',
          textAlign: 'center',
          my: 1,
          fontSize: isMobile ? 12 : 14,
        }}
      >
        Apologies, but your payment couldn't be processed due to the following
        error
      </Typography>
      <Typography
        sx={{
          color: 'black',
          width: isMobile ? '90%' : '80%',
          textAlign: 'center',
          my: 2,
          fontSize: isMobile ? 12 : 14,
        }}
      >
        You may have cancelled the payment or there was a delay in response from
        the UPI app. Please try an alternative payment method.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={(e) => {
          // handleCheckoutModal(false)
          // onRetryPayment()
          handlePage('Payment', 2)
        }}
        sx={{
          width: '80%',
          height: '45px',
          textTransform: 'none',
          background: '#1d1d1e',
          display: 'flex',
          alignItems: 'center',
          fontSize: 12,
          borderRadius: 2,
          fontWeight: '600',
        }}
      >
        Retry Payment
      </Button>
    </Box>
  )
}

export default PaymentFailed
