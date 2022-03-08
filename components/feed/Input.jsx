import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline';
import { UserIcon, XIcon } from '@heroicons/react/solid'
import React, { useRef, useState } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const Input = () => {

    const [input, setInput] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const filePickerRef = useRef(null)
    const [showEmojis, setShowEmojis] = useState(false)
    const [loading, setLoading] = useState(false)

    const sendPost = async () => {
        if (loading) return
        setLoading(true)


        const docRef = await addDoc(collection(db, "tweets"), {

            timestamp: serverTimestamp(),
        });

        const imageRef = ref(storage, `tweets/${docRef.id}/image`)


        if (selectedFile) {
            await uploadString(imageRef, selectedFile, "data_url").then(async () => {
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db, "tweets", docRef.id), {
                    image: downloadURL,
                });
            });
        }

        setLoading(false);
        setInput("");
        setSelectedFile(null);
        setShowEmojis(false);

    }




    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    }

    // this function will add multiple emoji to input value and this function is very cool and effective
    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };

    return (
        <div className={`border-b border-gray-700 p-3 flex space-x-3 
        `}>
            <UserIcon
                className="h-10 w-10 rounded-full xl:mr-2.5"
            />

            <div className="divide-y divide-gray-700 w-full">
                <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="What's happening?"
                        rows="2"
                        className="bg-transparent outline-none text-[#d9d9d9]
                         text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                    />


                    {
                        selectedFile && (

                            <div className="relative">

                                <div
                                    className="absolute w-8 h-8
                                bg-[#15181c] hover:bg-[#272c26]
                                 bg-opacity-75 rounded-full flex items-center 
                                 justify-center top-1 left-1 cursor-pointer"
                                    onClick={() => setSelectedFile(null)}
                                >
                                    <XIcon className="text-white h-5" />
                                </div>

                                <img src={selectedFile} alt="logo" className='rounded-2xl     
                                     max-h-80 object-contain' />


                            </div>
                        )
                    }


                </div>


                <div className="flex items-center justify-between pt-2 5">
                    <div className="flex items-center">
                        <div className=' icon'
                            onClick={() => filePickerRef.current.click()}>

                            <PhotographIcon className='h-[22px] text-[#1d9bf0]' />
                            <input type="file" hidden onChange={addImageToPost}
                                ref={filePickerRef} />

                        </div>

                        <div className="icon rotate-90">
                            <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
                        </div>

                        <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                            <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
                        </div>

                        <div className="icon">
                            <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
                        </div>

                        {
                            showEmojis && (
                                <Picker
                                    onSelect={addEmoji}
                                    style={{ position: 'absolute', bottom: '40px', right: 'auto' }}
                                    theme="dark" />
                            )
                        }

                    </div>

                    <button
                        className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
                        disabled={!input.trim() && !selectedFile}
                        onClick={sendPost}
                    >
                        Tweet
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Input