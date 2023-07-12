import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import {collection,getDocs } from "firebase/firestore";

function Home() {
  const [posts,setPosts]=useState([]);



  // thats how we can get data from the firebase firestore . 
//{
  async function getData(){
    const colRef = collection(db, "posts");
    const docsSnap = await getDocs(colRef);
   const posts=docsSnap.docs.map((doc)=>{
    return {
      id:doc.id,
      ...doc.data(),
    };
   });
   console.log(posts);
   setPosts(posts);
  }
  
  useEffect(()=>{
    getData()
  },[]);
//}

    return (
      <div className="home">
        <h1>Tech Blog</h1>
        <div id="blog-by">Sachin</div>
        
        {posts.map((post,index)=>{
          return (
          <div className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
            </Link>

            <p>{post.subTitle}</p>
          </div>
          )
        })}
      </div>
    );
  }
  
  export default Home;