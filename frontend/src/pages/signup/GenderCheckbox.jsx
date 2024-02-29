import React from 'react'

const GenderCheckbox = ({onCheckboxChange, slectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`cursor-pointer label gap-2 ${slectedGender === "male" ? "selected" : ""}`} >
                <span className='label-text'>Male</span>
                <input type='checkbox' className='checkbox border-slate-900' 
                    checked={slectedGender === "male"}
                    onChange={() => onCheckboxChange("male")}
                />
            </label>
        </div>
        <div className='form-control'>
            <label className={`cursor-pointer label gap-2 ${slectedGender === "female" ? "selected" : ""}`}>
                <span className='label-text'>Female</span>
                <input type='checkbox' className='checkbox border-slate-900' 
                    checked={slectedGender === "female"}
                    onChange={() => onCheckboxChange("female")}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox


// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className='cursor-pointer label gap-2'>
//                 <span className='label-text'>Male</span>
//                 <input type='checkbox' className='checkbox border-slate-900' />
//             </label>
//         </div>
//         <div className='form-control'>
//             <label className='cursor-pointer label gap-2'>
//                 <span className='label-text'>Female</span>
//                 <input type='checkbox' className='checkbox border-slate-900' />
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox