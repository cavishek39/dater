import { useMMKVObject } from 'react-native-mmkv'
import { MMKV_STORAGE } from '../storage/mmkvSetup'
import { UserInfo } from '../types/userInfo'

export default function useLoggedInUser() {
  const [loggedInUser, setLoggedInUser] = useMMKVObject<UserInfo>(
    'user.storage',
    MMKV_STORAGE
  )
  // console.log('loggedInUser', loggedInUser)
  return { loggedInUser, setLoggedInUser }
}
