import { AuthenticationContext } from '@/app/context/authContext'
import { useContext } from 'react'

export default function useAuthContext() {
  const { loading, data, error, setAuthState, loginCard, setloginCard } = useContext(AuthenticationContext)
  return { loading, data, error, setAuthState, loginCard, setloginCard }
}
