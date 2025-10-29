import React, { useEffect, useState } from 'react'
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button as MuiButton,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider,
} from '@mui/material'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import { useForm, Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import styles from './ApplyCoupon.module.css'

interface ApplyCouponProps {
  handlePage: (page: string, activeStepper: number) => boolean
  applyCouponCallBack: (percentage: string) => void
}

interface CouponData {
  coupon_title: string
  title: string
  close_img: string
  input_placeholder: string
  button_title: string
  coupon_error_message: string
  no_coupon_img: string
  no_coupon_txt: string
  no_coupon_desc: string
}

interface CouponCardProps {
  couponData: {
    code: string
    offer: string
    valid: string
  }
  onApply: (code: string) => void
}

interface FormData {
  coupon: string
}

const CouponCard = ({ couponData, onApply }: CouponCardProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className="mb-4">
      <MuiCard className={styles.couponContainer}>
        <div className={styles.offerStrip}>
          <span>{couponData.offer}% OFF</span>
        </div>
        <MuiCardContent className={styles.couponContent}>
          <div className={styles.couponDetails}>
            <p className={styles.couponCode}>{couponData.code}</p>
            <p className={styles.couponDescription}>
              Flat {couponData.offer}% off on this purchase
            </p>
            <Divider sx={{ borderColor: '#D9D9D9' }} />
            <div className={styles.couponFooter}>
              <p className={styles.couponFooterText}>
                Valid until {couponData.valid}
              </p>
              <MuiButton
                variant="text"
                sx={{
                  textTransform: 'none',
                  color: '#128586',
                  fontSize: 12,
                }}
                onClick={() => onApply(couponData.code)}
              >
                Apply
              </MuiButton>
            </div>
          </div>
        </MuiCardContent>
      </MuiCard>
    </div>
  )
}

const ApplyCoupon = ({ handlePage, applyCouponCallBack }: ApplyCouponProps) => {
  const [apiData, setApiData] = useState<CouponData | null>(null)
  // const [applyCouponResp, setApplyCouponResp] = useState({})
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const selectedLanguage = useSelector(
    (state: RootState) => state.language.selectedLanguage,
  )

  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      coupon: '',
    },
  })

  const coupons = [
    {
      code: 'PPC50',
      offer: '54',
      valid: 'June 5th, 2025',
    },
    {
      code: 'PPC60',
      offer: '60',
      valid: 'August 13th, 2025',
    },
  ]

  useEffect(() => {
    const getApplyCouponDetails = async () => {
      try {
        const response = await fetch(
          `https://website-api-prod-262620024912.asia-south1.run.app/coupon/apply_coupon`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              coupon_id: '',
              lang_id: selectedLanguage,
            } as any).toString(),
          },
        )

        const data = await response.json()
        if (data.status) {
          setApiData(data.data[0])
        }
      } catch (error) {
        console.error('Error fetching coupon data:', error)
      }
    }

    getApplyCouponDetails()
  }, [selectedLanguage])

  const applyCouponFromCard = (code: string) => {
    setValue('coupon', code)
  }

  function getCouponOffer(code: string) {
    const coupon = coupons.find((coupon) => coupon.code === code)
    return coupon ? coupon.offer : ''
  }

  const onSubmit = (data: FormData) => {
    applyCouponCallBack(getCouponOffer(data.coupon))
    alert(`Coupon ${data.coupon} applied successfully`)
    handlePage('Purchase', 0)
  }

  if (!apiData) return <Box className="p-4">Loading...</Box>

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          m: -2,
          py: isMobile ? 0.3 : 0.5,
          px: 2,
          borderBottom: 2,
          borderBottomColor: '#ABABBB',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <IconButton
          className="back-icon"
          onClick={() => handlePage('Purchase', 0)}
        >
          <ClearRoundedIcon sx={{ color: '#1d1d1e', fontSize: 20, m: 0 }} />
        </IconButton>
        <Typography
          component="h3"
          sx={{
            color: '#1d1d1e',
            textTransform: 'none',
            fontFamily: 'Fira Sans',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: '20px',
            letterSpacing: '0%',
          }}
        >
          {apiData.coupon_title}
        </Typography>
      </Box>

      <Box sx={{ mt: 3, mb: 1 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            {...register('coupon')}
            rules={{ required: 'Coupon is required' }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                hiddenLabel
                fullWidth
                size="small"
                placeholder={apiData.input_placeholder}
                sx={{
                  height: {
                    xs: '40px',
                    md: '48px',
                  },
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    height: {
                      xs: '40px',
                      md: '48px',
                    },
                    fontSize: '14px',
                    borderRadius: 2,
                    '&:hover fieldset': {
                      borderColor: '#BA973B',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#BA973B',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    fontFamily: '"Fira Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: '14.13px',
                    lineHeight: '22.21px',
                    letterSpacing: '0%',
                  },
                  '& input:-webkit-autofill': {
                    backgroundColor: '#fff !important',
                    WebkitBoxShadow: '0 0 0 100px transparent inset !important',
                    WebkitTextFillColor: '#000 !important',
                  },
                }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <MuiButton
                        type="submit"
                        variant="text"
                        size="small"
                        sx={{
                          color: '#F15F22',
                          textTransform: 'none',
                          fontWeight: '600',
                        }}
                      >
                        {apiData.button_title}
                      </MuiButton>
                    ),
                  },
                }}
                error={!!fieldState.error}
              />
            )}
          />
          {errors.coupon && (
            <p className={styles.errorMessage}>
              {apiData.coupon_error_message}
            </p>
          )}
        </form>
      </Box>

      {/* {coupons.length > 0 ? (
        coupons.map((coupon, index) => (
          <CouponCard
            key={index}
            couponData={coupon}
            onApply={applyCouponFromCard}
          />
        ))
      ) : ( */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: isMobile ? 1 : 4,
          color: 'black',
        }}
      >
        <Box
          sx={{
            boxShadow: 2,
            borderRadius: 50,
          }}
        >
          <img
            src={apiData.no_coupon_img}
            alt="No Coupons"
            width={isMobile ? 60 : 150}
            height={isMobile ? 60 : 150}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, mt: 0.5, color: '#1d1d1e' }}
        >
          {apiData.no_coupon_txt}
        </Typography>
        <Typography
          sx={{
            width: isMobile ? '75%' : '100%',
            fontSize: 12,
            textAlign: 'center',
            mt: 0.8,
            color: '#1d1d1e',
          }}
        >
          {apiData.no_coupon_desc}
        </Typography>
      </Box>
      {/* )} */}
    </Box>
  )
}

export default ApplyCoupon
