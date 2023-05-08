import React, { useEffect } from "react";
import {useState} from "react";
import styles from './Posts.module.css';
import List from '../List/List'


interface Post {
    id: number;
    userId: number;
    tytle: string;
    body: string;
}


function Posts(): JSX.Element {

    const [posts, setPosts] = useState<string[]>([]); 

    async function loadPosts():Promise<string[]> {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
        //const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2'); - только 2-й юзер
        const obj:Post[] = await response.json() as Post[];
        const bodyes:string[] = obj.map((post:Post):string=>{return post.body;});
        return bodyes;
    }

    useEffect( () => {
        loadPosts().then(param=>setPosts(param));

    },[]);

    return (
        <div>
            <h1 className={styles.qwe}>
                Показать посты пользователей
            </h1>
            <List names={posts} heading="Посты"/>

        </div>

    );


}

export default Posts;