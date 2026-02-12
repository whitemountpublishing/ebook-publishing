import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import data from '@/src/data/site-content.json';
import Pattern from '@/assets/pattern-2.webp';
import {
  ShieldCheck,
  FileText,
  Scale,
  Users,
  CreditCard,
  AlertTriangle,
  Copyright,
  Mail,
  Phone,
  MapPin,
  Gavel,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Whitemount Publishing',
  description:
    'Terms & Conditions for Whitemount Publishing. Understand the rules and regulations for using our website and services.',
};

export default function TermsAndConditionsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='min-h-screen bg-(--bg-secondary)'>
      {/* Hero Section */}
      <section className='relative py-24 md:py-32 bg-(--primary) text-white overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none'>
          <Image src={Pattern} alt='Background Pattern' fill className='object-cover opacity-5' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
        </div>

        <div className='container mx-auto px-4 relative z-10 text-center'>
          <div className='inline-flex items-center justify-center p-3 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20'>
            <Gavel className='w-6 h-6 text-(--accent)' />
          </div>
          <h1 className='text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight'>Terms & Conditions</h1>
          <p className='text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed'>
            Please read these terms carefully before using our services. They outline your rights and obligations as a
            valued client.
          </p>
          <div className='mt-8 inline-block px-4 py-1.5 rounded-full bg-black/20 text-sm font-medium border border-white/10'>
            Last Updated: {currentDate}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className='relative z-20 -mt-12 pb-20'>
        <div className='mx-auto  max-w-4xl'>
          <div className='bg-(--bg-main) p-8 md:p-12 rounded-2xl shadow-xl border border-(--border)'>
            <div
              className='prose prose-lg dark:prose-invert max-w-none text-(--text-main) 
              [&_h2]:text-(--primary) [&_h2]:font-serif [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3
              [&_strong]:text-(--primary)'
            >
              <p className='lead text-xl text-(--text-muted) border-l-4 border-(--accent) pl-6 italic mb-12'>
                Welcome to {data.brand.name}. By accessing our website or using our services, you agree to be bound by
                these Terms & Conditions. If you do not agree with any part of these terms, please do not use our
                services.
              </p>

              <h2 className='!mt-12'>
                <FileText className='w-7 h-7 text-(--accent)' />
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use,
                all applicable laws and regulations, and agree that you are responsible for compliance with any
                applicable local laws. If you do not agree with any of these terms, you are prohibited from using or
                accessing this site.
              </p>

              <h2 className='!mt-12'>
                <Users className='w-7 h-7 text-(--accent)' />
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on{' '}
                {data.brand.name}&apos;s website for personal, non-commercial transitory viewing only. This is the grant
                of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className='grid md:grid-cols-2 gap-2 text-sm md:text-base'>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  Modify or copy the materials
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  Use the materials for any commercial purpose
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  Attempt to decompile or reverse engineer any software
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  Remove any copyright or other proprietary notations
                </li>
              </ul>

              <h2 className='!mt-12'>
                <CreditCard className='w-7 h-7 text-(--accent)' />
                3. Services and Payments
              </h2>
              <p>
                We offer various publishing and ghostwriting services as described on our website. Prices for our
                services are subject to change without notice. We reserve the right at any time to modify or discontinue
                the Service (or any part or content thereof) without notice at any time.
              </p>
              <div className='bg-(--bg-secondary) p-6 rounded-xl mt-6 border border-(--border)/50'>
                <h4 className='text-lg font-bold mb-3 text-(--primary) mt-0'>Refund Policy</h4>
                <p className='text-sm mb-0'>
                  Please review our Refund Policy page for detailed information regarding cancellations and refunds.
                  Generally, refunds are processed according to the stage of work completed.
                </p>
              </div>

              <h2 className='!mt-12'>
                <Copyright className='w-7 h-7 text-(--accent)' />
                4. Intellectual Property Rights
              </h2>
              <p>
                Upon full payment, all rights to the work produced by us for you (ghostwriting, editing, designs) will
                be transferred to you. You will hold the full copyright. Until full payment is received,{' '}
                {data.brand.name}
                retains ownership of all created materials.
              </p>

              <h2 className='!mt-12'>
                <AlertTriangle className='w-7 h-7 text-(--accent)' />
                5. Disclaimer
              </h2>
              <p>
                The materials on {data.brand.name}&apos;s website are provided &quot;as is&quot;. {data.brand.name}{' '}
                makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties,
                including without limitation, implied warranties or conditions of merchantability, fitness for a
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className='!mt-12'>
                <Scale className='w-7 h-7 text-(--accent)' />
                6. Limitations
              </h2>
              <p>
                In no event shall {data.brand.name} or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on {data.brand.name}&apos;s Internet site, even if {data.brand.name}{' '}
                or a{data.brand.name} authorized representative has been notified orally or in writing of the
                possibility of such damage.
              </p>

              <h2 className='!mt-12'>
                <ShieldCheck className='w-7 h-7 text-(--accent)' />
                7. Links
              </h2>
              <p>
                {data.brand.name} has not reviewed all of the sites linked to its Internet web site and is not
                responsible for the contents of any such linked site. The inclusion of any link does not imply
                endorsement by
                {data.brand.name} of the site. Use of any such linked web site is at the user&apos;s own risk.
              </p>

              <h2 className='!mt-12'>8. Governing Law</h2>
              <p>
                Any claim relating to {data.brand.name}&apos;s website shall be governed by the laws of the State of New
                York without regard to its conflict of law provisions.
              </p>

              <div className='mt-16 border-t border-(--border) pt-10'>
                <h2 className='!mt-0 mb-6'>9. Contact Us</h2>
                <p className='mb-8'>If you have any questions about these Terms & Conditions, please contact us at:</p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <a
                    href={`mailto:${data.brand.contact.email}`}
                    className='group flex flex-col items-center justify-center p-6 bg-(--bg-secondary) rounded-xl border border-(--border) hover:border-(--accent) transition-colors text-center no-underline'
                  >
                    <div className='w-12 h-12 bg-white dark:bg-black/20 rounded-full flex items-center justify-center mb-4 text-(--accent) group-hover:scale-110 transition-transform'>
                      <Mail />
                    </div>
                    <span className='text-sm text-(--text-muted) mb-1'>Email Us</span>
                    <span className='font-medium text-(--primary) text-sm break-all'>{data.brand.contact.email}</span>
                  </a>

                  <a
                    href={`tel:${data.brand.contact.phone}`}
                    className='group flex flex-col items-center justify-center p-6 bg-(--bg-secondary) rounded-xl border border-(--border) hover:border-(--accent) transition-colors text-center no-underline'
                  >
                    <div className='w-12 h-12 bg-white dark:bg-black/20 rounded-full flex items-center justify-center mb-4 text-(--accent) group-hover:scale-110 transition-transform'>
                      <Phone />
                    </div>
                    <span className='text-sm text-(--text-muted) mb-1'>Call Us</span>
                    <span className='font-medium text-(--primary)'>{data.brand.contact.phone}</span>
                  </a>

                  <div className='flex flex-col items-center justify-center p-6 bg-(--bg-secondary) rounded-xl border border-(--border) text-center'>
                    <div className='w-12 h-12 bg-white dark:bg-black/20 rounded-full flex items-center justify-center mb-4 text-(--accent)'>
                      <MapPin />
                    </div>
                    <span className='text-sm text-(--text-muted) mb-1'>Visit Us</span>
                    <span className='font-medium text-(--primary) text-sm'>
                      {data.brand.contact.addresses[0].split(',')[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
