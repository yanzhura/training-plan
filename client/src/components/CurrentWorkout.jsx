import React from 'react';

const CurrentWorkout = () => {
    return (
        <div>
            <h3>Текущая тренировка.</h3>
            <p>Здесь будут расположены (в виде отдельных компонентов):</p>
            <ul>
                <li>Номер и заголовок</li>
                <li>Мышечные группы с цветами и пиктограммами</li>
                <li>Список упражнений с пиктограммами</li>
                <li>Запланированная дата (если есть)</li>
            </ul>
            <button>Запланировать</button>
        </div>
    );
};

export default CurrentWorkout;