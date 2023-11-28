import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <>
  <NavBar/>
  <main className='w-full h-[calc(100vh-71.8px)] flex items-center justify-center'>
     <div className='flex items-center justify-center bg-slate-200 w-10/12 h-4/6'>
        <h1 className="text-xl font-normal">We have the Best Shirts in the world</h1>
     </div>
  </main>
</>
  )
}
