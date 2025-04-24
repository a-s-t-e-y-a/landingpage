export default function CreateOutlineButton({content, className}) {
    return (
        <a className={`bg-white hover:bg-[#124BBA] text-black border border-blue-500 font-medium py-2 px-6 rounded-md transition duration-300 ${className || ''}`} href="https://app.easebooks.in">
            {content}
        </a>
    )
}