"use client"
import GoogleplayImg from "../../../../../../assets/images/googleplay.png"
import AppstoreImg from "../../../../../../assets/images/appstore.png"
import Image from 'next/image'
import DefaultButton from "../../../../components/defaultbutton/defaultbutton";
import Image1 from "../../../../../../assets/images/image1.jpg"
import Image2 from "../../../../../../assets/images/image2.jpg"
import Image3 from "../../../../../../assets/images/image3.jpg"

const BannerSection = () => {
    return (

        <div className={"max-w-container mx-auto grid lg:grid-cols-2 mt-10 "}>
            <section className="container mx-auto lg:ml-0 ml-5 p-14 ">
                <section className="relative cursor-pointer  ">
                    <Image
                        src={Image1}
                        alt="Image1"
                        className="w-64"
                    />
                    <div className="absolute z-10 top-8 -right-2">
                        <Image
                            src={Image2}
                            alt="Image1"
                            className="rounded-2xl w-56"
                        />
                    </div>
                    <div className="absolute top-52 right-20">
                        <Image
                            src={Image3}
                            alt="Image1"
                            className=" rounded-2xl w-56"
                        />
                    </div>
                </section>
            </section>
            <div className={" h-[80vh] p-10 flex flex-col items-end banner"}>
                <div>
                    <div className="lg:text-5xl text-4xl">
                        <h1 className=" font-light">Find your dream home</h1>
                        <h1 className="font-semibold lg:my-5 my-2">with PCAC
                            <span className="text-blue font-bold">.</span>
                        </h1>
                    </div>
                    <p className="text-sm text-[#595959] mb-10">
                        If you're new to Genie or looking to supercharge your current stack,
                        this section will help learn more about the platform features.
                    </p>
                    <div>
                        <DefaultButton classNames={"text-white bg-blue"}>
                            Contact Us
                        </DefaultButton>
                    </div>
                </div>
                <div className="mt-24">
                    <h4 className="uppercase text-sm text-blue font-bold">Download app:</h4>
                    <div className="flex gap-5 mt-2">
                        <Image
                            src={GoogleplayImg}
                            alt="GoogleplayImg"
                        />
                        <Image
                            src={AppstoreImg}
                            alt="AppstoreImg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerSection