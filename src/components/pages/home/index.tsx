"use client"
import { Container } from "../../shared"
import Link from "next/link"
const LandingPage = () => {
    return (
        <header>
            <Container>
                <div className="header-inner py-[150px] w-[100%] flex justify-start items-center">
                    <div className="header-text-cont w-[auto]">
                       <h2 className="text-[100px] font-[600] mb-[30px] leading-none">Read Write and Create</h2>
                       <h4 className="text-[20px] font-[300] mb-[30px]">Bring your ideas to life, share your thoughts and inspire lives.</h4>
                       <Link href="#" className="bg-[#2E2E2E] py-[15px] px-[50px] text-[#fff] rounded-[20px]">
                         Get started
                       </Link>
                    </div>
                    <div className="header-image-cont w-[60%]">
                        <img src="/images/writer.png" alt="" className=" w-[100%] h-[500px]"/>
                    </div>
                </div>
            </Container>
        </header>
    )
}
export default LandingPage