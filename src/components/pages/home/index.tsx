"use client"
import { Container } from "../../shared"
import Link from "next/link"
const LandingPage = () => {
    return (
        <header>
            <Container>
                <div className="header-inner py-[80px] md:py-[150px] w-full flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-0">
                    <div className="header-text-cont w-full lg:w-auto text-center lg:text-left">
                        <h2 className="text-[48px] md:text-[80px] lg:text-[100px] font-semibold mb-[20px] md:mb-[30px] leading-[1.1] md:leading-none">Read Write and Create</h2>
                        <h4 className="text-[16px] md:text-[20px] font-light mb-[30px] px-4 lg:px-0">Bring your ideas to life, share your thoughts and inspire lives.</h4>
                        <Link href="/latest-stories" className="inline-block bg-[#2E2E2E] py-[12px] md:py-[15px] px-[40px] md:px-[50px] text-[#fff] rounded-[20px] hover:bg-[#404040] transition-colors">
                            Get started
                        </Link>
                    </div>
                    <div className="header-image-cont w-full lg:w-[60%] flex justify-center lg:justify-end">
                        <img src="/images/writer.png" alt="Writer" className="w-[80%] md:w-full h-auto max-h-[300px] md:max-h-[500px] object-contain" />
                    </div>
                </div>
            </Container>
        </header>
    )
}
export default LandingPage