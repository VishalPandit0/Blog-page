import React from 'react'

const LoginModel = ({isModelopen,isModelclose}) => {
  return (
    <div  className={`fixed  mt-3  w-full flex item-center justify-center ${isModelopen?"":"hidden"} `}>
        <div className='model-container'>
            <div className='bg-blue-800 rounded text-center p-5 h-96 lg:w-[500px] '>
              <h2 className='text-xl text-white font-semibold mt-6 mb-4 uppercase'>Please Login here!</h2>
              <form action="">
               <input type="email" name='email' placeholder='admin@gmail.com' className=' p-2 mb-3 w-full rounded-md border focus:outline-none bg-white text-gray-600 text-base font-medium border-blue-500 focus:shadow-sm' />
              <input type="pasword" name='pasword' placeholder='Password' className=' p-2 mb-2 w-full rounded-md border focus:outline-none bg-white text-gray-600 text-base font-medium border-blue-500 focus:shadow-sm' />
                 <div>
                  <button className='bg-[#6a64f1] text-base px-6 py-2 mt-3 font-medium rounded hover:bg-green-500 transition-all duration-2s ease-in'>Login</button>
                 </div>
              </form>
              <div>
                <button onClick={isModelclose} className='bg-[#c0bcbcc1] text-base px-6 py-2 rounded font-medium mt-3 hover:bg-white hover:text-black'>Close</button>
              </div>


            </div>

        </div>
      
    </div>
  )
}

export default LoginModel
