import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setCouponState, setSelectedPackageId, resetCouponState } from '../../redux/slices/packageSlice'
import styles from './ApplyCoupon.module.css'

const ApplyCoupon = (props: { data: any }) => {
  const dispatch = useDispatch()
  const selectedPackageId = useSelector((state: RootState) => state.package.selectedPackageId)
  const couponState = useSelector((state: RootState) => state.package.coupon)
  
  // Initialize local state from Redux if coupon is already applied
  const [couponCode, setCouponCode] = useState(
    couponState.couponApplied && couponState.couponValid && couponState.couponCode 
      ? couponState.couponCode 
      : ''
  )
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  // Sync local couponCode state with Redux state when coupon is applied
  useEffect(() => {
    if (couponState.couponApplied && couponState.couponValid && couponState.couponCode) {
      setCouponCode(couponState.couponCode)
    } else if (!couponState.couponApplied) {
      // Clear local state if coupon is reset
      setCouponCode('')
    }
  }, [couponState.couponApplied, couponState.couponValid, couponState.couponCode])
  
  const handleResetMessages = () => {
    setErrorMessage('')
  }
  
  const handleResetCoupon = () => {
    dispatch(resetCouponState())
    setCouponCode('')
    setErrorMessage('')
  }
  
  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      setErrorMessage('Please enter a coupon code')
      return
    }
    
    setLoading(true)
    setErrorMessage('')
    
    try {
      const response = await fetch(
        'https://bw-purchase-service-prod-262620024912.asia-south1.run.app/api/v1/purchase/apply_coupon_code',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            coupon_code: couponCode.trim(),
          }).toString(),
        }
      )
      
      const data = await response.json()

      if (data.status && data.data) {
        if (data.data.coupon_valid) {
          // Valid coupon - update Redux state
          dispatch(setCouponState({
            couponCode: data.data.coupon_code,
            couponApplied: true,
            couponValid: true,
            congratsMessage: data.data.congrats_message || '🎉 Congratulations',
            congratsSubMessage: data.data.congrats_sub_message || 'Your coupon code has been successfully applied.',
            couponPackageId: data.data.package_id || '',
          }))
          
          // If package_id is provided and different from selected, update selected package
          if (data.data.package_id && data.data.package_id !== selectedPackageId) {
            dispatch(setSelectedPackageId(data.data.package_id))
          }
          
          setErrorMessage('')
        } else {
          // Invalid coupon
          dispatch(setCouponState({
            couponCode: data.data.coupon_code || couponCode,
            couponApplied: false,
            couponValid: false,
            congratsMessage: '',
            congratsSubMessage: '',
            couponPackageId: '',
          }))
          setErrorMessage(data.data.message || 'Invalid or expired coupon code.')
        }
      } else {
        setErrorMessage('Failed to apply coupon. Please try again.')
      }
    } catch (error) {
      console.error('Error applying coupon:', error)
      setErrorMessage('An error occurred while applying the coupon. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '800px',
        p: 0,
        m: 0,
        border: 'none',
        background: 'transparent',
        mt: 2,
      }}
    >
      {/* Header with icon and title */}
      <Box className="flex items-center" sx={{ mb: 1 }}>
        <Typography
          sx={{
            backgroundColor: '#fff',
            borderRadius: '100%',
          }}
          className={styles.ffCouponIcon}
        >
          <img
            className="ff_coupon_img"
            src="/icons/coupon.svg"
            alt="coupon"
            width={23}
            height={20}
          />
        </Typography>
        <Typography className={`px-2 ${styles.ffCouponTxt}`}>
          Apply Coupon Code
        </Typography>
      </Box>

            {/* Success Message */}
            {couponState.couponApplied && couponState.couponValid && (
              <Box
                sx={{
                  mb: 2,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: '#E8F5E9',
                  border: '1px solid #4CAF50',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#2E7D32',
                    mb: 1,
                  }}
                >
                  {couponState.congratsMessage}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#2E7D32',
                  }}
                >
                  {couponState.congratsSubMessage}
                </Typography>
              </Box>
            )}
            
          <Box className="flex items-center">
              <TextField
                fullWidth
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => {
                  setCouponCode(e.target.value)
                handleResetMessages()
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !loading) {
                    handleApplyCoupon()
                  }
                }}
                disabled={couponState.couponApplied && couponState.couponValid}
                error={!!errorMessage}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                        disableRipple
                          onClick={couponState.couponApplied && couponState.couponValid ? handleResetCoupon : handleApplyCoupon}
                          disabled={loading}
                          sx={{
                            textTransform: 'none',
                          color: '#696969',
                            fontWeight: 600,
                            minWidth: '60px',
                          backgroundColor: 'transparent',
                          '&:hover': {
                            backgroundColor: 'transparent',
                          },
                          }}
                        >
                          {loading ? (
                            <CircularProgress size={20} sx={{ color: '#696969' }} />
                          ) : couponState.couponApplied && couponState.couponValid ? (
                            'Reset'
                          ) : (
                            'Apply'
                          )}
                        </Button>
                      </InputAdornment>
                    ),
                  },
                }}
                size="small"
              />
            </Box>
            
            {/* Error Message */}
            {errorMessage && (
              <Typography
                sx={{
                  color: '#d32f2f',
                  fontSize: '12px',
                  mt: 1,
                  ml: 1,
                }}
              >
                {errorMessage}
              </Typography>
            )}
    </Box>
  )
}

export default ApplyCoupon
