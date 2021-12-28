import { useState } from 'react'

const Image = ({ title, latin, source, sourceCompressed }) => {
  const [showModal, setShowModal] = useState(false)

  return(
    <>
      <button 
        type="button"
        className="w-full opacity-100 md:opacity-90 hover:opacity-100 transition ease-in-out duration-500"
        onClick={() => setShowModal(true)}
      >
          <img 
            className="rounded-sm w-full aspect-square object-cover"
            src={sourceCompressed}
            alt={title}
            loading='lazy'
          />
      </button>
      
      {showModal ? ( 
        <div>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-1 overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col aspect-square max-h-[85vh] bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                
                {/*header*/}
                <div className="flex justify-between items-center px-4 py-2 border-b border-solid rounded-t bg-white-50">
                  <div className="flex items-center space-x-10">
                    <h2 className="text-sm md:text-lg font-semibold">
                      {title}
                    </h2>
                    <em className="hidden md:block text-gray-400">
                       {latin}
                    </em>
                  </div>

                  <div className="text-xs md:text-sm flex">
                    <a 
                      className="rounded-l-md border border-gray-300 px-4 py-2 border-r-0 flex items-center space-x-2 hover:bg-blue-100 hover:text-blue-900 transiton ease-in-out duration-500"
                      href={source}
                      download
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                      </svg>
                      <span>Lagre</span>
                    </a>
                    <button 
                      className="rounded-r-md border border-gray-300 px-4 py-2 hover:bg-gray-100 text-gray-300 hover:text-red-900 transiton ease-in-out duration-500"
                      onClick={() => setShowModal(false)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>

                </div>

                {/*body*/}
                <div className="relative flex-auto rounded-b-md">
                  <img
                    className="w-full rounded-b-md aspect-square object-cover" 
                    src={sourceCompressed}
                    alt={title} />
                </div>

              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-gray-900 opacity-90"></div>
        </div>
      ) : null}

    </>
  )
}

export default Image