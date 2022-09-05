import React from 'react'
import styles from './Model.module.css'
import {useSelector} from 'react-redux'
const Model = ({id,img,setopen,loc,descp}) => {
    const details=useSelector((state)=>state.details.value)
  const {Account_name,image}=details.user
  return (
    <div className={styles.Model}>
        <span onClick={()=>{setopen(false)}} className={styles.close}>x</span>
        <div className={styles.image}>
            <img src={img} width='230px' className={styles.img}/>
            <div className={styles.icon}>
                <h6 className={styles.accountname}>{Account_name}</h6>
                <img src={image} width='100%' height='100%' className={styles.imgs}/>
                <h6 className={styles.descp}>{descp}</h6>
                <h6 className={styles.location}>{loc}</h6>
            </div>
        </div>
    </div>
  )
}

export default Model
