import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SubscriptionStateMapper {
  show_golden_strip: boolean
  strip_content: string
}

export interface RelatedCoursesDataMapper {
  course_id: number
  Course_english_name: string
  course_header: string
  thumbnail_path: string
  goal_name: string
  total_duration: string
  views: string
  number_of_ratings: string
  rating: string
}

export interface RelatedCoursesMapper {
  data: {
    data: Array<RelatedCoursesDataMapper>
  }
  heading: string
}

export interface MeetYourMenterMapper {
  data: {
    data: {
      data: {
        mentor_name: string
        mentor_image: string
        mentor_desc_in_lang: string
        mentor_desc: string
      }
    }
    heading: string
  }
  logout: boolean
}

export interface ReviewExpertTipsMapper {
  id: string
  user_name: string
  video_url: string
  thumbnail: string
  city: string
  state: string
  created_date: string
}

interface ExploreCoursesState {
  courseData: any | null
  videosList: any[] | []
  subscriptionStrip: any | null
  loading: boolean
  selectedCourseData: any | null
  showSubscriptionStrip: SubscriptionStateMapper // New state for subscription strip visibility
  reviewExpertTips: {
    data: ReviewExpertTipsMapper[]
    heading: string
  }
  relatedCourses: RelatedCoursesMapper
  meetYourMentor: MeetYourMenterMapper
}

const initialState: ExploreCoursesState = {
  courseData: null,
  videosList: [],
  subscriptionStrip: null,
  loading: false,
  selectedCourseData: {},
  showSubscriptionStrip: {} as SubscriptionStateMapper, // Default to hidden
  reviewExpertTips: {
    data: [],
    heading: '',
  },
  meetYourMentor: {} as MeetYourMenterMapper,
  relatedCourses: {} as RelatedCoursesMapper,
}

const exploreCoursesSlice = createSlice({
  name: 'exploreCourses',
  initialState,
  reducers: {
    setCourseDetails: (state, action: PayloadAction<any>) => {
      const { courseData, videosList, subscriptionStrip } = action.payload
      state.courseData = courseData
      state.videosList = videosList
      state.subscriptionStrip = subscriptionStrip
    },
    setCourseDetailsSelectedData(state, action: PayloadAction<any>) {
      state.selectedCourseData = action.payload as never
    },
    setCourseDetailsReviewExpertTipsData(state, action: PayloadAction<any>) {
      state.reviewExpertTips = action.payload as never
    },
    setCourseDetailsMeetYourMentorData(
      state,
      action: PayloadAction<MeetYourMenterMapper>,
    ) {
      state.meetYourMentor = action.payload as never
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setSubscriptionStripVisibility: (
      state,
      action: PayloadAction<SubscriptionStateMapper>,
    ) => {
      state.showSubscriptionStrip = action.payload
    },
    setCourseDetailRelatedCoursesData(
      state,
      action: PayloadAction<RelatedCoursesMapper>,
    ) {
      state.relatedCourses = action.payload as never
    },
  },
})

export const {
  setCourseDetails,
  setLoading,
  setSubscriptionStripVisibility,
  setCourseDetailsSelectedData,
  setCourseDetailsReviewExpertTipsData,
  setCourseDetailsMeetYourMentorData,
  setCourseDetailRelatedCoursesData,
} = exploreCoursesSlice.actions
export default exploreCoursesSlice.reducer
