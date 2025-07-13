import React from 'react'
import { useSelector } from 'react-redux';
import { lang } from '../utils/languageConstants';


const GptSearchBar = () => {

 const langKey = useSelector(store=>store.config.lang);

  return (
    <div className="mt-[10%] justify-items-center" >
      <form className="bg-black text-white w-1/2 grid grid-cols-12 rounded-md">
        <input
          className="col-span-9 p-4 m-4 "
          type="text"
          placeholder={lang[langKey].gptSearchText}
        />
        <button className="bg-red-700 col-span-3 m-4 py-4 px-2 rounded-lg">{lang[langKey].search}</button>
      </form>
    </div>
   
  );
}

export default GptSearchBar;


 