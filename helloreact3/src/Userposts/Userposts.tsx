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


function Userposts(): JSX.Element {

    const id:number = 1;    

    const [posts, setPosts] = useState<Post[]>([]); 

    async function loadPosts():Promise<Post[]> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`); 
        
        const obj:Post[] = await response.json() as Post[];
             
        return obj;
    }

    useEffect( () => {
        loadPosts().then(param=>setPosts(param));

    },[]);

    
    const names:string[] = posts.map((post:Post):string=>{return post.body;});

    return (
        <div>
            <h1 className={styles.qwe}>
                Показать посты пользователей
            </h1>
            <List names={names} heading="Посты"/>

        </div>

    );


}

export default Userposts;