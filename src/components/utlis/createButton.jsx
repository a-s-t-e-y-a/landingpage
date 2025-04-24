export default function CreateButton({content, className}) {
    return (
        <a className={`bg-[#124BBA] hover:bg-[#124BBA] text-white font-medium py-2 px-6 rounded-md transition duration-300 ${className || ''}`} href="https://app.easebooks.in">
            {content}
        </a>
    )
}