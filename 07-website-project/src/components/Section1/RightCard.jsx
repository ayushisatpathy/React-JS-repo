// import RightCardContent from './RightCardContent'

// const RightCard = (props) => {

//     return (

//         <div className='relative min-w-[320px] h-full rounded-3xl overflow-hidden shrink-0'>

//             <img
//               className='h-full w-full object-cover'
//               src={props.img}
//               alt=""
//             />

//             <RightCardContent
//               color={props.color}
//               id={props.id}
//               tag={props.tag}
//             />

//         </div>
//     )
// }

// export default RightCard
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.color);
    
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardContent color={props.color} id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard