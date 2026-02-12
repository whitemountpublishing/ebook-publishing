import { Metadata } from 'next';
import Image from 'next/image';
import data from '@/src/data/site-content.json';
import Pattern from '@/assets/pattern-2.webp';
import { ShieldCheck, Lock, Eye, FileText, Server, Cookie, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Whitemount Publishing',
  description:
    'Privacy Policy for Whitemount Publishing. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className='w-6 h-6 text-(--accent)' />
          </div>
          <h1 className='text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight'>Privacy Policy</h1>
          <p className='text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed'>
            Transparency and trust are at the core of our values. Learn how we handle your data with care.
          </p>
          <div className='mt-8 inline-block px-4 py-1.5 rounded-full bg-black/20 text-sm font-medium border border-white/10'>
            Last Updated: {currentDate}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className='relative z-20 -mt-12 pb-20'>
        <div className='mx-auto max-w-4xl'>
          <div className='bg-(--bg-main) p-8 md:p-12 rounded-2xl shadow-xl border border-(--border)'>
            <div
              className='prose prose-lg dark:prose-invert max-w-none text-(--text-main) 
              [&_h2]:text-(--primary) [&_h2]:font-serif [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3
              [&_strong]:text-(--primary)'
            >
              <p className='lead text-xl text-(--text-muted) border-l-4 border-(--accent) pl-6 italic mb-12'>
                At {data.brand.name}, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your
                data when you visit our website or use our services.
              </p>

              <h2 className='!mt-12'>
                <Eye className='w-7 h-7 text-(--accent)' />
                1. Information We Collect
              </h2>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className='grid md:grid-cols-2 gap-2 text-sm md:text-base'>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  Register on our website
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  Place an order for our services
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  Subscribe to our newsletter
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  Fill out a contact form
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-(--accent) mt-2.5 shrink-0' />
                  Communicate with us via email or phone
                </li>
              </ul>

              <div className='bg-(--bg-secondary) p-6 rounded-xl mt-6 border border-(--border)/50'>
                <h4 className='text-lg font-bold mb-3 text-(--primary) mt-0'>Data Types</h4>
                <p className='text-sm mb-0'>The types of personal information we may collect include:</p>
                <ul className='mt-2 space-y-1 text-sm'>
                  <li>• Name and contact details (email address, phone number, mailing address)</li>
                  <li>• Billing and payment information</li>
                  <li>• Details about your book project or manuscript</li>
                  <li>• Any other information you choose to provide</li>
                </ul>
              </div>

              <h2 className='!mt-12'>
                <FileText className='w-7 h-7 text-(--accent)' />
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul className='list-disc pl-6 space-y-2 marker:text-(--accent)'>
                <li>Providing and delivering our publishing and ghostwriting services</li>
                <li>Processing your payments and orders</li>
                <li>Communicating with you about your project and updates</li>
                <li>Improving our website and customer service</li>
                <li>Sending you promotional emails (you can opt-out at any time)</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className='!mt-12'>
                <Server className='w-7 h-7 text-(--accent)' />
                3. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                with trusted third-party service providers who assist us in operating our website, conducting our
                business, or servicing you, as long as those parties agree to keep this information confidential.
              </p>

              <h2 className='!mt-12'>
                <Lock className='w-7 h-7 text-(--accent)' />
                4. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className='!mt-12'>
                <ShieldCheck className='w-7 h-7 text-(--accent)' />
                5. Your Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className='list-disc pl-6 space-y-2 marker:text-(--accent)'>
                <li>Accessing and requesting a copy of your data</li>
                <li>Requesting correction or deletion of your data</li>
                <li>Objecting to or restricting the processing of your data</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided below.</p>

              <h2 className='!mt-12'>
                <Cookie className='w-7 h-7 text-(--accent)' />
                6. Cookies and Tracking Technologies
              </h2>
              <p>
                We may use cookies and similar tracking technologies to enhance your experience on our website. You can
                choose to disable cookies through your browser settings, but please note that some features of our site
                may not function properly without them.
              </p>

              <h2 className='!mt-12'>7. Changes to This Policy</h2>
              <p>
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on
                this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy
                periodically.
              </p>

              <div className='mt-16 border-t border-(--border) pt-10'>
                <h2 className='!mt-0 mb-6'>8. Contact Us</h2>
                <p className='mb-8'>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact
                  us at:
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
