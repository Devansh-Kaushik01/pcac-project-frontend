"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton";
import Image from 'next/image'
import ProfileLogo from "../../../../../../assets/logo/profilelogo.jpg"
import { MdArrowOutward } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { RiShakeHandsLine } from "react-icons/ri";
import { IoKeyOutline } from "react-icons/io5";
import PropertyCard from "./components/propertycard/propertyCard"


const WhatWeDo = () => {
    return (
        <div className="max-w-container mx-auto ">
              <div className="grid grid-cols-2 h-[80vh]">
                <div className="p-4 mapimg flex flex-col justify-between">
                    <div className="text-5xl font-medium">
                        <h2 className="mt-4 ">We Do This</h2>
                        <h2 className="mt-2 text-5xl font-medium text-gray">For A Single Cause</h2>
                    </div>
                    <div className="text-5xl font-medium ">
                        <h2 className="mt-4">Would you like </h2>
                        <h2 className="mt-2 text-gray">to join us for?</h2>
                    </div>

                </div>
                <div className="p-4 flex flex-col justify-between items-end ">
                    <div className="">
                        <div className="flex flex-col gap-5 text-md ml-6">
                            <p>It is a long established fact that a render will be distracted by the
                                readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                letters,as opposed to using!
                            </p>
                            <p>
                                Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web pageike.
                            </p>
                            <p>
                                Many desktop publishing packages and web page editors now use
                                ipsum' will uncover many web sites still in their infancy.
                            </p>
                        </div>
                        <div className="mt-6">
                            <DefaultButton classNames={"text-black flex gap-2 text-md font-semibold"}>
                                Read Our Menifesto <MdArrowOutward size={20} />
                            </DefaultButton>
                            <div className="ml-5 flex mt-5">
                                <Image
                                    src={ProfileLogo}
                                    alt="ProfileLogo"
                                    className="cursor-pointer"
                                />
                                <div className="ml-5 cursor-pointer">
                                    <h3 className="font-semibold">Kamal Gupta</h3>
                                    <h3 className="font-light text-gray">President (PCAC) </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex ">
                        <DefaultButton classNames={"text-white bg-blue"}>
                            Contact Us
                        </DefaultButton>
                    </div>
                </div>
            </div>
            <div className="flex gap-10 ">
                    <PropertyCard
                    heading={"Buy property"}
                    icon={<GoHome size={25} />}/>
                    <PropertyCard
                    heading={"sell property"}
                    icon={<RiShakeHandsLine size={25}/>}/>
                    <PropertyCard
                    heading={"rent property"}
                    icon={<IoKeyOutline size={25}/>}
                    />
                </div>
        </div>
    )
}
export default WhatWeDo;