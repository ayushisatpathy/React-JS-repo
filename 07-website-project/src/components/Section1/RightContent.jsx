// import React from 'react'
// import RightCard from './RightCard'

// const RightContent = (props) => {

//   return (

//     <div
//       id='right'
//       className='h-full w-[60%] flex gap-8 overflow-x-auto overflow-y-hidden whitespace-nowrap px-4'
//     >

//       {props.users.map((elem, idx) => {

//         return (
//           <RightCard
//             key={idx}
//             color={elem.color}
//             id={idx}
//             img={elem.img}
//             tag={elem.tag}
//           />
//         )

//       })}

//     </div>
//   )
// }

// export default RightContent
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users.color);
  
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
        {props.users.map(function(elem,idx){

          return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent