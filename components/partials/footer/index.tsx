import React from 'react'
import FooterContent from './footer-content'
import { Link } from "@/components/navigation"
import Image from 'next/image'
import { Icon } from "@/components/ui/icon";


const DashCodeFooter = async () => {

    return (
        <FooterContent>
            <div className=' md:flex  justify-between text-default-600 hidden'>
                <div className="text-center ltr:md:text-start rtl:md:text-right text-sm">
                    COPYRIGHT &copy; {new Date().getFullYear()} Avond Studio, All rights Reserved
                </div>
                <div className="ltr:md:text-right rtl:md:text-end text-center text-sm">
                    Any Problem ? Contact : {" "}
                    <a
                        href="https://avondstudio.com/"
                        target="_blank"
                        className="text-primary font-semibold"
                    >
                        Avond Studio
                    </a>
                </div>
            </div>

        </FooterContent>
    )
}

export default DashCodeFooter