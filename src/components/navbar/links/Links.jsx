import React from 'react'
import Link from "next/link"

function Links() {
    const links=[
        {
            title:"Homepage",
            path:"/",

        },
        {
            title:"About",
            path:"/about",

        },
        {
            title:"Contact",
            path:"/contact",

        },
        {
            title:"Blog",
            path:"/blog",

        },
    ]


  return (
    <div>
        {
            links.map((e)=> <Link  key={e.title} href={e.path}>{e.title}</Link>)
        }
    </div>
  )
}

export default Links