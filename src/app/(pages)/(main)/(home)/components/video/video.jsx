"use client"
import { FaPlay } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link"
import VideoImg from "../../../../../../assets/images/videoimg.jpg"
import LayerImg from "../../../../../../assets/images/layerimg.jpg"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton"

const Video = () => {
    return (
            <div className=" max-w-full relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 mt-6 ">
                <div className="relative">
                    <div className="">
                        <Image
                            src={VideoImg}
                            alt="VideoImg"
                            className="w-full h-screen absolute "
                        />
                    </div>
                    <div className="">
                    <Image
                        src={LayerImg}
                        alt="VideoImg"
                        className="w-full h-screen "
                    />
                    </div>
                </div>
                <div className="absolute top-40 left-40 text-white">
                    <div className="text-5xl w-1/2">
                        <h2 className="">Watch the video</h2>
                        <h2 className="font-extralight">to see how our team provide verified properties</h2>
                    </div>
                    <div className="mt-10">
                        <p>Still have any doubts? <Link href="/" className="underline underline-offset-4"> Contact Us</Link> and check for yourself.</p>
                    </div>
                    <div className="mt-6">
                        <DefaultButton classNames={"bg-blue"}>
                            Contact Us
                        </DefaultButton>
                    </div>
                </div>
                <div className="absolute top-60 right-96">
                    <DefaultButton
                        classNames="relative mb-5 w-20 h-20 border-2 border-blue bg-blue text-white focus:ring focus:ring-white active:opacity-[0.85] rounded-full">
                        <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-10">
                            <FaPlay size={22} />
                        </span>
                    </DefaultButton>
                </div>
            </div>
    )
}
export default Video