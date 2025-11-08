import { Images } from "../../src/assets"
import HowItWorks from "./HowItWorks"
import ChooseUs from "./ChooseUs"
import AuthCard from "../authPage/AuthCard"
import { useAuth } from "../../authentication/UseAuth"
const Root = () => {
    const context = useAuth()
    const user = context?.user
    console.log(user)
    return (
        <div>
            {/* this is for root hero img */}
            <div className="relative bg-linear-to-r from-[#004d54] to-[#017b77] h-[600px] flex justify-center items-center flex-col gap-[34px]">
                {
                    !user && <div className="absolute w-full -top-35">
                        <AuthCard />
                    </div>
                }
                <div className="flex flex-col gap-[19px]">
                    <div className="root_heading">
                        <h1>Reliable Laundry Pick-Up & </h1>
                        <h1>Delivery at Your Doorstep</h1>
                    </div>
                    <p className="root_text">Schedule, track, and relax — we'll handle your laundry with care.</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button className="hero_button1">Book Now</button>
                    <button className="hero_button2">View Packages</button>
                </div>
                {/* <img className="w-full lg:h-[858px]" src={Images.hero_img} alt="" /> */}
            </div>
            {/* this is for how it work section */}
            <div className="card_style">
                <HowItWorks />
            </div>
            {/* this is for choose us */}
            <div className="card_style2">
                <ChooseUs />
            </div>
            {/* this is for Experience Hassle-free Laundry Today! */}
            <section className='card_style bg-[#006C76] flex flex-col gap-5'>
                <h2 className='text-[40px] font-bold text-[#FFFFFF]'>Experience Hassle-free Laundry Today!</h2>
                <p className='text-[#FFFFFF] text-[17px]'>Join thousands of satisfied customers who have made laundry day stress-free with LaundryGo.</p>
                <div>
                    <button className="signup_now_btn mt-[32px]">
                        <span>
                            Sign Up Now
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M3.75 9H14.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 3.75L14.25 9L9 14.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Root
