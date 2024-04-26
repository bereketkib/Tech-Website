import Button from "./Button"
import { logoBlack } from "../assets"


const Footer = () => {
  return (
    <section className="bg-white text-black p-10" >
        <div className="flex items-center flex-wrap w-full mb-10">
            <div >
                <h3 className="text-black font-poppins font-semibold text-[18px]">Subscribe to our newsletter</h3>
                <p className="text-emerald-900 font-poppins font-normal text-[12px] mb-4 leading-6 max-w-[350px]">Follow our groundbreaking developments and catch up with the latest news releases.</p>
            </div>
            <div className="flex-1">
                <Button content='SUBSCRIBE' customStyle='bg-slate-900 h-[70px] m-auto text-white'/>
            </div>
        </div>

        <div className="flex lg:flex-col flex-row w-full lg:items-start items-center justify-between gap-10 py-10">
            <img src={logoBlack} alt="logo" className="w-[140px] h-[80px]" />
            <p className="text-emerald-900 font-poppins font-normal text-[12px] mb-4 leading-6 max-w-[700px] lg:w-[250px]">The Computer Vision Technology (CVT) is a leading research organization that focuses on developing cutting-edge technologies to solve real-world problems.</p>
        </div>

    </section>
  )
}

export default Footer
