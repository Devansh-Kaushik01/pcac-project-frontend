"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton";
import Image from 'next/image'
import PropertyImg from "../../../../../../assets/images/propertyimg.jpg"
import Paragraph from "../about-section/components/paragraph/paragraph"
import ProfileLogo from "../../../../../../assets/logo/profilelogo.jpg"
import { MdArrowOutward } from "react-icons/md";

const AboutSection = () => {
    return (
        <div className="max-w-container mx-auto mt-20">
            <div className="lg:ml-0 ml-4">
                <h4 className="uppercase font-bold">About us</h4>
                <h2 className="mt-4 text-5xl font-medium">Setting Up Standard For</h2>
                <h2 className="mt-2 text-5xl font-medium text-gray">Tricity Properties</h2>
            </div>
            <section className=" mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                    <div className="">
                        <Image
                            src={PropertyImg}
                            alt="propertyimg"
                            className="bg-gradient-to-r from-sky-500 to-indigo-500"
                        />
                    </div>
                    <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-96 lg:absolute top-16 right-40">
                        <div className="text-black font-bold text-lg uppercase">
                            <p>Latest News</p>
                        </div>
                        <p className="my-3 text-justify font-medium text-[#595959] leading-relaxed">There are many variations of passages
                            of Lorem Ipsum available, but the majority have suffered
                            alteration in some form,by injected humour, or randomised words. </p>
                        <div className="mt-12">
                            <DefaultButton classNames={"text-black flex gap-2 text-md"}>
                                Read More <MdArrowOutward size={20} />
                            </DefaultButton>
                        </div>
                    </div>
                </section>
            </section>
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
                        <Paragraph />
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
        </div>
    )
}
export default AboutSection;