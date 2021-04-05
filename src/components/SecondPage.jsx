import React from "react";
import {NavLink} from "react-router-dom";
import '../App.css'


const User = ({user}) => {

    return (
        <div className={'user'}>
            <img src={user.avatar} alt=""/>
            <div className={'user-info'}>
            <div> Имя: {user.first_name}</div>
            <div> Фамилия: {user.last_name}</div>
            <div> e-mail: {user.email}</div>
            </div>
        </div>
    )
}



const SecondPage = ({users}) => {

    return (
        <div className="App">
                <div className={'container'}>
                    { users.users.data
                        ? users.users.data.map(u => <User key={u.id} user={u}/>)
                        : <div className={'text'}>Для отображения пользователей сделайте запрос на сервер на первой странице.</div>
                    }
                </div>

            <button className={'btn-new'}>
                <NavLink to={'/'}>Вернуться на первую страницу</NavLink>
            </button>
        </div>
    )
}

export default SecondPage
