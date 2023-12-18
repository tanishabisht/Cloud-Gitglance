import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'

const CustomCard = ({content}) => {
    const [color, setColor] = useState(content.like ? '#9A2D1E' : '#B4B4B4')

    const linkClickHandler = () => {
        const data = {
            "EVENT_TYPE" : "click",
            "ITEM_ID" : content.repo_url,
            "TIMESTAMP" : Math.floor(Date.now() / 1000),
            "USER_ID" : "30"
        }

        const postData = {
            StreamName: "repos-interaction-stream",
            Data: btoa(JSON.stringify(data)),
            PartitionKey: "30"
        }

        axios.post('https://rwrbehkr47.execute-api.us-east-1.amazonaws.com/TestStage/api/interactions', postData)
        .then(function (response) {
            console.log('response click: ', response);
        })
        .catch(function (error) {
            console.log('error click: ', error);
        });
    }

    const likeClickHandler = () => {
        setColor(prev => prev === '#9A2D1E' ? '#B4B4B4': '#9A2D1E')

        const data = {
            "EVENT_TYPE" : "like",
            "ITEM_ID" : content.repo_url,
            "TIMESTAMP" : Math.floor(Date.now() / 1000),
            "USER_ID" : "30"
        }

        const postData = {
            StreamName: "repos-interaction-stream",
            Data: btoa(JSON.stringify(data)),
            PartitionKey: "30"
        }

        axios.post('https://rwrbehkr47.execute-api.us-east-1.amazonaws.com/TestStage/api/interactions', postData)
        .then(function (response) {
            console.log('response like: ', response);
        })
        .catch(function (error) {
            console.log('error like: ', error);
        });
    }

    return (
        <div className='card_container'>
            <div onClick={linkClickHandler}>
                <a className='topic_link' href={content.repo_url} rel="noreferrer" target="_blank">
                    <p>{content.title}</p>
                </a>
            </div>
            <br/>
            <p className='card_like' style={{color}} onClick={likeClickHandler}>Like    {content.language[0]}/{content.language[1]}</p>
        </div>
    );
}

export default CustomCard;