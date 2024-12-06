import React from 'react'
import Image from 'next/image';
const testimonials =
 [ 
    { name: 'Sara Smith', title: 'Web Developer', testimonial: 'The courses offered by Ddsgnr have helped me advance my career. The instructors are knowledgeable and the content is top-notch.', image: 'img/AvatarImage1.png' , icon: '/img/5Stars.png' },
     { name: 'John Doe', title: 'Graphic Designer', testimonial: 'I love the flexibility of being able to learn at my own pace. The variety of courses available is impressive and I have learned so much.', image: 'img/AvatarImage2.png', icon: '/img/5Stars.png'  }, 
    { name: 'Emily Davis', title: 'Marketing Specialist', testimonial: 'The courses are well-structured and easy to follow. I have gained valuable skills that have helped me in my job.', image: 'img/AvatarImage3.png' , icon: '/img/5Stars.png'  }, ];

const Testimonials = () => {
  return (
    <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-[48px] text-[#000000] font-bold tracking-wide leading-[57.6px] text-start'>Coustomer Testimonials</h2>
            <p className='mt-2 text-lg leading-[27px] font-normal tracking-tight text-[#000000] text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 border-black'>
             {testimonials.map((testimonials)=>(
                <div key={testimonials.name} className='p-6 bg-white shadow-sm border border-[#000000] border-solid'>
                {/* Rating Image */}
                <div className='flex justify-center'>
                  <Image 
                    src={testimonials.image  } 
                    alt="Rating" 
                    width={24} // Set appropriate width for the rating icon
                    height={24} // Set appropriate height for the rating icon
                  />
                </div>
                
                {/* Testimonial Text */}
                <p className='mt-4 font-normal text-[18px] text-start leading-[27px] text-[#000000]'>
                  "{testimonials.testimonial}"
                </p>
              
                {/* User Information */}
                <div className='flex items-center space-x-4 p-4'>
                  {/* Profile Image */}
                  {/* <Image 
                    src={testimonials.image} 
                    alt={testimonials.name} 
                    width={64} // Set appropriate width for the profile image
                    height={64} // Set appropriate height for the profile image
                    className='rounded-full object-cover' 
                  /> */}
                  
                  <div className='text-start'>
                    <h4 className='text-[16px] font-semibold text-[#000000] leading-[24px]'>
                      {testimonials.name}
                    </h4>
                    <p className='text-[16px] font-normal leading-[24px]'>{testimonials.title}</p>
                  </div>
                </div>
              </div>
               ))}   
                </div>
        </div>
    </section>
 )
}

export default Testimonials
