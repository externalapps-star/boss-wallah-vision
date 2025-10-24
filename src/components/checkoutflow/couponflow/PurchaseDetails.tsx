import React, { useEffect } from 'react'
import { Box, Typography, Button, IconButton } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import styles from './PurchaseDetails.module.css'

interface PurchaseDetailsProps {
  toggleDrawer: any
  handlePage: (page: string, activeStepper: number) => boolean
  discount?: string
}

interface PriceStrings {
  originalPriceString: string
  actualPriceString: string
}

export default function PurchaseDetails({
  toggleDrawer,
  handlePage,
  discount,
}: PurchaseDetailsProps) {
  const packageState = useSelector((state: RootState) => state.package)

  function calculateDiscount({
    originalPriceString,
    actualPriceString,
  }: PriceStrings): string {
    const originalPriceClean = originalPriceString.replace(/[^0-9.-]+/g, '')
    const actualPriceClean = actualPriceString.replace(/[^0-9.-]+/g, '')
    const originalPrice = parseInt(originalPriceClean, 10)
    const actualPrice = parseInt(actualPriceClean, 10)

    if (isNaN(originalPrice) || isNaN(actualPrice)) {
      return 'Invalid price input'
    }
    const discountAmount = originalPrice - actualPrice
    return `₹ ${discountAmount}`
  }

  return (
    <Box
      sx={{
        p: {
          xs: 0,
          md: 1,
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Box>
        <Typography
          component={'span'}
          sx={{
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: '"Fira Sans", sans-serif',
              fontWeight: 400,
              fontSize: {
                xs: '12px',
                md: '14px',
              },
              lineHeight: '22.21px',
              letterSpacing: '0%',
              color: '#1d1d1e',
            }}
          >
            Actual price
          </Typography>
          <Typography
            component={'span'}
            sx={{
              fontFamily: '"Fira Sans", sans-serif',
              fontWeight: 400,
              fontSize: {
                xs: '12px',
                md: '14px',
              },
              lineHeight: '22.21px',
              letterSpacing: '0%',
              color: '#1d1d1e',
            }}
          >
            {packageState.originalPrice}
          </Typography>
        </Typography>
        {discount != null && (
          <Typography
            component={'span'}
            sx={{
              color: '#1d1d1e',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '14px',
            }}
          >
            <Typography component={'span'}>Discount</Typography>
            <Typography component={'span'}>
              -{' '}
              {calculateDiscount({
                originalPriceString: packageState.originalPrice,
                actualPriceString: packageState.packagePrice,
              })}
            </Typography>
          </Typography>
        )}
        <Typography
          component={'span'}
          sx={{
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            mt: 1,
            mb: {
              xs: 2,
              md: 3,
            },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: '15px',
                md: '18.17px',
              },
              lineHeight: '26.25px',
              letterSpacing: '0%',
              color: '#1d1d1e',
            }}
          >
            Price to be paid
          </Typography>
          <Typography
            component={'span'}
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: '15px',
                md: '18.17px',
              },
              lineHeight: '26.25px',
              letterSpacing: '0%',
              color: '#1d1d1e',
            }}
          >
            ₹ {packageState.packagePrice}
          </Typography>
        </Typography>
        <div
          // variant="outlined"
          onClick={() => {
            handlePage('Apply Coupon', 0)
          }}
          className={styles.couponButton}
        >
          <Box
            component={'span'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#3E3E3E',
              gap: 1,
              fontWeight: 600,
              fontSize: '12px',
            }}
          >
            <Box
              sx={{ p: 0.5, background: '#fff', borderRadius: 50 }}
              component={'span'}
            >
              <img
                src="/icons/coupon.svg"
                alt="chevron Icon"
                width={30}
                height={30}
              />
            </Box>
            Apply Coupon Code
          </Box>
          {/* <IconButton onClick={toggleDrawer(false)} className="chevron right"> */}
          <IconButton className="chevron right">
            <ChevronRightIcon sx={{ color: '#F15F22' }} />
          </IconButton>
        </div>
      </Box>
    </Box>
  )
}

