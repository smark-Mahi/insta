import React from 'react'
import {useSelector} from 'react-redux'
import styles from './Header.module.css'
const Header = () => {
  const details=useSelector((state)=>state.details.value)
  //const {Account_name,image,about,name,followers,following,posts}=user.details
  return (
    <div className={styles.container}>
      <img src={details.user.image} objectFit="contain" width='150px' height='150px' className={styles.img}/>
        <div className={styles.items}>
          <h3 className={styles.accountname}>{details.user.Account_name}</h3>
            <div className={styles.vertical}>
                <h6><span className={styles.number}>{details.user.posts}</span>&nbsp;posts</h6>&nbsp;&nbsp;&nbsp;
                <h6><span className={styles.number}>{details.user.followers}</span>&nbsp;followers</h6>&nbsp;&nbsp;&nbsp;
                <h6><span className={styles.number}>{details.user.following}</span>&nbsp;following</h6>&nbsp;&nbsp;&nbsp;
            </div>
              <b className={styles.name}>{details.user.name}</b>
              <h6 className={styles.location}>{details.user.about}</h6>
              
        </div>
    </div>
  )
}

export default Header
