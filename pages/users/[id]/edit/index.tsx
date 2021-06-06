import { useRouter } from 'next/router'
import { UserInfoEditScreen } from '../../../../components/pages/UserInfoScreen/Edit'

export const UserInfoEdit = () => {
  const router = useRouter()
  const id = router.query.id as string

  return <UserInfoEditScreen id={id} />
}

export default UserInfoEdit