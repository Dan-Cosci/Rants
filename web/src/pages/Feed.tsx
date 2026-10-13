import { AiOutlineLike } from "react-icons/ai"
import { DefaultPF } from "../assets/constats"
import { GetFeed } from "../services/api"
import { FaRegShareFromSquare } from "react-icons/fa6"

function Feed() {
  const data = GetFeed()

  return (
    <section className="flex flex-col bg-primary md:w-[70vw]">
      {data.map((el) => (
        <div className="m-2 p-6  bg-secondary rounded-md flex flex-col gap-2">
          <div className="flex gap-2 font-bold">
            <div className="overflow-hidden rounded-full">
               <img src={ DefaultPF } width={36} />
           </div>
            <p>{ el.user_id }</p>
          </div>
          <div className="min-h-16">
            <p>{ el.content }</p>
          </div>
          <div className="flex justify-between">
            <div className="">
              <button className="px-4 py-2 mr-2 rounded-full hover:bg-active"><AiOutlineLike /></button>
              <button className="px-4 py-2 mr-2 rounded-full hover:bg-active"><FaRegShareFromSquare/></button>
            </div>
            <div className="flex items-center">
              <p className="text-content-muted text-xs">{ new Date(el.created_at).toLocaleDateString() }</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Feed
