import React from 'react'
import Image from 'next/image';
const Categoty = () => { 
    const categories = [
        { image:'/img/category1.png' , name: 'Design & Developent', courses: '50+'},
        { image:'/img/category2.png' , name: 'Marketing', courses: '50+'},
        { image:'/img/category3.png' , name: 'Development', courses: '50+'},
        { image:'/img/category4.png' , name: 'Communication', courses: '50+'},
        { image:'/img/category5.png' , name: 'Digital Marketing', courses: '50+'},
        { image:'/img/category6.png' , name: 'Self Development', courses: '50+'},
        { image:'/img/category7.png' , name: 'Business', courses: '50+'},
        { image:'/img/category8.png' , name: 'Finance', courses: '50+'},
        { image:'/img/category9.png' , name: 'Consulting', courses: '50+'},
    ];
  return (
    <section className='py-12 bg-white text-center justify-center' >

        <div className='flex p-6 items-center justify-between bg-[#f7f7f7] w-[1280px] h-[228px] top-[1038px] left-[100px] pt-[80px] pr-[64px] pb-[80px] pl-64px gap-[64px]'>
            <h2 className=' w-[320px] h-[68px] font-bold leading-[33.6px] text-base text-[#000000] uppercase'>Trusted by 2000+ companies worldwide</h2>
            <div className=' flex w-[880px] h-[56px] pt-[8.74px] pb-[8.74px] gap-[19.12px]'>
            <img src="/img/logo1.png" alt="logo" />
            <img src="/img/logo2.png" alt="logo" />
            <img src="/img/logo3.png" alt="logo" />
            <img src="/img/logo4.png" alt="logo" />
            <img src="/img/logo5.png" alt="logo" />
            <img src="/img/logo6.png" alt="logo" />
            </div>
        </div>
        <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white w-[1280px] h-[1049px] pt-[112px] pr-[64px] pb-[112px] pl-[64px] gap-[80px]'>
        <div className='w-[768px] h-[109px] text-center bg-[#ffffff] '>
            <h3 className='w-[768px] h-[58px] text-5xl leading-[57.6px] text-center justify-center font-bold tracking-tight text-[#000000]'>Explore Courses By Category</h3>
            <p className='w-[768px] h-[24px] mt-2 max-w-2xl text-lg font-normal leading-[27px] text-[#000000] lg:mx-auto'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
        <div className=' w-[1280px] h-[636px] mt-10 grid grid-cols-1 gap-6 bg-[#fffff] sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6'>
            {categories.map((Categoty)=>(
                <div key={Categoty.name} className='flex p-6 items-center bg-[#f7f7f7] space-x-4 border-gray-200  shadow-sm'>
                     <Image 
          src={Categoty.image} 
          alt="icons" 
          width={50}
          height={50} 
          layout="intrinsic" 
        />
                  <div className='text-start'>
                  <h4 className='text-lg font-semibold text-gray-900'>{Categoty.name}</h4>
                  <p className='text-sm text-gray-600'>{Categoty.courses} Courses Available</p>
                    </div>  
                </div>
            ))}
        
        <div className='text-center'>
            <button className='py-2 px-4 bg-white text-black border border-solid border-black font-semibold '>View All Courses</button>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Categoty