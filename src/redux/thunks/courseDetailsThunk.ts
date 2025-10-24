import { AppDispatch } from '../store'
import {
  setCourseDetailRelatedCoursesData,
  setCourseDetails,
  setCourseDetailsMeetYourMentorData,
  setCourseDetailsReviewExpertTipsData,
  setLoading,
} from '../slices/exploreCoursesDetailsSlice.ts'
import Cookies from 'js-cookie'

export const fetchExploreCourseDetails =
  (selectedLanguage: number, course_id: number) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/courses/get_course_info`,
        {
          method: 'POST',
          body: new URLSearchParams({
            lang_id: selectedLanguage,
            course_id: course_id,
            mem_id: Cookies.get('mem_id') || '0',
          } as any).toString(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      const res = await response.json()

      const courseData = res.data?.course_details
      const videosList = res.data?.videos_list
      const subscriptionStrip = res.data?.subscription_strip
      dispatch(setCourseDetails({ courseData, videosList, subscriptionStrip }))
    } catch (error) {
      console.error('Failed to fetch explore course details', error)
    } finally {
      dispatch(setLoading(false))
    }
  }

export const fetchExploreCourseReviewTipsDetails =
  (selectedLanguage: number, course_id: number) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/courses/course_reviews_expert_tips`,
        {
          method: 'POST',
          body: new URLSearchParams({
            lang_id: selectedLanguage,
            course_id: course_id,
          } as any).toString(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      const res = await response.json()
      dispatch(setCourseDetailsReviewExpertTipsData(res))
    } catch (error) {
      console.error('Failed to fetch explore course review tips', error)
    } finally {
      dispatch(setLoading(false))
    }
  }

export const fetchExploreCourseMyMentorDetails =
  (selectedLanguage: number, course_id: number) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/courses/get_meet_your_instructor`,
        {
          method: 'POST',
          body: new URLSearchParams({
            lang_id: selectedLanguage,
            course_id: course_id,
          } as any).toString(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      const res = await response.json()
      dispatch(setCourseDetailsMeetYourMentorData(res.data))
    } catch (error) {
      console.error('Failed to fetch explore course my mentor', error)
    } finally {
      dispatch(setLoading(false))
    }
  }

export const fetchExploreCourseRelatedCoursesDetails =
  (selectedLanguage: number, course_id: number) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/courses/related_courses`,
        {
          method: 'POST',
          body: new URLSearchParams({
            lang_id: selectedLanguage,
            course_id: course_id,
          } as any).toString(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      const res = await response.json()
      dispatch(setCourseDetailRelatedCoursesData(res))
    } catch (error) {
      console.error('Failed to fetch explore course related courses', error)
    } finally {
      dispatch(setLoading(false))
    }
  }

export const fetchActiveStatus =
  (id_token: string, mem_id: string, lang_id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/subscription/get_active_packages_v1`,
        {
          method: 'POST',
          body: new URLSearchParams({
            lang_id: String(lang_id),
            // mem_id: String(mem_id),
          }),
          headers: {
            'Authorization':'Bearer ' + id_token,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      const res = await response.json()
      if (res.data) {
        return res.data[0].active_package_details.length > 0 ? '1' : '2'
      }
    } catch (error) {
      console.error('Failed to fetch explore course related courses', error)
    } finally {
      dispatch(setLoading(false))
    }
  }
