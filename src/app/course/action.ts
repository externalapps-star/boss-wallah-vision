export const fetchExploreDetailCourseData = async (
  url: string,
  body: Record<string, any>,
) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: new URLSearchParams(body).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    if (!response.ok) {
      return response.json()
      // throw new Error(`Failed to fetch data from ${url}`)
    }
    return response.json()
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error)
    return null
  }
}

export const fetchCreateOrderData = async (
  lang_id: any = 24,
  bearer_token: string,
  memId: any,
  package_id: string,
  selectedCourse: string,
  handlePage: (page: string, activeStepper: number) => boolean,
) => {
  try {
    const response = await fetch(
      package_id == '67'
        ? `https://bw-purchase-service-prod-262620024912.asia-south1.run.app/api/v1/purchase/checkout_subscription_payment`
        : `https://bw-purchase-service-prod-262620024912.asia-south1.run.app/api/v1/purchase/checkout_prime_payment`,
      {
        method: 'POST',
        body: new URLSearchParams({
          mem_id: memId,
          app_language: lang_id,
          lang_id: lang_id,
          coupon_id: 1,
          package_id: package_id,
          course_id: selectedCourse,
        } as any).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${bearer_token}`,
        },
      },
    )
    if (!response.ok) {
      throw new Error(`Failed to fetch data from create order`)
    }

    return response.json()
  } catch (error) {
    console.error(`Error fetching data from create_order:`, error)
    return null
  }
}

export const fetchBannerText = async (lang_id: number) => {
  const response = await fetch(
    `https://website-api-prod-262620024912.asia-south1.run.app/home/get_banner_text`,
    {
      method: 'POST',
      body: new URLSearchParams({
        lang_id: lang_id,
      } as any).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
  const res = await response.json()
  return res
}
