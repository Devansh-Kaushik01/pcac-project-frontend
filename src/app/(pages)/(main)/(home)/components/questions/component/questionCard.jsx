"use client"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io";

const QuestionCard = ({ item }) => {
    return (
        <div className="relative flex w-80 ">
            <Link href={item.link}>
                <div className="flex justify-between border-b border-gray w-[550px] py-5 font-semibold text-xl items-center">
                    {item.heading}
                    <IoIosArrowForward />
                </div>
            </Link>
        </div>
    )
}
export default QuestionCard;