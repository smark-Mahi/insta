import React,{useState} from 'react'
import styles from './Gallery.module.css'
import {useSelector} from 'react-redux'
import Model from './Model'
const Gallerry = () => {
  const [open,setopen]=useState(false)
  const [id,setid]=useState('')
  const [img,setimg]=useState()
  const [location,setlocation]=useState('')
  const [description,setdescription]=useState('')
  const details=useSelector((state)=>state.details.value)
  const handleclick=(id,image,description,location)=>{
    setopen(true)
    setid(id)
    setimg(image)
    setdescription(description)
    setlocation(location)
  }
  return (
    <div className={styles.container}>
      {
        details.user.Posts.map((items)=>
          <div key={items.id} className={styles.flex}>
          <img src={items.img} width='220px'height='220px' objectFit='cover' onClick={()=>handleclick(items.id,items.img,items.location,items.description)} className={styles.img}/>
          <h6 className={styles.likesncomments}>{items.likes}likes&nbsp;{items.comments}comments</h6>
          </div>
        )
      }
      {open && <Model id={id} img={img} descp={description} loc={location} setopen={setopen}/>}
    </div>
  )
}

export default Gallerry
