"use client"
import React from "react";
import {
    Drawer,
    IconButton,
} from "@material-tailwind/react";
import {CgMenuRight, CgMenuRightAlt} from "react-icons/cg";
import DefaultButton from "../../../components/defaultbutton/defaultbutton";
import Logo from '../../../../../assets/logo/logo.png';
import {IoMdClose} from "react-icons/io";
import Link from "next/link"
import Image from 'next/image'

const MainDrawer = ({}) => {
    const menuItems = [
        {name: "Home", active: true, link: "/"}, {name: "About", link: "/about"}, {name: "What We Do?", link: "/about"},
        {name: "Ongoing Trials", link: "/about"}, {name: "Contact", link: "/about"}, {
            name: "Login",
            link: "/auth/login"
        }
    ]
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <React.Fragment>
            <DefaultButton
                onPress={openDrawer}
                classNames={"lg:hidden p-0 w-10 h-10 flex justify-center items-center !text-black"}
            >
                {open ?
                    <CgMenuRightAlt className={"text-black text-xl"}/>
                    :
                    <CgMenuRight className={"text-black text-xl "}/>
                }
            </DefaultButton>
            <Drawer open={open} onClose={closeDrawer} className="p-4">
                <div className="mb-6 flex items-center justify-between">
                    <Link href={"/"}>
                        <Image src={Logo} alt={"logo"}/>
                    </Link>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer} className="">
                        <IoMdClose size={18}/>
                    </IconButton>
                </div>
                <div className="mb-8 pr-4 font-normal">
                    <div className='flex flex-col gap-7'>
                        {menuItems.map((item, index) => {
                            return (
                                <Link href={item.link}
                                      className={`${item.active === true ? "font-bold" : "font-normal"}`}
                                      key={index}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="">
                    <DefaultButton classNames={"text-white bg-blue "}>
                     Login
                    </DefaultButton>
                </div>
            </Drawer>
        </React.Fragment>
    );
}

export default MainDrawer;