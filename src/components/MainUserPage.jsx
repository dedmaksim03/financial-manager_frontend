import React, { useEffect, useState } from 'react'
import AuthStore from './store'
import { redirect, useNavigate } from 'react-router-dom';
import { AuthStoreProvider, useAuthStore } from '../stores/AuthStore/AuthStoreProvider';
import { observer } from 'mobx-react-lite';

const GetUserData = observer(() => {
  const authStore = useAuthStore();
  return(
    <div>
      Данные: {JSON.stringify(authStore.allData)}
    </div>
  )
})

const MainUserData = () => {
  const authStore = useAuthStore();
  const navigator = useNavigate();

  useEffect(() => {
    if (authStore.token == null)
      navigator("/login");
  }, [])
  authStore.getData();
  // const [response, setResponse] = useState('');
  // const navigator = useNavigate();
  // const authStore = useAuthStore();

  // authStore.getData().then((res) => {
  //   console.log('getData res: ', res);
  //   setResponse(res);
  //   console.log('getData response: ', response);
  // })
  // console.log('response: ', response)

  // useEffect(()  => {
  //   if (response == null){
  //     console.log('navigator');
  //     navigator("/login");
  //   }
  // }, [response]);

  return(
    <GetUserData/>
  )
}

export const MainUserPage = () => {
  return(
    <div>
      <MainUserData/>
    </div>
  )
}
