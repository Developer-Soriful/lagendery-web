import { createBrowserRouter } from "react-router";
import App from "../src/App"
import Root from "../components/Root/Root";
import About from "../components/about/About";
import Packages from "../components/packages/Packages"
import ContactUs from "../components/contactUs/ContactUs"
import MyAccount from "../components/myAccount/MyAccount";
import AuthCard from "../components/authPage/AuthCard";
import Frequently from "../components/Frequently/Frequently";
import ProtectedRoute from "../router/ProtectedRoute"
export const router = createBrowserRouter([
    // this is for routing bro
    {
        path: "/",
        Component: App,
        children: [
            { index: true, element: <Root /> },
            { path: '/about', element: <About /> },
            { path: '/packages', element: <Packages /> },
            { path: '/contact-us', element: <ContactUs /> },
            {
                path: '/my-account',
                element:
                    <ProtectedRoute>
                        <MyAccount />
                    </ProtectedRoute>
            },
            { path: '/faq', element: <Frequently /> },
        ]
    },
    {
        path: "/sign-in", element: <AuthCard />
    }
])