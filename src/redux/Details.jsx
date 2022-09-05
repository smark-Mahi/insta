import {createSlice} from '@reduxjs/toolkit';
import images from '../assets/images.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img4 from '../assets/images/img4.jpg'
import img3 from '../assets/img3.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
function randomlikecomment(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
const initialStateValue={
    user:{
        Account_name:"through_my_quicky_lens",
        posts:6, 
        followers:283,
        following:274,
        name:'Kat Dennings',
        image:images,
        about:'World through my lens',
        Posts:[
            {
                id:1,
                img:img1,
                likes:randomlikecomment(10,1000),
                comments:randomlikecomment(10,1000),
                location:'california Switzerland',
                description:'casual Ride on Swss looks like Thankyou'
            },
            {
                id:2,
                img:img2,
                likes:randomlikecomment(10,1000),
                comments:randomlikecomment(10,1000),
                location:'california Switzerland',
                description:'casual Ride on Swss looks like Thankyou'

            },
            {
                id:3,
                img:img3,
                likes:randomlikecomment(10,1000),
                comments:randomlikecomment(10,1000),
                location:'california ',
                description:'casual Ride on Swss looks like Thankyou'

            },
            {
                id:4,
                img:img4,
                likes:randomlikecomment(10,1000),
                comments:randomlikecomment(10,1000),
                location:'califor zerland',
                description:'casual Ride on Swss looks like Thankyou'

            },
            {
                id:5,
                img:img5,
                likes:randomlikecomment(10,1000),
                comments:randomlikecomment(10,1000),
                location:'carland',
                description:'casual Ride on Swss looks like Thankyou'

            },
            {
                id:6,
                img:img6,
                likes:randomlikecomment(10,1000),
                comments:randomlikecomment(10,1000),
                location:'caliSwitzerland',
                description:'casual Ride on Swss looks like Thankyou'

            }
        ]
    }
    
}
export const detailsSlice=createSlice({
    name:'details',
    initialState:{value:initialStateValue},
    reducers:{
        userdetails:(state)=>{
            state.value=initialStateValue;
        },
    },
});
export const {userdetails}=detailsSlice.actions;
export default detailsSlice.reducer;