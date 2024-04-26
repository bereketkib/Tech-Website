import Button from "./Button"
import { news } from "../constants"


const News = () => {
  return (
    <section className="bg-gray-200">
        <div className="flex lg:flex-row items-start lg:gap-0 gap-4 flex-col lg:items-center justify-between py-14 lg:px-14 sm:px-32 px-10">
            <h2 className="text-black font-poppins font-bold text-[24px]">Latest News</h2>
            <p className="text-emerald-900 font-poppins font-normal text-[12px] leading-6 max-w-[300px]">Follow our groundbreaking developments and catch up with the
            latest news releases.</p>
            <Button content='All News' customStyle='bg-white text-black' isArrow />

        </div>

        <div className="flex flex-wrap items-start justify-between pt-14 pb-4 lg:px-14 px-10">
            {news.map((item) => (
                <div key={item.id} className="py-2 md:w-[200px] w-full flex flex-col md:h-[300px] h-[200px] justify-between cursor-pointer">
                    <div >
                        <hr className="my-4 border-1 border-gray-500"/>
                        <p className="text-emerald-900 font-poppins font-normal text-[12px] mb-4 leading-6 truncate">{item.source}</p>
                        <h3 className="text-black font-poppins font-semibold text-[18px] line-clamp-5">{item.content}</h3>
                    </div>
                    <p className="text-emerald-900 font-poppins font-normal text-[12px] mb-4 leading-6">{item.date}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default News
