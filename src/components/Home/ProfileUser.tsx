import React from 'react'
import me from "../../../public/me.png";
import Image from 'next/image';

export default function ProfileUser() {
  return (
    <>
    <section className='flex items-center gap-4 p-4 border border-neutral-50 border-opacity-15 bg-neutral-50 bg-opacity-5 rounded-2xl backdrop-blur-sm '>
        <figure className='h-20 w-20 bg-neutral-600 rounded-full flex-shrink-0 p-2'>
            <Image src={me} className='object-cover flex-shrink-0' alt='me' />
        </figure>
        <figcaption>
            <h1 className='text-4xl leading-normal font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#18CD72] via-[#18CDB8] to-[#187CCD]'>
                Software Engineer
            </h1>
            <p className='text-xl text-neutral-300'>Mhd Ulil Abshar</p>
        </figcaption>
    </section>
    </>
  )
}
