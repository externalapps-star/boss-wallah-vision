import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import Cookies from 'js-cookie'
import app from '@/services/firebase/firebase.init'

interface UseLogoutOptions {
  redirectTo?: string
  reloadPage?: boolean
}

export const useLogout = (options: UseLogoutOptions = {}) => {
  const navigate = useNavigate()
  const { redirectTo = '/', reloadPage = true } = options

  const logout = () => {
    try {
      // Sign out from Firebase
      const auth = getAuth(app)
      signOut(auth)

      // Remove all authentication cookies
      Cookies.remove('is_expert')
      Cookies.remove('expert_id')
      Cookies.remove('secret_key')
      Cookies.remove('mem_id')
      Cookies.remove('userInfo')
      Cookies.remove('active_packages')
      Cookies.remove('expert_chatting')

      // Navigate to specified route
      navigate(redirectTo)

      // Reload page if specified
      if (reloadPage) {
        window.location.reload()
      }
    } catch (error) {
      console.error('Error during logout:', error)
      // Even if there's an error, still try to redirect
      navigate(redirectTo)
    }
  }

  return { logout }
}
