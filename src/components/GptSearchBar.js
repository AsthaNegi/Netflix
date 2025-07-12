import React from 'react'

const GptSearchBar = () => {
  return (
    <div className="mt-[10%] justify-items-center" >
      <form className="bg-black text-white w-1/2 grid grid-cols-12 rounded-md">
        <input
          className="col-span-9 p-4 m-4 "
          type="text"
          placeholder="What's on your mind?"
        />
        <button className="bg-red-700 col-span-3 m-4 py-4 px-2 rounded-lg">Search</button>
      </form>
    </div>
   
  );
}

export default GptSearchBar;


 