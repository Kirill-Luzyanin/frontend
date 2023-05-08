import React from "react";
import styles from './Bootstrap.module.css';

function Bootstrap(): JSX.Element {
    return (
        <>
            <h1>Bootstrap</h1>
            <div className={"container "+styles.red}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <img className="w-100" src="https://blog.logrocket.com/wp-content/uploads/2021/09/optimizing-performance-react-application.png" alt="q"/>
                        Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Они все языком приставка но дал раз напоивший. Решила ipsum текстами приставка рукописи семантика необходимыми дал выйти пояс. Сих, маленькая.
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <img className="w-100" src="https://blog.logrocket.com/wp-content/uploads/2021/09/optimizing-performance-react-application.png" alt="q"/>
                        Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Они все языком приставка но дал раз напоивший. Решила ipsum текстами приставка рукописи семантика необходимыми дал выйти пояс. Сих, маленькая.
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img className="w-100" src="https://blog.logrocket.com/wp-content/uploads/2021/09/optimizing-performance-react-application.png" alt="q"/>
                        Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Они все языком приставка но дал раз напоивший. Решила ipsum текстами приставка рукописи семантика необходимыми дал выйти пояс. Сих, маленькая.
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <img className="w-100" src="https://blog.logrocket.com/wp-content/uploads/2021/09/optimizing-performance-react-application.png" alt="q"/>
                        Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Они все языком приставка но дал раз напоивший. Решила ipsum текстами приставка рукописи семантика необходимыми дал выйти пояс. Сих, маленькая.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bootstrap;