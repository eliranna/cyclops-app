import Link from "next/link";

const Note = ({link, children}) => {
    return (
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <Link
            href={link}
            className="text-zinc-400 relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-zinc-100/10 hover:ring-zinc-100/30 duration-150"
          >
            {children}
          </Link>
        </div>        
    )
}

export default Note