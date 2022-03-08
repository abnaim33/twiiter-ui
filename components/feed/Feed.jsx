import { SparklesIcon } from '@heroicons/react/solid'
import React from 'react'
import Input from './Input'
import Post from './Post';
import Image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'
const posts = [

    {
        id: "3",
        username: "ab naim khan",
        tag: "naim",
        image: Image3,
        text: "this is the caption",
        likes: 10,
        comment: 5
    },
    {
        id: "4",
        username: "ab naim khan",
        tag: "naim",
        image: image4,
        text: "this is the caption",
        likes: 10,
        comment: 5
    }
]

const Feed = () => {


    return (
        <div className='text-white flex-grow border-1 border-r border-gray-700
    max-w-2xl sm:ml-[70px] xl:ml-[370px]' >
            <div className="text-[#d9d9d9] flex items-center sm:justify-between
         py-2 px-3 sticky top-0 z-50 bg-black
         border-b border-gray-700">
                <h2 className="text-lg sm:text-xl font-bold">Home</h2>
                <div className='hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0
                ml-auto'>
                    <SparklesIcon className='h-5 text-white' />
                </div>
            </div>


            <Input />
            <div className="pb-72">
                {posts.map((post) => (
                    <Post key={post.id} id={post.id} post={post} />
                ))}
            </div>


        </div>
    )
}

export default Feed