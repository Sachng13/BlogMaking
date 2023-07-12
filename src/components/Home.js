import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import {CollectionReference, Firestore, collection,getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";


function Home() {
  const [posts,setPosts]=useState([]);



  // thats how we can get data from the firebase firestore . 
//{
  async function getData(){
    const colRef = collection(db, "posts");
    const docsSnap = await getDocs(colRef);
   const posts=docsSnap.docs.map((doc)=>{
    return {
      ref:doc,
      id:doc.id,
      ...doc.data(),
    };
   });
   setPosts(posts);
  }
  
  useEffect(()=>{
    getData()
  },[]);
//}

    async function deletingPost(e) {
      const colRef = collection(db, "posts");
      const docsSnap = await getDocs(colRef);
     const deletePost=docsSnap.docs.filter((doc)=>{
      if (doc.id==e.target.id){
        console.log(doc.CollectionReference)
        return doc.ref;
      }
     })
     console.log(deletePost)
    
    }

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
            <button className="create-post-btn" onClick={deletingPost} id={`${post.id}`}>Delete Post</button>
          </div>
          )
        })}
      </div>
    );
  }
  
  export default Home;