import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavbarLink({href, children}) {
  const router = useRouter();
  
  return (
    <div>
      <li className={"nav-item rounded-full border-2 mx-1 w-24 flex justify-center hover:bg-gray-700" + (router.pathname === href ? " border-green-300" : " border-transparent" )}>
        <Link href={href}>
          <a className="py-2 justify-center text-xs uppercase font-bold text-white">
            {children}
          </a>
        </Link>
      </li>
    </div>
  )

  // const handleClick = e => {
  //   e.preventDefault()
  //   router.push(href)
  // }

  // return (
  //   <li className={"nav-item rounded-full border-2 mx-1 w-24 flex justify-center hover:bg-gray-700" + (router.pathname === href ? " border-green-300" : " border-transparent" )}>
  //     <a href={href} onClick={handleClick} className="py-2 justify-center text-xs uppercase font-bold text-white">
  //       {children}
  //     </a>
  //   </li>
  // )
  


}
