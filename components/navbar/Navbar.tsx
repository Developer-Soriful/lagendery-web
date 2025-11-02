import { Link } from "react-router";
import { Images } from "../../src/assets";
const NavBar: React.FC = () => {
    const navData = [
        {
            "id": 1,
            "label": "Home",
            "href": "/"
        },
        {
            "id": 2,
            "label": "About Us",
            "href": "/about"
        },
        {
            "id": 3,
            "label": "Packages",
            "href": "/packages"
        },
        {
            "id": 4,
            "label": "ContactUs",
            "href": "/contact-us"
        },
        {
            "id": 5,
            "image": Images.user,
            "label": "My Account",
            "href": "/my-account"
        }
    ]
    return (
        <div className=" bg-[#F3F8F4] flex justify-between items-center h-[64px] px-[62.5px] py-4">
            {/* Brand */}
            <div>
                <img className="w-[100] h-[34px]" src={Images.logo2} alt="" />
            </div>

            {/* Navigation Links */}
            <div className="flex gap-[32px] text-sm text-[#2B2B2B] ">
                {
                    navData.map((data: any) => {
                        return <div key={data.id} className="flex justify-center items-center gap-2">
                            {data.image && (
                                <div>
                                    <img src={data.image} alt="" />
                                </div>
                            )}
                            <Link
                                to={data.href}
                                className={data.image ? 'text-[#006C76]' : ''}
                            >
                                {data.label}
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default NavBar;