// import Typed from 'react-typed'
import Memoir from '../assets/Memoir.png'


export default function Homepage() {
  return (
    <div className="bg-white">
      <div className=" text-pink-500 font-bold text-lg p-3 py-4">
      "Discover Your Story, Unfold Your Memories"
      </div>

      {/* <div className="md:text-3xl sm:text-3xl text-3xl font-bold justify-center text-gray-800">
      Welcome to <span className='font-semibold text-pink-600'>MemoryChronicles </span>- Where Your Life's Journey Becomes a Timeless Tale.
      </div> */}
      {/* <div className='py-8 flex justify-center items-center'>

        <Typed
          className='text-pink-800 md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          strings={['Capture', 'Relive','Preserve']}
          typeSpeed={120} z
          backSpeed={140}
          loop
        />
      </div> */}

      <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-12 lg:px-8">

        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className='isolate'>
            <div
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
              aria-hidden="true">
              <div
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unveiling Memories.
              <br />
              one day at a time.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              {/* Unleash your creativity and stay organized effortlessly with our intuitive<span className='font-semibold text-pink-600'> MemoryChronicles</span> - your digital companion for <span className='font-semibold text-pink-600'> Capture, Relive, Edit, and Erase the chapters of your life's story."</span> */}
              "Unleash the Art of Remembering: Experience<span className='font-semibold text-pink-600'> MemoryChronicles</span> - Your Intuitive Digital Companion for <span className='font-semibold text-pink-600'>Capturing, Reliving, Editing, and Erasing </span>the Beautiful Chapters of Your Life's Extraordinary Journey."
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/notes"
                className="rounded-md bg-pink-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>


            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-xl bg-white/5 ring-1 ring-white/10"
              src={Memoir}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>

        </div>

      </div>

    </div>
  )
}


{/* <Popover.Group className="hidden lg:flex lg:gap-x-12" />
<Popover className="relative">
  <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black">

        
          Features    .{' '}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
          </a>
          <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
        </Popover.Button>


        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ">
            <div className="p-4">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="flex-auto">
                    <a href={item.href} className="block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </Popover.Panel>
        </Transition>
      </Popover> */}