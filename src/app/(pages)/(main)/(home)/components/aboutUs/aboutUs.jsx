"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton";
import Image from 'next/image'
import BlurImg from '../../../../../../assets/images/blurimg.jpg'
import PropertyImg from "../../../../../../assets/images/propertyimg.jpg"
import { MdArrowOutward } from "react-icons/md";

const AboutUs = () => {
    return (
        <div className="max-w-container mx-auto mt-20">
                <h4 className="uppercase font-bold">About us</h4>
                <h2 className="mt-4 text-5xl font-medium">Setting Up Standard For</h2>
                <h2 className="mt-2 text-5xl font-medium text-gray">Tricity Properties</h2>
            <section className=" mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <div className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                    <div className="relative">
                        <Image
                            src={PropertyImg}
                            alt="propertyimg"
                        />
                        <Image
                            src={BlurImg}
                            alt="BlurImg"
                            className="absolute top-0 -right-0 h-full"
                        />
                    </div>
                    
                    <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-96 lg:absolute top-16 right-40">
                        <div className="text-black font-bold text-lg uppercase">
                            <p>Latest News</p>
                        </div>
                        <p className="my-3 text-justify font-medium text-lightgray leading-relaxed">There are many variations of passages
                            of Lorem Ipsum available, but the majority have suffered
                            alteration in some form,by injected humour, or randomised words. </p>
                        <div className="mt-6">
                            <DefaultButton anchor={true} onPress={"/"} classNames={"!text-black flex gap-2 text-md !px-0"}>
                                Read More <MdArrowOutward size={20} />
                            </DefaultButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AboutUs;