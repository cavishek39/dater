import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function useAuth(): any {
  return useContext(AuthContext)
}
