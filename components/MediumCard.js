import Image from 'next/image'
function MediumCard({img,title}) {
  return (
    <div>
        <div className='relative cursor-pointer h-80 w-80  hover:scale-105 transform transition duration-300 ease-out'>
                <Image 
                className='rounded-xl'
                src={img}
                layout='fill'
                />
        </div>
        <h3 className='text-2xl cursor-pointer hover:underline hover:decoration-red-500 mt-3'>{title}</h3>
      </div>
  )
}

export default MediumCard