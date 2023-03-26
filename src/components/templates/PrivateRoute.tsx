import { useSession, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
type Props = {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {

  //ログインした人だけが見れるページ

  const session = useSession()

  const user = useUser()
  const router = useRouter();

  useEffect(() => {
    //ユーザーがなかったらログインページに遷移させる
    !user && router.push("/")
  }, [user, router])

  return (
    <div>{children}</div>
  )
}
