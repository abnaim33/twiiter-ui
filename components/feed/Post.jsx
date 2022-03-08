
import {
    ChartBarIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    ShareIcon,
    SwitchHorizontalIcon,
    TrashIcon,
    UserIcon,
} from "@heroicons/react/outline";
import {
    HeartIcon as HeartIconFilled,
    ChatIcon as ChatIconFilled,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";


function Post({ post, postPage }) {

    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);



    return (
        <div
            className="p-3 flex cursor-pointer border-b border-gray-700"
        >
            {!postPage && (

                <UserIcon className="h-7 w-7 mr-1" />
            )}
            <div className="flex flex-col space-y-2 w-full">
                <div className={`flex ${!postPage && "justify-between"}`}>
                    {postPage && (

                        <UserIcon className="h-7 w-7" />
                    )}
                    <div className="text-[#6e767d]">
                        <div className="inline-block group">
                            <h4
                                className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${!postPage && "inline-block"
                                    }`}
                            >
                                {post?.username}
                            </h4>
                            <span
                                className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}
                            >
                                @{post?.tag}
                            </span>
                        </div>
                        ·{" "}
                        <span className="hover:underline text-sm sm:text-[15px]">
                            12.00 pm
                        </span>
                        {!postPage && (
                            <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                                {post?.text}
                            </p>
                        )}
                    </div>
                    <div className="icon group flex-shrink-0 ml-auto">
                        <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
                    </div>
                </div>
                {postPage && (
                    <p className="text-[#d9d9d9] mt-0.5 text-xl">{post?.text}</p>
                )}
                <div className="w-[500px]">

                    <Image src={post?.image}
                        height={400} width={700}
                        alt="post image2"
                        className="rounded-2xl max-h-[700px] object-cover mr-2"
                    />
                </div>
                <div
                    className={`text-[#6e767d] flex justify-between w-10/12 ${postPage && "mx-auto"
                        }`}
                >
                    <div
                        className="flex items-center space-x-1 group"

                    >
                        <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
                            <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
                        </div>
                        {post.comment > 0 && (
                            <span className="group-hover:text-[#1d9bf0] text-sm">
                                {post.comment}

                            </span>
                        )}
                    </div>



                    <div className="flex items-center space-x-1 group">
                        <div className="icon group-hover:bg-green-500/10">
                            <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
                        </div>
                    </div>


                    <div
                        className="flex items-center space-x-1 group"

                    >
                        <div className="icon group-hover:bg-pink-600/10">
                            {liked ? (
                                <HeartIconFilled onClick={() => setLiked(!liked)} className="h-5 text-pink-600" />
                            ) : (
                                <HeartIcon onClick={() => setLiked(!liked)} className="h-5 group-hover:text-pink-600" />
                            )}
                        </div>
                        {likes.length > 0 && (
                            <span
                                className={`group-hover:text-pink-600 text-sm ${liked && "text-pink-600"
                                    }`}
                            >
                                {likes.length}
                            </span>
                        )}
                    </div>

                    <div className="icon group">
                        <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
                    </div>
                    <div className="icon group">
                        <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;