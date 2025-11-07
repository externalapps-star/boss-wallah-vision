import React, { useState, useEffect, useRef } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../redux/hooks'
import { RootState } from '../../redux/store'
import { setSelectedPackageId, setPackagePrice, setBenefitDetails, setSubscriptionType, setOriginalPrice, resetCouponState } from '../../redux/slices/packageSlice'
import ApplyCoupon from './ApplyCoupon'
import FrequentQuestions from './FrequentQuestions'
import CheckOutModal from '../checkoutflow/checkoutModal'
import styles from './SubscriptionNewPlans.module.css'

interface BenefitDetail {
  id: string
  image: string
  title: string
}

interface PackageDetails {
  package_id: string
  language_id: string
  stripe_text: string
  price_text: string
  sub_title: string
  package_price: number
  is_selected: boolean
  tag_text?: string
  benifit_details: BenefitDetail[]
  cta_text: string
  subscription_type: string
}

interface SubscriptionPackages {
  packages: any
  faqs: any
}

const SubscriptionNewPlans: React.FC<SubscriptionPackages> = ({ packages, faqs }) => {
  const dispatch = useAppDispatch()
  const [buyNow, setBuyNow] = useState(false)
  const checkoutWasOpenRef = useRef(false)
  
  const selectedPackageId = useSelector((state: RootState) => state.package.selectedPackageId)
  const couponState = useSelector((state: RootState) => state.package.coupon)
  
  // Check if coupon is applied and valid
  const isCouponValid = couponState.couponApplied && couponState.couponValid

  const primeAccessDetail = packages.data

  const handlePlanClick = (packagedetails: PackageDetails) => {
    dispatch(setSelectedPackageId(packagedetails.package_id))
    dispatch(setOriginalPrice(packagedetails.stripe_text))
    dispatch(setPackagePrice(packagedetails.package_price.toString()))
    dispatch(setBenefitDetails(packagedetails.benifit_details))
    dispatch(setSubscriptionType(packagedetails.subscription_type))
  }

  const handleCheckoutModal = (open: boolean) => {
    setBuyNow(open)
  }

  useEffect(() => {
    if (buyNow) {
      // Track that checkout was opened
      checkoutWasOpenRef.current = true
      // Store current scroll position
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${scrollY}px` // Prevent scroll jump
    } else {
      // Ensure instant jump by temporarily disabling smooth scrolling
      const scrollY = Math.abs(parseInt(document.body.style.top || '0'))
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''

      // Temporarily disable smooth scrolling if applied in CSS
      const html = document.documentElement
      const prevScrollBehavior = html.style.scrollBehavior
      html.style.scrollBehavior = 'auto' // Force instant jump
      window.scrollTo(0, scrollY)
      html.style.scrollBehavior = prevScrollBehavior // Restore previous behavior
    }
  }, [buyNow])

  useEffect(() => {
      dispatch(
        setSelectedPackageId(primeAccessDetail[0].package_details[0].package_id),
      )
  }, [])

  useEffect(() => {
    if (primeAccessDetail && primeAccessDetail.length > 0) {
      const defaultPackageId = Number(
        primeAccessDetail[0]?.package_details[0]?.package_id,
      )
      dispatch(setSelectedPackageId(defaultPackageId.toString()))
    }
  }, [primeAccessDetail])

  // Clear coupon state only when component unmounts AND checkout was never opened
  // Preserve state when coming back from checkout flow
  useEffect(() => {
    return () => {
      // Only clear coupon state if checkout was never opened (user navigated away without checkout)
      // If checkout was opened, preserve state for when user comes back
      if (!checkoutWasOpenRef.current) {
        dispatch(resetCouponState())
      }
      // Reset the ref for next mount
      checkoutWasOpenRef.current = false
    }
  }, [dispatch])

  return (
    <>
      {primeAccessDetail &&
        primeAccessDetail.map((primeaccessinfo: any, index: number) => (
          <Box
            key={index}
            className={`flex px-3 flex-col items-center py-5 justify-center ${styles.subsNewPlans}`}
            sx={{
              background: '#fff',
            }}
          >
          <Box className="flex flex-col items-center prime_access_title">
            <img
              src="https://prduplds.ffreedomapp.com/indianmo/financial_freedom_app/uploads/website_images/prime_access.png"
              alt="prime"
              className={styles.primeAccessImage}
              width={300}
              height={60.21}
            />
          </Box>

          {!(
            primeaccessinfo.active_package_details &&
            primeaccessinfo.active_package_details.length > 0
          ) ? (
            <Typography className={`py-4 ${styles.subsNewPlanTxt}`} component="h1">
              {primeaccessinfo.title}
            </Typography>
          ) : (
            <Box className={`flex flex-col items-center justify-center ${styles.postSubInfo}`}>
              <Typography className={`py-4 ${styles.postSubText}`} component="h1">
                {primeaccessinfo.title}
              </Typography>
              <Box className={`mb-4 flex items-center justify-center ${styles.postSubBanner}`}>
                <img
                  className={styles.postSubImg}
                  src="https://prduplds.ffreedomapp.com/indianmo/financial_freedom_app/uploads/website_images/subscription_strip.png"
                  alt="Subscription strip"
                  width={432}
                  height={136}
                />
                {primeaccessinfo.active_package_details.map(
                  (activecardinfo: any, k: number) => (
                    <Box
                      key={k}
                      className={`flex flex-col items-center ${styles.postSubTxt}`}
                    >
                      <Typography
                        className={styles.postTitle}
                        sx={{ color: '#fff' }}
                        component="h3"
                      >
                        {activecardinfo.card_title}
                      </Typography>
                      <Box className={`mt-2 mb-1 ${styles.postSubscriptionLine}`}></Box>
                      <Typography
                        className={styles.postPlanExpire}
                        sx={{ color: '#fff' }}
                      >
                        {activecardinfo.card_sub_title}
                      </Typography>
                    </Box>
                  ),
                )}
              </Box>
              {primeaccessinfo.upgrade_text && (
                <Typography
                  className={`mb-4 ${styles.postSubUpgrade}`}
                  component="h2"
                >
                  {primeaccessinfo.upgrade_text}
                </Typography>
              )}
            </Box>
          )}

          {primeaccessinfo.active_package_details.length > 0 &&
          primeaccessinfo.active_package_details[0].subscription_type ===
            'yearly' ? (
            <Box
              className="flex flex-col"
              sx={{
                gap: '12px',
                bgcolor: '#F15F22',
                borderRadius: '18.545px',
                padding: 2,
              }}
            >
              {primeaccessinfo.package_details &&
                primeaccessinfo.package_details.map((packagedetail: any) =>
                  packagedetail.benifit_details.map((benefit: any) => (
                    <Box
                      key={benefit.id}
                      className={`flex items-center ${styles.subsPlanImgTxt}`}
                    >
                      <Box className="sub_plan_icons">
                        <img
                          src={benefit.image}
                          alt={`${benefit.title || 'Subscription'} benefit icon`}
                          width={28}
                          height={28}
                          className={styles.benefitIcon}
                          style={{
                            width: '28px',
                            height: '28px',
                            maxWidth: '28px',
                            maxHeight: '28px',
                          }}
                        />
                      </Box>
                      <Typography
                        sx={{ color: 'white' }}
                        className={styles.subPlanBenefits}
                      >
                        {benefit.title}
                      </Typography>
                    </Box>
                  )),
                )}
            </Box>
          ) : (
            <Box
              sx={{ width: '100%' }}
              className={`flex flex-col sm:flex-row items-center justify-center ${styles.subsNewPlanCards}`}
            >
              {primeaccessinfo.package_details &&
                primeaccessinfo.package_details.map(
                  (packagedetails: PackageDetails) => {
                    const selectedIdStr = String(selectedPackageId || '')
                    const cardIdStr = String(packagedetails.package_id || '')
                    const couponPackageIdStr = String(couponState.couponPackageId || '')
                    const isSelected = selectedIdStr === cardIdStr
                    const isCouponForThisCard = isCouponValid && couponPackageIdStr === cardIdStr
                    
                    // Check if user has an active subscription
                    const hasActivePackage = primeaccessinfo.active_package_details && 
                      primeaccessinfo.active_package_details.length > 0
                    
                    // When user has active package: don't disable based on coupon (allow upgrades)
                    // When coupon is valid and no active package: disable entire card if it's NOT the coupon card
                    // When no coupon/invalid: cards can be clicked, but only selected card's buy now is enabled
                    const disableEntireCard = !hasActivePackage && isCouponValid && !isCouponForThisCard
                    const disableBuyNow = hasActivePackage
                      ? !isSelected  // If user has active package, only selected card's buy now is enabled
                      : isCouponValid 
                        ? !isCouponForThisCard  // If coupon valid, disable buy now for non-coupon card
                        : !isSelected  // If no coupon/invalid, disable buy now for non-selected card
                    
                    // Only show "Pay ₹ 0" if coupon is valid AND user doesn't have active package
                    // If user has active package, ignore coupon state (upgrade scenario)
                    const showZeroPay = !hasActivePackage && isCouponValid && isCouponForThisCard
                    const ctaLabel = showZeroPay ? 'Pay ₹ 0' : packagedetails.cta_text

                    return (
                    <Box
                      key={packagedetails.package_id}
                      onClick={() => {
                        // Don't allow clicking if coupon is valid and this is not the coupon card
                        if (disableEntireCard) {
                          return
                        }
                        handlePlanClick(packagedetails)
                      }}
                      sx={{
                        background:
                          isSelected
                            ? '#fff'
                            : '',
                        color:
                          isSelected
                            ? '#2E2E54'
                            : '#fff',
                        position: 'relative',
                        maxWidth: { md: '278px' },
                        minHeight: { md: '350px' },
                        border:
                          isSelected
                            ? '1.545px solid  var(--Brand-1-Variation-600, #F15F22)'
                            : '1.545px solid  var(--Brand-1-Variation-600, #FEEFE9)',
                        opacity: disableEntireCard ? 0.5 : 1,
                        cursor: disableEntireCard ? 'not-allowed' : 'pointer',
                        pointerEvents: disableEntireCard ? 'none' : 'auto',
                      }}
                        className={`flex flex-col ${styles.subsPlanOne}`}
                    >
                    <Box className={`flex p-3 items-center ${styles.subPlanOneHeader}`}>
                      <Box className={styles.subPlanOneHeaderTxt}>
                        <Typography className="flex items-center">
                          {/* <span className={styles.subPlanOneDiscount}>
                            {packagedetails.stripe_text}
                          </span> */}
                          <span className={`ml-1 ${styles.subPlanOnePrice}`}>
                            {packagedetails.price_text}{' '}
                          </span>
                        </Typography>
                        <Typography className={`flex items-center ${styles.subPlanOneDuration}`}>
                          {packagedetails.sub_title} {packagedetails.subscription_type === 'yearly' ? '(2 Months Free)' : ''}
                        </Typography>
                      </Box>
                      <Box
                        className={
                          isSelected
                            ? styles.tickMark
                            : styles.nonTickMark
                        }
                      >
                        <img
                          src={
                            isSelected
                              ? '/icons/radio.svg'
                              : '/icons/Tick mark.svg'
                          }
                          alt="tick"
                          width={25}
                          height={25}
                        />
                      </Box>
                      {packagedetails.tag_text && (
                        <Box
                          sx={{
                            position: 'absolute',
                            display: 'flex',
                            width: '92.727px',
                            height: '26.472px',
                            padding: '2.991px 14.956px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '14.956px',
                            left: '16.125px',
                            top: '-14.682px',
                            borderRadius: '5.982px',
                            background: '#1d1d1e',
                          }}
                        >
                          <Typography
                            sx={{
                              color: '#fff',
                              fontSize: '12.364px',
                              fontWeight: 600,
                              lineHeight: '18.545px',
                            }}
                          >
                            {packagedetails.tag_text}
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    <Box
                      className="flex flex-col p-3 subs_plan_one_body"
                      sx={{
                        flex: 1,
                        justifyContent: 'space-between',
                        color: '#1d1d1e',
                        bgcolor: '#FEEFE9',
                        borderRadius: '0px 0px 18.545px 18.545px',
                        minHeight: '257px',
                      }}
                    >
                      <Box
                        className="flex flex-col subs_plan_one_list"
                        sx={{ gap: '12px' }}
                      >
                        {packagedetails.benifit_details &&
                          packagedetails.benifit_details.map(
                            (benefits: any) => (
                              <Box
                                key={benefits.id}
                                className={`flex items-center ${styles.subsPlanImgTxt}`}
                              >
                                <Box className="sub_plan_icons">
                                  <img
                                    src={benefits.image}
                                    alt={`${benefits.title || 'Subscription'} benefit icon`}
                                    width={28}
                                    height={28}
                                    className={styles.benefitIcon}
                                    style={{
                                      width: '28px',
                                      height: '28px',
                                      maxWidth: '28px',
                                      maxHeight: '28px',
                                    }}
                                  />
                                </Box>
                                <Typography className={styles.subPlanBenefits}>
                                  {benefits.title}
                                </Typography>
                              </Box>
                            ),
                          )}
                      </Box>
                      <Box className="mt-1 lg:flex flex-col">
                        <Button
                          className={`flex px-4 py-0 ${styles.subPlanOneBuy}`}
                          onClick={() => {
                            // Don't allow clicking if buy now is disabled
                            if (disableBuyNow) {
                              return
                            }
                            setBuyNow(true) // Open the modal
                            dispatch(
                              setSelectedPackageId(
                                packagedetails.package_id,
                              ),
                            ) // Set the selected package ID
                          }}
                          disabled={disableBuyNow}
                          sx={{
                            opacity: disableBuyNow ? 0.5 : 1,
                            '&.Mui-disabled': {
                              color: '#9e9e9e',
                              backgroundColor: '#1d1d1e',
                            },
                          }}
                        >
                          {ctaLabel}
                        </Button>
                      </Box>
                    </Box>

                    {isSelected ? (
                      <Box
                        className="block lg:hidden"
                        sx={{
                          position: 'fixed',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: '#FEEFE9',
                          padding: '24px 16px',
                          textAlign: 'center',
                          zIndex: 1,
                        }}
                      >
                        <Button
                          sx={{
                            backgroundColor: '#1d1d1e',
                            color: '#fff',
                            width: '100%',
                            textTransform: 'none',
                            opacity: disableBuyNow ? 0.5 : 1,
                            pointerEvents: disableBuyNow ? 'none' : 'auto',
                            '&.Mui-disabled': {
                              color: '#9e9e9e',
                              backgroundColor: '#1d1d1e',
                            },
                          }}
                          onClick={() => {
                            // Don't allow clicking if buy now is disabled
                            if (disableBuyNow) {
                              return
                            }
                            setBuyNow(true) // Open the modal
                            dispatch(
                              setSelectedPackageId(
                                packagedetails.package_id,
                              ),
                            )
                          }}
                          disabled={disableBuyNow}
                        >
                          {ctaLabel}
                        </Button>
                      </Box>
                    ) : (
                      ''
                    )}
                  </Box>
                )})}
            </Box>
          )}

          <Typography className={styles.subPlanAvail}>
            {primeaccessinfo.benifit_disclaimer}
          </Typography>

          {/* Coupon Section */}
            {(() => {
              // Check if user has an active monthly or yearly package
              const hasActivePackage = primeaccessinfo.active_package_details?.length > 0
              const hasMonthlyPackage = hasActivePackage && 
                primeaccessinfo.active_package_details.some(
                  (pkg: any) => pkg.subscription_type === 'monthly'
                )
              const hasYearlyPackage = hasActivePackage && 
                primeaccessinfo.active_package_details.some(
                  (pkg: any) => pkg.subscription_type === 'yearly'
                )
              
              // Hide coupon if user has monthly package OR yearly package
              if (hasMonthlyPackage || hasYearlyPackage) {
                return null
              }
              
              return <ApplyCoupon data={primeaccessinfo.coupon_details} />
            })()}

          {/* FAQ Section */}
          <FrequentQuestions faqs={faqs} />

          {/* Checkout Modal */}
          {buyNow && selectedPackageId && (
            <CheckOutModal
              isOpen={buyNow}
              handleCheckoutModal={handleCheckoutModal}
              hasActivePackage={primeaccessinfo.active_package_details && primeaccessinfo.active_package_details.length > 0}
            />
          )}
        </Box>
      ))}
    </>
  )
}

export default SubscriptionNewPlans
