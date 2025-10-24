import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import styles from './ApplyCoupon.module.css'

const ApplyCoupon = (props: { data: any }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Box
        className={`flex px-3 py-1 mt-4 ${styles.ffCouponItems}`}
        onClick={handleOpen}
        sx={{
          width: '100%',
          maxWidth: '800px',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '8px',
          border: '1px solid var(--Brand-2-Variation-300, #828298)',
        }}
      >
        <Box className="flex items-center">
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
        <Box className="flex items-center ff_coupon_arrow">
          <img 
            src="/icons/sidearrow.svg" 
            alt="Apply coupon form arrow" 
            width={25}
            height={25}
          />
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '100%', md: '636px' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            maxHeight: '80vh',
            borderRadius: '24px',
          }}
        >
          <Box
            className={`flex p-2 items-center ${styles.couponCodes}`}
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 2,
              borderBottom: '1px solid #ddd',
            }}
          >
            <Box onClick={handleClose}>
              <img
                src="/icons/close-1.svg"
                alt="close"
                width={24}
                height={24}
              />
            </Box>
            <Typography className={`p-2 ${styles.couponSelect}`} component="h2">
              Select coupon code
            </Typography>
          </Box>

          <Box
            className="p-2"
            sx={{
              overFlowY: 'auto',
            }}
          >
            <Box className="flex items-center">
              <TextField
                fullWidth
                placeholder="Enter coupon code"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          sx={{ textTransform: 'none', color: '#696969', fontWeight: 600 }}
                        >
                          Apply
                        </Button>
                      </InputAdornment>
                    ),
                  },
                }}
                size="small"
              />
            </Box>
            <Box className={`flex flex-col mt-5 mb-5 items-center justify-center ${styles.couponInfo}`}>
              <img
                src="/icons/no-coupons-state.svg" 
                alt="No coupons available illustration" 
                width={157}
                height={157}
              />
              <Typography className={`mt-2 ${styles.couponTxt}`}>
                No coupon codes to select
              </Typography>
              <Typography className={`mt-2 ${styles.couponSubTxt}`}>
                If you have a coupon code, please type it above and tap apply
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default ApplyCoupon
