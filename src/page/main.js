import React from 'react';
import List from './list';
 
const Main = props => {
    const arr = [
        {
            id  : 0,
            title : "첫번째 게시글입니다",
            date : "2020-10-25",
            cnt : 6
        },
        {
            id  : 1,
            title : "첫번째 게시글입니다",
            date : "2020-10-25",
            cnt : 6
        },
    ]
  return (
    <div className='container'>
      <List row = {['글번호', '제목', '등록일', '조회수']}>
        {arr}  
      </List> 
      
    </div>
    
  )
}
 
export default Main;
