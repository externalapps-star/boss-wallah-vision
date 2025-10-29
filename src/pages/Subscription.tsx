import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SubscriptionNewPlans from '@/components/subscription/SubscriptionNewPlans'
// import Cookies from 'js-cookie'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '@/services/firebase/firebase.init'

const Subscription: React.FC = () => {
  const navigate = useNavigate()
  const [packages, setPackages] = useState<any>(null)
  const [faqs, setFaqs] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const auth = getAuth(app)
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        setLoading(true)
        
        // Get Firebase auth token if user is signed in
        let idToken = null
        if (user) {
          idToken = await user.getIdToken(true)
        }
        // Get mem_id from cookies (same logic as website_new)
        // const mem_id = Cookies.get('mem_id') || '0'
        
        // Prepare headers
        const headers: Record<string, string> = {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
        
        // Add Authorization header only if token is available
        if (idToken) {
          headers['Authorization'] = `Bearer ${idToken}`
        }
        
        // Fetch packages
        const packagesResponse = await fetch(
          // `${import.meta.env.VITE_API_URL}/subscription/get_active_packages`,
          `${import.meta.env.VITE_API_URL}/subscription/get_active_packages_v1`,
          {
            method: 'POST',
            body: new URLSearchParams({
              lang_id: '24', // English
              // mem_id: String(mem_id), // Commented out as per v1 endpoint pattern
            }),
            headers,
          }
        )

        if (!packagesResponse.ok) {
          throw new Error('Failed to fetch packages')
        }

        const packagesData = await packagesResponse.json()

        // Fetch FAQs
        const faqResponse = await fetch(
          `${import.meta.env.VITE_API_URL}/subscription/get_faq`,
          {
            method: 'POST',
            body: new URLSearchParams({
              lang_id: '24', // English
            }).toString(),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        )

        if (!faqResponse.ok) {
          throw new Error('Failed to fetch FAQs')
        }

        const faqData = await faqResponse.json()

        setPackages(packagesData)
        setFaqs(faqData)
      } catch (err) {
        console.error('Error fetching subscription data:', err)
        setError('Failed to load subscription plans')
      } finally {
        setLoading(false)
      }
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading subscription plans...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">Error Loading Subscription Plans</h1>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Home Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Button>

        {/* Subscription Plans Component */}
        {packages && faqs && (
          <SubscriptionNewPlans 
            packages={packages} 
            faqs={faqs} 
          />
        )}
      </div>
    </div>
  )
}

export default Subscription
