import React from "react";
import {NavLink} from "react-router-dom";
import '../App.css'
import Preloader from "./Preloader";

const FirstPage = ({getUsers, emptyState, isFetching}) => {

    return (
        <div className="App">
            { isFetching ? <Preloader /> : null }
            <button className={'btn-new'} onClick={getUsers}>Сделать запрос на сервер</button>
            <button className={'btn-new'} onClick={emptyState}>Очистить State</button>
            <button className={'btn-new'}>
                <NavLink to={'/second-page'} >Перейти на вторую страницу</NavLink>
            </button>
        </div>
    )
}

export default FirstPage
