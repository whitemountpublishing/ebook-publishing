'use client';

import React from 'react';

import { XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ContactForm } from './contact-form';

type GetStartedButtonProps = {
  label?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function GetStartedButton({ label = 'Get Started', className, children }: GetStartedButtonProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      closeDialog();
    }
  };

  return (
    <React.Fragment>
      <button type='button' className={cn('btn btn-primary', className)} onClick={openDialog}>
        {label}
      </button>

      <dialog
        aria-modal='true'
        ref={dialogRef}
        onClick={handleBackdropClick}
        className='border-0 p-0 bg-transparent w-11/12 max-w-200 max-h-[95vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed'
      >
        <div className='bg-(--bg-main) rounded-3xl border-2 border-(--border) overflow-hidden flex flex-col max-h-[90vh]'>
          <div className='flex items-center justify-between px-6 py-4 border border-(--border)'>
            <span className='font-bold text-(--primary) text-base'>{label}</span>
            <button
              type='button'
              onClick={closeDialog}
              aria-label='Close dialog'
              className='text-(--text-main) text-2xl leading-none bg-transparent border-none cursor-pointer'
            >
              <XIcon size={16} />
            </button>
          </div>

          <div className='overflow-auto px-2 sm:px-4 md:px-6 text-left py-4'>
            {children ? children : <ContactForm className='px-2 py-0' />}
          </div>
        </div>
      </dialog>
    </React.Fragment>
  );
}
