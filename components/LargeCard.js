import Image from "next/image"
export default function LargeCard({img,title,description,buttonText}) {
  return (
    <section className="relative py-16 ">
        <div className="relative h-96 min-w-[300px] a cursor-pointer">
            <Image
            className="rounded-2xl touch-auto" 
            src={img}
            layout='fill'
            objectFit="cover"
            />
        </div>
        <div className="absolute top-1/3 left-12">
            <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl mb-3 w-64">{title}</h3>
            <p>{description}</p>

            <button className="text-sm text-white  bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
        </div>
    </section>
  )
}
