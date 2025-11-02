import { Images } from "../../src/assets"
import ContactForm from "./ContactForm"
const ContactUs: React.FC = () => {
    const OurProcessData = [
        {
            "id": 1,
            "icon": Images.location,
            "title": "Our Location",
            "particularInfo": "123 Laundry Street",
            "description": "Clean City, CC 12345",
            "highlight": "energy-efficient"
        },
        {
            "id": 2,
            "icon": Images.phone,
            "particularInfo": "(555) 123-4567",
            "title": "Phone Number",
            "description": "Customer Support",
            "highlight": null
        },
        {
            "id": 3,
            "icon": Images.email,
            "title": "Email Address",
            "particularInfo": "info@laundrygo.com",
            "description": "For general inquiries",
            "highlight": null
        },
        {
            "id": 4,
            "icon": Images.time,
            "title": "Working Hours",
            "particularInfo": "Monday - Saturday 8:00 AM - 8:00 PM",
            "description": "Sunday: Closed",
            "highlight": null
        }
    ]
    return (
        <div>
            {/* this is heading part of Packages */}
            <section className='card_style bg-[#006C76] flex flex-col gap-5'>
                <h2 className='text-[40px] font-bold text-[#FFFFFF]'>Contact Us</h2>
                <p className='text-[#FFFFFF] text-[17px]'>Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.</p>
            </section>
            <div className="card_style">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {/* this is for contact info section card */}
                    {OurProcessData.map((data, index) => (
                        <div key={index} className="how_it_work_card3 w-full flex gap-[26px] justify-center items-center flex-col text-center p-[32px]">
                            {/* Step Number */}
                            <div className="stepImg">
                                <img src={data.icon} alt="" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                {/* Step Title */}
                                <h3 className="text-[20px] font-semibold text-[#2B2B2B]  tracking-[-0.2px]">
                                    {data.title}
                                </h3>
                                <div>
                                    {/* this is particular info from data */}
                                    <p className="text-sm text-[#374151]">{data.particularInfo}</p>
                                    {/* Step Description */}
                                    <p className="text-[12px] text-[#6B7280]">
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* this is for contact form */}
            <ContactForm />
        </div>
    )
}

export default ContactUs
