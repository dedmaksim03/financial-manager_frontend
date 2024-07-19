import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/AuthStore/AuthStoreProvider';
import { observer } from 'mobx-react-lite';
import './css/MainUserPage.css'

const GetUserData = observer((props) => {
  let arr = props.authStore.allData?.data;
  const listItems = arr?.map((arr) => 
    <p key={arr?.id}>
      {JSON.stringify(arr)}
    </p>
  );

  return(
    <div>
        <h2>Данные</h2> 
        <p>Пользователь: {JSON.stringify(props.authStore.allData?.username)}</p>
        <div className='text-center'>        
          <div>{listItems}</div>
      </div>
    </div>
  )
})

const MainUserData = () => {
  const navigator = useNavigate();
  const authStore = useAuthStore();

  authStore.getData().then((response) => {
    if (response?.message != null){
      console.log(response.response.status)
      console.log(response.message)
      navigator("/login")
    }
  })

  return(
    <GetUserData authStore={authStore}/>
  )
}

export const MainUserPage = () => {
  return(
    <div>
      <MainUserData/>
    </div>
  )
}
