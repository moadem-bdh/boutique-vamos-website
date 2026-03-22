import { useState } from "react"



export default function useToggle(initialvalue:boolean =false): [boolean , ()=>void] {

const [toggled , setToggle ] = useState<boolean>(initialvalue)

const toggle = ()=> setToggle(!toggled) 

return [toggled , toggle ]
}
