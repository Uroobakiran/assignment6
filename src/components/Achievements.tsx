import React from 'react'

const Achievements = () => {
    const achievements = [
        {achieve:'+200', description: 'Courses'},
        { achieve: '50K', description: 'Mentors' },
        { achieve: '370K ', description: 'Students' }, 
        { achieve: '100+', description: 'Recongnition'},
    ];
  return (
    <section className='py-12 bg-white'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
            <h2 className=' w-[1152px] h-[58px] text-[48px] text-[#000000] font-[700] leading-[57.6px] tracking-wide '>Our Achievements</h2>
            <p className=' mt-2 text-xl text-center leading-[27px] font-normal tracking-tight text-[#000000] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
         {achievements.map((achievements, index)=>(
            <div key={index} className='p-6 bg-gray-100 rounded-lg shadow-sm'>
                <h3 className='w-[91px] h-[48px] text-[40px] font-bold text-[#000000] leading-[48px]'>{achievements.achieve}</h3>
                <p className='w-[60px] h-[24px] font-normal text-[16px] leading-[24px] mt-2 text-[#000000]'>{achievements.description}</p>
            </div>
         ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
