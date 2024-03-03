import React from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mardanmahmut7@gmail.com?subject={formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`;
  };

  return (
    <div className="kunaiCursor h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="narutoTextName absolute top-24 uppercase tracking-[5px] md:tracking-[20px] text-4xl md:text-4xl lg:text-5xl">
            Contact
        </h3>

        <div className="flex flex-col mt-10 space-y-4 md:space-y-5 lg:space-y-6 2xl:space-y-10">
            <h4 className="ninjaText text-sm sm:text-lg md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center text-[#fff]">
                I got the skills to pay the bills.{" "}
                <span className="decoration-[#0c2fdf] underline text-[#000]">Lets Talk.</span>
            </h4>

            <div className="space-y-1 md:space-y-3 xl:space-y-5">
                <div className="flex items-center space-x-2 md:space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#000] h-7 w-7 animate-pulse"/>
                    <p className="ninjaText text-sm sm:text-lg md:text-2xl lg:text-2xl tracking-[2px] text-[#fff]">
                        mardanmahmut7@gmail.com
                        </p>
                </div>
                <div className="flex items-center space-x-2 md:space-x-5 justify-center">
                    <MapPinIcon className="text-[#000] h-7 w-7 animate-pulse"/>
                    <p className="ninjaText text-sm sm:text-lg md:text-2xl lg:text-2xl tracking-[2px] text-[#fff]">
                        San Francisco, California
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-64 md:w-fit mx-auto">
                <div className="md:flex md:space-x-2 space-y-2 md:space-y-0">
                    <input 
                        {...register('name')} 
                        placeholder="Name" 
                        className="ninjaText text-[#00bfff] kunaiCursor contactInput w-64 md:w-auto" 
                        type="text" 
                    />
                    <input 
                        {...register('email')} 
                        placeholder="Email"
                        className="ninjaText text-[#00bfff] kunaiCursor contactInput w-64 md:w-auto" 
                        type="email" 
                    />
                </div>

                <input 
                    {...register('subject')}
                    placeholder="Subject" 
                    className="ninjaText text-[#00bfff] kunaiCursor contactInput" 
                    type="text" 
                />

                <textarea 
                    {...register('message')} 
                    placeholder="Message" 
                    className="ninjaText text-[#00bfff] kunaiCursor contactInput" 
                />
                <button className="bg-[#0c2fdf]/50 narutoText2 rasenganCursor tracking-[4px] py-3 md:py-5 px-10 rounded-br-3xl text-[#ff4500] font-bold text-2xl md:text-4xl hover:narutoText hover:text-[#0c2fdf] hover:bg-[#FF4500]/70">
                    {" "}
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}