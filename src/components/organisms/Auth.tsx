import { Auth as SupabaseAuthComponent } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { settingLocalization } from '@/setting/localization';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'


const Auth = () => {
  const supabase = useSupabaseClient()

  const user = useUser()
  const router = useRouter();

  useEffect(() => {
    //ユーザーがあったらダッシュボードに遷移させる
    user && router.push("/dashboard")
  }, [user, router])

  return (
    <div className="container" style={{ height: "100dvh", padding: "50px 20px", backgroundColor: "white", }}>
      <SupabaseAuthComponent
        supabaseClient={supabase}
        localization={{
          variables: settingLocalization,
        }}
        providers={[]}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                inputBackground: 'white',
              },
            },
          },
        }}
      />
    </div>
  )
}

export default Auth