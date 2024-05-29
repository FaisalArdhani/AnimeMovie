import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className=" flex justify-between items-center py-4 px-10">
            <h1 className="md:text-2xl text-xl font-bold text-color-primary">{title}</h1>
            {
                linkHref && linkTitle ?
                    <Link href={linkHref} className="md:text-lg text-sm underline hover:text-color-accent text-color-primary transition-all">
                        {linkTitle}
                    </Link>
                    : null
            }
        </div>
    )
}

export default Header