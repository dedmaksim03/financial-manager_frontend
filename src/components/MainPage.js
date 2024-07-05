import React, { Component, useEffect, useState } from "react";
import { AppStoreProvider, useAppStore } from "../stores/AppStore/AppStoreProvider";
import { observer } from "mobx-react-lite";

function Comment(props){
    return (
        <div>
            <p>Комментарий: {props.data}</p>
        </div>
    )
}

function Clock(){

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval)
    }, [])

    const [time, setTime] = useState(new Date());

    function tick(){
        return setTime(new Date())
    }

    return(
        <div>
            Сейчас: {time.toLocaleTimeString()}
        </div>
    )
}

const TestingStore = observer(() => {
    const appStore = useAppStore();

    return (
        <>
            <h1>{appStore.data}</h1>
            <button onClick={appStore.increaseData}>Increase</button>
        </>
    )
})

const ChildrenMainPage = observer(() => {
    const appStore = useAppStore();
    return(
            <div>
                <h1> Главная страница </h1>
                <Comment data='Классный комментарий'/>
                <Clock/>
                <TestingStore/>
                <button onClick={appStore.decreaseData}>Decrease</button>
            </div>
    )
})

const MainPage = () => {
    return(
        <AppStoreProvider>
            <ChildrenMainPage/>
        </AppStoreProvider>
    )
}

export default MainPage;