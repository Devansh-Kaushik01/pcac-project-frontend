"use client"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton";
import { FaArrowRightLong } from "react-icons/fa6";

const PropertyCard = ({ item }) => {
    return (
        <div className="relative flex flex-col items-center text-center mt-6 bg-white shadow-md bg-clip-border rounded-xl h-96">
            <div className="p-6">
                <DefaultButton
                    classNames="relative mb-5 w-14 h-14 border-2 border-blue hover:bg-blue text-blue hover:text-white focus:ring focus:ring-blue active:opacity-[0.85] rounded-full">
                    <span className="absolute font-semibold text-xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        {item.icon}
                    </span>
                </DefaultButton>
                <h4 className=" mb-2 text-2xl font-semibold uppercase">
                    {item.title}
                </h4>
                <p className="font-medium text-gray mt-5  ">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour, or
                    randomised words.
                </p>
            </div>
            <DefaultButton anchor={true} onPress={"/"}>
                <FaArrowRightLong className="text-blue" size={20} />
            </DefaultButton>
        </div>
    )
}
export default PropertyCard;