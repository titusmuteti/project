import React from 'react'

const Home = () => {
  return (
    <>
    <div className='home mt-10'>
      <img className='inline-block ml-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC-9OSf41AWvLERVefeZdV1FKvWc6SDqdXA&usqp=CAU" alt="" />
      <h1 className='text-white text-9xl italic py-10 mt-0 inline-block'>
        Your One Stop shop
      </h1>
    </div>

    <div className='place-item-center pl-60 pr-80 mt-20 ml-48 mb-52'>
    <form>
      <label >
        USERNAME:
      </label><br/>
        <input type="text" placeholder='username' className='border-4 border-black' /><br/>
          
      <label >
        PASSWORD:
      </label><br/>
        <input type="alphanumeric" placeholder='password' className='border-4 border-black' /><br/>

         
      <input className='bg-indigo-200 mt-10 text-2xl ml-10' type="submit" value="Login"/>
      </form>

      <a href='/' className='text-teal-600 underline'> Don't have an account? SignUp</a>
    </div>

    

    </>
  )
}

export default Home;