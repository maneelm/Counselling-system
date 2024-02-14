import React from 'react'
import Hello from './Hello'
import Class from './Class'
import Message from './Message'
import Counter from './Counter'
import DataFetch from './DataFetch'
import FetchRegistrations from './FetchRegistrations'
export const Home = () => {
  const products=[
    {id:1,name:'product A',price: 10},
    {id:2,name:'product B',price:20},
  ];
  return (
    <div>
      {/* <FetchRegistrations/> */}
      {/* <Message/>
      // {/*<Hello name= 'maneel' id='33'/>
      // <Class name= 'rahul' id ='11'/>*/}
      {/* // <Counter/>
      // <Hello products={products}/>  */}
      <DataFetch/>
    </div>
  )
}
export default Home