import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/shaid85')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className='bg-gray-600 text-white text-2xl p-4'>
            <div className="py-2">
            Github Followers:  { data.followers }
            </div>
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    </div>
  )
}

export default Github
 
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shaid85')
    return response.json()
}