import React from 'react';
import './News.css';
import NewsList from './NewsList'


const items = [
    {
        id: 1,
        img: 'https://favoritnr1.com/wp-content/uploads/2013/05/1369407931_basketball-004.jpg',
        text: 'Главный тренер «Бруклина» сказал про возвращение Ирвинга ....'
    },
    {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT2T7Qdr6QhtySIVOy12iISMukeKvo_gnQH2o0hyz8Qm4TFGEm',
        text: 'Сборная США заняла седьмое место на чемпионате мира.....'
    },

    {
        id: 3,
        img: 'https://favoritnr1.com/wp-content/uploads/2013/05/1369407931_basketball-004.jpg',
        text: 'Главный тренер «Бруклина» сказал про возвращение Ирвинга ....'
    },
    {
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT2T7Qdr6QhtySIVOy12iISMukeKvo_gnQH2o0hyz8Qm4TFGEm',
        text: 'Сборная США заняла седьмое место на чемпионате мира...'
    },

    {
        id: 5,
        img: 'https://i.eurosport.com/2019/08/24/2660865-55039610-2560-1440.jpg?w=750',
        text: 'Этот результат стал худшим для американской команды....'
    }
];


const News = () => {
    return (
        <div className='news-page'>
            <section className='section-menu'>
                <NewsList items={items}/>
            </section>
        </div>
    );
};

export default News;
