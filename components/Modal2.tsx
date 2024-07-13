"use client"
import Image from "next/image";
import {
    Dialog,
    Transition,
    TransitionChild,
  } from "@headlessui/react";
import { Fragment, useState } from "react";
const Modal2 =  ({ productId }: { productId: string }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(window.location.href);
      alert('URL copied to clipboard!');
    };
  return (
    <>
    <div onClick={openModal} style={{ cursor: 'pointer' }}>
    <Image 
        src="/assets/icons/share.svg"
        alt="share"
        width={20}
        height={20}
        />
        </div>
        <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog onClose={closeModal} className="dialog-container" as="div">
          <div className="min-h-screen px-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0" />
            </TransitionChild>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            />

            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="dialog-content">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div className="p-3 border border-gray-200 rounded-10">
                      <Image
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        height={28}
                        width={28}
                      />
                    </div>
                    <h4 className="dialog-head_text">
                    Share this product!
                  </h4>
                    <Image
                      src="/assets/icons/x-close.svg"
                      alt="close"
                      height={24}
                      width={24}
                      className="cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>
                </div>
            <div className="flex flex-col">
            <input 
              type="text" 
              value={window.location.href} 
              readOnly 
              style={{ 
                cursor: 'pointer', 
                width: '100%', 
                color: 'gray',
                padding: '5px',
                borderRadius: '10px'
              }}
            />
            <button onClick={copyToClipboard}
             style={{ 
                marginTop: '10px', 
                backgroundColor: 'black', 
                color: 'white', 
                padding: '10px 20px', 
                border: 'none', 
                borderRadius: '40px', 
                cursor: 'pointer'
              }}>Copy URL</button>
            </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>   
  )
}
export default Modal2;
