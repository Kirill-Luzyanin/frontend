import React from "react";
import { Outlet, useNavigate } from "react-router-dom";


function Layout(): JSX.Element {

    const navigate = useNavigate();

    return (
        
        <div>
            <h1> Мой сайт</h1>
            <div> 
                <button type="button" className="btn btn-outline-primary" onClick={()=>navigate('/')}>Домой</button>
                <button type="button" className="btn btn-outline-primary" onClick={()=>navigate('/users/')}>Пользователи</button>
                <button type="button" className="btn btn-outline-primary" onClick={()=>navigate('/msg/')}>Сообщения</button>
                <button type="button" className="btn btn-outline-primary" onClick={()=>navigate('/posts/')}>Посты</button>
                <button type="button" className="btn btn-outline-primary" onClick={()=>navigate(-1)}>Назад</button>
                <button type="button" className="btn btn-outline-primary" onClick={()=>navigate(1)}>Вперед</button>
            </div>
            <h1>fdsfsd</h1>
            <h1>ffdfsfdsdsfsd</h1>
            <Outlet />
        </div>
    );


}

export default Layout;