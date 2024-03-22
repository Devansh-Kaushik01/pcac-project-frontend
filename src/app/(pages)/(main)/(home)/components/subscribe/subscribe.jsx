"use client"
import SubscribeImg from "../../../../../../assets/images/subscribeimg.jpg"
import Image from "next/image"
import DefaultInput from "../../../../components/defaultInput/defaultInput"
import SubscribeBlurImg from "../../../../../../assets/images/subscribeBlurImg.jpg"
import DefaultButton from "@/app/(pages)/components/defaultbutton/defaultbutton"

const Subscribe = () => {
    return (
        <div className="relative mt-20">
            <Image
                src={SubscribeImg}
                alt="subscribeImg"
                className="w-full "
            />
            <Image
                src={SubscribeBlurImg}
                alt="subscribeBlurImg"
                className="absolute top-20 left-24"
            />
            <div className="w-full absolute top-28 flex flex-col gap-5 justify-center items-center ">
                <h2 className="text-white text-5xl">Subscribe</h2>
                <p className="text-white text-lg">Subscribe our newsletter too stay updated every moment.</p>
                <div className="flex gap-2">
                    <DefaultInput
                        classNames={'p-2 !bg-white text-black w-[300px] !rounded-lg'}
                    />
                    <DefaultButton classNames={"bg-blue text-white !h-10 rounded-lg"}>
                        Submit
                    </DefaultButton>
                </div>

            </div>
        </div>
    )
}
export default Subscribe;