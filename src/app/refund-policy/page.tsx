import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const EXCEPTIONAL_CASES = [
  'Duplicate payment made by mistake',
  'Technical issue from our side resulting in failure of course access',
  'Incorrect amount charged due to payment gateway error',
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Refund <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-slate-400 text-sm">Last Updated: May 9, 2026</p>
          </div>

          <div className="card-base space-y-6 text-slate-400 text-sm leading-relaxed">
            <p>
              Welcome to Placement Lab. We aim to provide high-quality career guidance, placement
              preparation, and educational courses to help students grow professionally.
            </p>
            <p>Please read our refund policy carefully before purchasing any course or service.</p>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">1. No Refund Policy</h2>
              <p>
                All course purchases made on Placement Lab are non-refundable. Once a course is
                purchased and access is granted, we do not provide refunds, cancellations, or
                exchanges under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">2. Digital Product Nature</h2>
              <p>
                Since our courses are digital products and users get instant access to learning
                materials, videos, resources, and downloadable content, refunds cannot be issued
                after purchase.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">3. Exceptional Cases</h2>
              <p>Refunds may only be considered in rare situations such as:</p>
              <ul className="list-disc pl-5 space-y-2">
                {EXCEPTIONAL_CASES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>Any such issue must be reported within 48 hours of the transaction.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">4. Contact Us</h2>
              <p>If you face any payment-related issue or need assistance, please contact us:</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:support@placementlab.com"
                  className="text-indigo-300 hover:text-indigo-200"
                >
                  support@placementlab.com
                </a>
              </p>
              <p>We will review your request and respond as soon as possible.</p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-2">5. Policy Updates</h2>
              <p>
                Placement Lab reserves the right to modify or update this refund policy at any
                time without prior notice.
              </p>
            </div>

            <p>
              By purchasing any course from Placement Lab, you agree to this Refund Policy.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
