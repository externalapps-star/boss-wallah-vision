import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, User, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useLogout } from '@/hooks/useLogout'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '@/services/firebase/firebase.init'
import { fetchUserData } from '@/redux/thunks/loginDetailsThunks'
import { setUserName } from '@/redux/slices/loginDetailsSlice'
import { useAppDispatch } from '@/redux/hooks'

interface UserMenuProps {
  // Remove userInfo prop since we'll fetch it internally
}

const UserMenu: React.FC<UserMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [userInfo, setUserInfo] = useState<Record<string, any>>({})
  const [memId, setMemId] = useState<number>(0)
  const [providerId, setProviderId] = useState<string>('')
  const { logout } = useLogout()
  const dispatch = useAppDispatch()

  // Get user info from Redux store if available
  const loginState = useSelector((state: RootState) => state.login)

  useEffect(() => {
    const fetchCookies = async () => {
      if (typeof window !== 'undefined') {
        try {
          const memIdFromCookie = Cookies.get('mem_id')
          const userInfoFromCookie = Cookies.get('userInfo')
          setMemId(memIdFromCookie ? Number(memIdFromCookie) : 0)
          if (userInfoFromCookie) {
            try {
              const parsedUserInfo = JSON.parse(userInfoFromCookie)
              setUserInfo(parsedUserInfo)
            } catch (error) {
              console.error('Error parsing userInfo from cookie:', error)
              setUserInfo({})
            }
          }
        } catch (error) {
          console.error('error during cookie retrieval', error)
        }
      }
    }
    fetchCookies()
  }, [])

  useEffect(() => {
    const fetchUserDataAsync = async () => {
      const auth = getAuth(app)
      const memId = Cookies.get('mem_id')
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const idToken = await user.getIdToken()
          if (memId) {
            setMemId(Number(memId))
            const userData = await dispatch(
              fetchUserData(idToken as string, Number(memId)),
            )
            setProviderId(userData?.provider_type_id)
            const userInfo = JSON.parse(Cookies.get('userInfo') || '{}')
            const updatedUserInfo = {
              is_expert: userData?.is_expert || false,
              credit_balance: userData?.credit_balance || 0,
              mobile: userData?.mem_mobile || userInfo.mobile || '',
              email: userData?.auth_mem_email || userInfo.email || '',
              name: userData?.mem_fname || '',
              dialCode: userData?.mem_country || '',
              subscription_status: userData?.current_package || '',
              profile_image: userData?.mem_prof_image || '',
            }
            setUserInfo(updatedUserInfo)
            // Store the data in cookies as well
            Cookies.set('userInfo', JSON.stringify(updatedUserInfo), {
              expires: 7,
              path: '/',
            })
            dispatch(setUserName(userData?.mem_fname || ''))
          }
        } else {
          console.error('User not logged in')
        }
      })
    }
    fetchUserDataAsync()
  }, [])

  const handleLogout = () => {
    // Use the logout hook
    logout()
  }

  // If user is not logged in, show login button
  if (!Cookies.get('mem_id') || Cookies.get('mem_id') === '0') {
    return (
      <Link to="/login">
        <Button 
          variant="outline" 
          size="sm"
          className="border-2 border-primary/30 text-foreground hover:text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300"
        >
          Login
        </Button>
      </Link>
    )
  }

  // If user is logged in, show user menu
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full hover:bg-[rgb(233,236,239)] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 active:ring-0 active:ring-offset-0 border-0 shadow-none"
        >
          <Avatar className="h-8 w-8 focus:outline-none focus:ring-0 border-0">
            <AvatarImage 
              src={userInfo.profile_image || 'https://imcdevstguploads.ffreedomapp.com/indianmo/financial_freedom_app/uploads/expert_connect/no_prof_img.png'} 
              alt={userInfo?.name || 'User'} 
            />
            <AvatarFallback>
              {userInfo?.name ? userInfo.name.charAt(0).toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {userInfo?.name ? userInfo?.name : 'Hi!'}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {userInfo.mobile || userInfo.email || 'user@example.com'}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/subscription" className="flex items-center">
            <img src="/icons/pro-sub-icon.svg" alt="Subscription Icon" width={16} height={16} className="mr-2" />
            <span>Subscription Plans</span>
          </Link>
        </DropdownMenuItem>
        {/* <DropdownMenuItem asChild>
          <Link to="/account-preferences" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span>Account Preferences</span>
          </Link>
        </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu
