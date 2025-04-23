export default function CreateButton({content}) {
    return (
        <a className="bg-[#124BBA] hover:bg-[#124BBA] text-white font-medium py-2 px-6 rounded-md transition duration-300" href="https://app.easebooks.in">
            {content}
        </a>
    )
}