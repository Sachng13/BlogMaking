import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";


function PostDetail() {
  const [post, setPost] = useState({});

  const { postId } = useParams();

  async function getPost() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      if (doc.id==postId){
          setPost(doc.data());
      }
     
    });
  }
  useEffect(()=>{
    getPost()
  },[]);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;