import BrandingHeading from "./utlis/brandingHeading";
import CreateButton from "./utlis/createButton";
import CreateOutlineButton from "./utlis/outlineButton";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center h-16 p-4 mx-auto max-w-screen-2xl">
            <div className="div">
                <BrandingHeading content="Bookeasy" />
            </div>
            <div className="flex gap-4 text-gray-600">
                <div className="div">
                    <a href="/invoicing">Invoicing</a>
                </div>
                <div className="div">
                    <a href="/pricing">Pricing</a>
                </div>
                <div className="div">
                    <a href="/bookeeping">Book-keeping</a>
                </div>
                <div className="div">
                    <a href="/inventory">Inventory</a>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="div">
                    <CreateButton className="" content="Login" />
                </div>
                <div className="div">
                    <CreateOutlineButton className="border-1 border-blue-500 hover:text-white" content="Sign Up" />
                </div>
            </div>


        </nav>
    )
}