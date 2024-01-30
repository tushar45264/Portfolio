import {details} from '../edit/data'

const footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="text-main text-xs opacity-70 font-Space">Designed & Built by {details.firstName} {details.lastName}</div>
    <div className="text-main text-xs opacity-70 font-Space mb-6">Using NextJS & TailwindCSS</div>
    </div>
  )
}

export default footer