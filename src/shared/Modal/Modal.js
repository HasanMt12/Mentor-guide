import React from 'react';

const Modal = (modalStatus, setModalStatus) => {
    return (
         <div>
      {modalStatus && (

        
        <div
          onClick={() => setModalStatus(false)}
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div   class="fixed inset-0 bg-gray-600 bg-opacity-40 transition-opacity"></div>
          <div data-aos="zoom-in" class=" ml-64  fixed inset-0 z-10 overflow-y-auto shadow-gray-300 shadow-lg">
            <div class="flex min-h-full items-end justify-center pl-4 py-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div class="bg-white  pl-4 pt-5 sm:pl-6 sm:pb-10">
                  <div className="flex justify-end -mt-2 mr-5">
                    <button onClick= {() => setModalStatus(false)} >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                          fill="#6B6F86"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>hoise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default Modal;