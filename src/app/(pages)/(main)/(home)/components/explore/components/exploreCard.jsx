"use client"

const ExploreCard = ({ item }) => {
    return (
        <div className="relative flex flex-col w-80 ">
                <h3 className="text-3xl font-normal">{item.serialno}</h3>
                <h4 className=" my-4 text-2xl font-medium">
                    {item.heading}
                </h4>
                <p className="font-medium text-gray   ">
                    We’re obsessed with creating a delightful
                    user experience for you and your team every
                    step of the way-and it shows.
                </p>
        </div>
    )
}
export default ExploreCard;