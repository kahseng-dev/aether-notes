import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div>
        <p className='font-semibold text-4xl'>404</p>
        <p>Page Not Found</p>
        <div className='mt-4 border-gray-300 border rounded px-4 py-2 transition duration-300 ease-in-out cursor-pointer hover:bg-white/20'>
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  )
}