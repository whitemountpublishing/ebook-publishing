import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import data from '@/src/data/site-content.json';
import Pattern from '@/assets/pattern-2.webp';
import {
  RefreshCw,
  Clock,
  DollarSign,
  XCircle,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund Policy | Whitemount Publishing',
  description: 'Refund Policy for Whitemount Publishing. Learn about our cancellation and refund procedures.',
};

export default function RefundPolicyPage() {
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
            <RefreshCw className='w-6 h-6 text-(--accent)' />
          </div>
          <h1 className='text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight'>Refund Policy</h1>
          <p className='text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed'>
            We strive for your complete satisfaction. This policy details our refund and cancellation terms.
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
                At {data.brand.name}, customer satisfaction is our top priority. We offer a transparent refund policy to
                ensure you feel secure when using our services. Please read the following guidelines carefully.
              </p>

              <h2 className='!mt-12'>
                <CheckCircle2 className='w-7 h-7 text-(--accent)' />
                1. 100% Satisfaction Guarantee
              </h2>
              <p>
                To provide you with the best service possible, we offer a satisfaction guarantee. If appropriate, we
                will revise our work to meet your initial requirements. Refund requests are handled on a case-by-case
                basis according to the terms outlined below.
              </p>

              <h2 className='!mt-12'>
                <Clock className='w-7 h-7 text-(--accent)' />
                2. Refund Eligibility
              </h2>
              <p>You may be eligible for a refund under the following conditions:</p>
              <ul className='grid md:grid-cols-1 gap-2 text-sm md:text-base'>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  <span>
                    <strong>Before Project Start:</strong> If you cancel your order before we have started working on
                    your project, you are entitled to a full refund (less any transaction fees).
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  <span>
                    <strong>Initial Draft Stage:</strong> If you are not satisfied with the initial draft or outline and
                    request a refund within 48 hours of delivery, you may be eligible for a partial refund (up to 50%).
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  <span>
                    <strong>Non-Delivery:</strong> If we fail to deliver the agreed-upon work within the specified
                    timeframe and cannot provide a reasonable extension, you are entitled to a full refund.
                  </span>
                </li>
              </ul>

              <h2 className='!mt-12'>
                <XCircle className='w-7 h-7 text-(--accent)' />
                3. Non-Refundable Scenarios
              </h2>
              <p>
                Refunds will <strong>not</strong> be issued in the following situations:
              </p>
              <ul className='list-disc pl-6 space-y-2 marker:text-(--accent)'>
                <li>If you have already approved the final work or a significant milestone.</li>
                <li>Change of mind after the project has been completed or substantially progressed.</li>
                <li>Delays caused by lack of communication or feedback from your side.</li>
                <li>&quot;Change of heart&quot; regarding the project topic or direction after work has commenced.</li>
                <li>Minor errors that can be easily corrected through revisions.</li>
              </ul>

              <div className='bg-(--bg-secondary) p-6 rounded-xl mt-6 border border-(--border)/50'>
                <h4 className='text-lg font-bold mb-3 text-(--primary) mt-0 flex items-center gap-2'>
                  <AlertTriangle className='w-5 h-5 text-(--accent)' />
                  Important Note
                </h4>
                <p className='text-sm mb-0'>
                  Any refund issued will result in the immediate revocation of rights to any work produced. You may not
                  use, publish, or distribute any content for which a refund has been processed.
                </p>
              </div>

              <h2 className='!mt-12'>
                <DollarSign className='w-7 h-7 text-(--accent)' />
                4. Chargebacks
              </h2>
              <p>
                We encourage you to contact our support team to resolve any billing issues before filing a chargeback
                with your bank or credit card provider. Fraudulent chargebacks will be disputed, and we may blacklist
                legal action against users filing false claims.
              </p>

              <h2 className='!mt-12'>
                <HelpCircle className='w-7 h-7 text-(--accent)' />
                5. How to Request a Refund
              </h2>
              <p>
                To request a refund, please contact our support team with your order details and a detailed explanation
                of your reason for the request. We aim to review and respond to all refund requests within 3-5 business
                days.
              </p>

              <div className='mt-16 border-t border-(--border) pt-10'>
                <h2 className='!mt-0 mb-6'>6. Contact Us</h2>
                <p className='mb-8'>
                  If you have questions about our Refund Policy or need to submit a request, please reach out:
                </p>

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
