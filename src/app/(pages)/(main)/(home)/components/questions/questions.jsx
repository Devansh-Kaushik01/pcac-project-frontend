"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton"
import QuestionCard from "./component/questionCard"
const questionsdata = [
    {
        heading: "What are my options?",
        link : "/"
    },
    {
        heading: "Can i switch to s different plan?",
        link : "/"
    },
    {
        heading: "Do you offer non-disclouser signature?",
        link : "/"
    },
    {
        heading: "Do you issue loans?",
        link : "/"
    },
    {
        heading: "Are there any long-terms contracts?",
        link : "/"
    }
]

const Questions = () => {
    return (
        <div className="max-w-container mx-auto grid grid-cols-2 my-10">
            <div className="flex flex-col gap-5 p-4">
                <h4 className="uppercase font-bold">Questions & Answers</h4>
                <div className="text-4xl font-medium">
                    <h2>Have any questions?</h2>
                    <h2 className="mt-2 text-gray">Find answers here.</h2>
                </div>
                <div>
                    <p className="text-sm w-4/5 text-lightgray">If you’re new to Genie or looking to supercharge your current stack, this
                        section will help you learn more about the platform and its features.</p>
                </div>
                <div>
                <DefaultButton classNames={"bg-blue text-white"}>
                    Read More
                </DefaultButton>
                </div> 
            </div>
            <div className='lg:grid  '>
                {questionsdata.map((item, index) => {
                    return (
                        <QuestionCard
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Questions