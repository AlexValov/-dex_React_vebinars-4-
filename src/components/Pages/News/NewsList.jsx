import React from 'react';


const NewsList = (props) => {

    const listItems = props.items.map((news) =>
        <article key={news.id} className='article-container'>
            <img alt='' src={news.img} />
            <div className='text-container' >
                <p>{news.text}</p>
            </div>
        </article>
    )
    return (
        <div>{listItems}</div>
    );
};

export default NewsList;

