import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavbarLink({href, children}) {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <li className={"nav-item rounded-full border-2 mx-1 w-24 flex justify-center hover:bg-gray-700" + (router.pathname === href ? " border-green-300" : " border-transparent" )}>
      <a href={href} onClick={handleClick} className="py-2 justify-center text-xs uppercase font-bold text-white">
        {children}
      </a>
    </li>
  )
  
  // return (
  //   <div>
  //     <li className={"nav-item rounded-full border-2 mx-2 w-28 hover:bg-gray-700" + (router.pathname === href ? " border-green-300" : " border-transparent" )}>
  //       <div className="bg-red-100">
  //         <Link href={href}>
  //           <a className="w-full bg-red-300 py-2 align-center text-xs uppercase font-bold text-white">
  //             {children}
  //           </a>
  //         </Link>
  //       </div>
  //     </li>
  //   </div>
  // )


}
