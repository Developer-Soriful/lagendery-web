import { Images } from "../../src/assets"
import HowItWorks from "./HowItWorks"
import ChooseUs from "./ChooseUs"
import { useAuth } from "../../authentication/UseAuth"
const Root = () => {
    return (
        <div>
            {/* this is for root hero img */}
            <div>
                <img className="w-full h-[858px]" src={Images.hero_img} alt="" />
            </div>
            {/* this is for how it work section */}
            <div className="card_style">
                <HowItWorks />
            </div>
            {/* this is for choose us */}
            <div className="card_style2">
                <ChooseUs />
            </div>
        </div>
    )
}

export default Root
