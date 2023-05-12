import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likeCounts: number
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img src="https://boomcdn.azureedge.net/boomstarter/uploads/user/avatar/868025/large_1512666804-avatar.jpg"
                 alt="w"/>
            {props.message}
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>
    )
}

export default Post;
