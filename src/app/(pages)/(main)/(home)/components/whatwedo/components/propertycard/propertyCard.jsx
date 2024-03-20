"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
// import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";


const PropertyCard = ({ heading,icon }) => {
    return (
        <div className="relative flex flex-col text-center mt-6 bg-white shadow-md bg-clip-border rounded-xl h-96">
            <div className="p-6">
                <button
                    class="relative my-5 w-14 h-14 border-2 border-blue hover:bg-blue text-blue hover:text-white focus:ring focus:ring-blue active:opacity-[0.85] rounded-full"
                    type="button">
                    <span class="absolute font-semibold text-xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                   {icon}
                        </span>
                 </button>
                <h5 className=" mb-2 text-2xl font-semibold uppercase">
                    {heading}
                </h5>
                <p className="font-medium text-gray mt-5  ">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour, or
                    randomised words.
                </p>
            </div>
            <div className="">
                <Link href="#" className="inline-block">
                    <DefaultButton>
                        <FaArrowRightLong className="text-blue" />
                    </DefaultButton>
                </Link>
            </div>
        </div>
    )
}
export default PropertyCard;