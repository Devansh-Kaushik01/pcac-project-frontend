"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton";
import Image from 'next/image'
import ExploreImg1 from "../../../../../../assets/images/exploreimg1.jpg"
import ExploreImg2 from "../../../../../../assets/images/exploreimg2.jpg"
import ExploreCard from "./components/exploreCard"

const exploredata = [
    {
        serialno: "01",
        heading: "Pioneer In Everything"
    },
    {
        serialno: "02",
        heading: "Empowering Talent",
    },
    {
        serialno: "03",
        heading: "Strive For Excellence",
    }
]

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
            <div className="grid grid-cols-[30%_auto] mt-6 gap-4 ">
                <Image
                    src={ExploreImg1}
                    alt="ExploreImg1"
                />
                <Image
                    src={ExploreImg2}
                    alt="ExploreImg2"
                />
            </div>
            <div className='lg:grid grid-cols-3 mt-10'>
                {exploredata.map((item, index) => {
                    return (
                        <ExploreCard
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Explore;