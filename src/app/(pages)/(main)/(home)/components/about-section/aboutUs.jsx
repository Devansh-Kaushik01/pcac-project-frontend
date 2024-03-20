"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton";
import Image from 'next/image'
import PropertyImg from "../../../../../../assets/images/propertyimg.jpg"
import ProfileLogo from "../../../../../../assets/logo/profilelogo.jpg"
import { MdArrowOutward } from "react-icons/md";

const AboutUs = () => {
    return (
        <div className="max-w-container mx-auto mt-20">
            <div className="lg:ml-0 ml-4">
                <h4 className="uppercase font-bold">About us</h4>
                <h2 className="mt-4 text-5xl font-medium">Setting Up Standard For</h2>
                <h2 className="mt-2 text-5xl font-medium text-gray">Tricity Properties</h2>
            </div>
            <section className=" mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                    <div className="relative">
                        <Image
                            src={PropertyImg}
                            alt="propertyimg"
                            className="bg-gradient-to-r from-sky-500 to-indigo-500"
                        />
                        <div className="absolute -right-1 h-[68vh] top-0 bg-blue opacity-75 w-80 float-end">
                         
                        </div>
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
        </div>
    )
}
export default AboutUs;