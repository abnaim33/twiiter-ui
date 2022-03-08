
function Trending() {
    return (
        <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
            <div className="space-y-0.5">
                <p className="text-[#6e767d] text-xs font-medium">
                    breking news
                </p>
                <h6 className="font-bold max-w-[250px] text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, optio.
                </h6>
                <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
                    Trending with{" "}

                    <span className="tag">news</span>
                </p>
            </div>


        </div>
    );
}

export default Trending;