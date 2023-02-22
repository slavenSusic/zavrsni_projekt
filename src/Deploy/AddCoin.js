import React, { useRef } from 'react';
import ReleseBtn from './ReleseBtn'



function AddCoin(props) {
  const nameRef = useRef('');
  const priceRef = useRef('');
  const descriptionRef = useRef('');
  const releaseDate = useRef('');

  function submitHandler(event) {
    event.preventDefault();



    const coin = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
      releaseDate:releaseDate.current.value,

    };

    props.onAddCoin(coin);
  }

  return (
    <div class="w-full max-w-md text-center m-auto bg-gradient-to-b py-20 ">
    <form className='flex flex-col max-[638px]:px-20' onSubmit={submitHandler}>
      <div className=''>
        <label className='block text-white text-sm font-bold mb-2' htmlFor='name'>Coin name</label>
        <input className="shadow appearance-none border 
        border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none 
        focus:shadow-outline"
         type='text' id='title' ref={nameRef} />
      </div>
      <div className=" ">
        
        <label className=' text-white text-sm font-bold mb-2 ' htmlFor='price'>Coin price</label>
        <input className='"shadow appearance-none border 
        border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none 
        focus:shadow-outline' type='number' id='price' ref={priceRef} />
      </div>
      <div className="max-[638px]:px-20">
        <label className='block text-text-white text-sm font-bold mb-2' htmlFor='description'>Description</label>
        <input className='"shadow appearance-none border 
        border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none 
        focus:shadow-outline max-[638px]:bg-red-400">' type='text' id='description' ref={descriptionRef} />
      </div>
      <div className="max-[638px]:w-40">
        <label className='block text-white text-sm font-bold mb-2' htmlFor='releaseDate'>Release Date</label>
        <input className='"shadow appearance-none border 
        border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none 
        focus:shadow-outline' type='date' id='releaseDate' ref={releaseDate} />
      </div>
      <div className='flex justify-between'>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Prepare for production</button>
      <ReleseBtn onClick={props.onReleseCoin} />
      </div>
    </form>
   
  
    </div>
  );
}

export default AddCoin;
