"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton";
import Image from 'next/image'
import ExploreImg1 from "../../../../../../assets/images/exploreimg1.jpg"
import ExploreImg2 from "../../../../../../assets/images/exploreimg2.jpg"


const Explore = () => {
    return (
        <div className="max-w-container mx-auto mt-10">
            <div className="flex justify-between items-end">
                <div className="text-5xl font-medium ">
                    <h2 className="mt-4">Explore Our</h2>
                    <h2 className="mt-2 text-gray">PCAC Playbook</h2>
                </div>
                <DefaultButton classNames={"bg-blue text-white"}>
                    View All
                </DefaultButton>
            </div>
            <div className="grid grid-cols-[30%_auto] mt-6 gap-4">
                <div className="">
                   <Image
                   src={ExploreImg1}
                   alt="ExploreImg1"
                   />
                </div>
                <div className="">
                <Image
                   src={ExploreImg2}
                   alt="ExploreImg2"
                   />
                </div>
            </div>
            
        </div>
    )
}
export default Explore;