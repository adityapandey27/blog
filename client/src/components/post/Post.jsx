
import "./Post.css"
import TranspoterCraft from '../../assets/transpoter.jpg'
import { Link } from 'react-router-dom';
export default function Post({item}) {
  const PF="http://localhost:5000/images/"
  console.log("postttttttttttttt item",item.categories);
  
  return (
    <div className='post'>
      <Link to={`/post/${item._id}`} className='link'>
      {
        item.photo && 
      <img className='postImg' src={PF+item.photo} alt="TranspoterCraft" />
      }
      <div className="postInfo">
        <div className="postCats">
         Categories: {
            !item.categories.length?"No category is added":item.categories.map((element)=>(

              <div className="postCat">{element}
              </div>
            ))
          }
        </div>
         
        <span className="postTitle">
          {item.title}</span>

         
        <hr/>
        <span className="postDate">{new Date(item.createdAt).toDateString()}</span>
        <span className="postDate1">edited at: {new Date(item.updatedAt).toDateString()}</span>
      </div>
      <p className='postDesc'>
       {item.desc}</p>
       </Link>
    </div>
    
  )
}
