import '../Styles/global.css';
import '../Styles/termsAndPrivacyPolicy.css';

function TermsAndPrivacy() {
    return (
        <>

        <div className="privacy-title bg-cover bg-center text-white p-10 rounded-lg m-0">
            <h1 className="text-4xl font-bold">Terms and Policies</h1>
        </div>

        <div className="container mx-auto p-4">

            {/* Privacy Section */}
            <div className="privacy-section mb-30">
            <h2 className="text-4xl font-semibold text-center mb-4">Our Privacy Policy</h2>
            <span className="horizontal-line m-4"></span>

                <div className="terms mt-10">
                    <h3 className="text-xl font-semibold">USER AGREEMENT</h3>
                    <p>By accessing our website, you agree to comply with all applicable laws and regulations. You must not misuse our services.</p>
                </div>
                <div className="terms mt-8">
                    <h3 className="text-xl font-semibold">LIMITATION OF LIABILITY</h3>
                    <p>We are not responsible for any inaccuracies in the information provided on this website. Use our services at your own discretion.</p>
                </div>
                <div className="terms mt-8">
                    <h3 className="text-xl font-semibold">MODIFICATIONS</h3>
                    <p>We reserve the right to modify these terms at any time. Continued use of our services implies acceptance of the updated terms.</p>
                </div>
            </div>

            {/* Terms Section */}
            <div className="terms-section mb-30">
            <h2 className="text-4xl font-semibold text-center mb-4">Terms of Service</h2>
            <span className="horizontal-line m-4"></span>
                <div className="privacy mt-10">
                    <h3 className="text-xl font-semibold">DATA COLLECTION</h3>
                    <p>We collect personal data, such as your name and email, when you contact us or submit a form. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vitae consequatur aspernatur corporis fuga amet iusto ratione molestiae tempora, quisquam neque. Molestias quisquam ab tenetur. Quibusdam asperiores unde nam quas? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti minima necessitatibus illum incidunt laborum quam amet, beatae tenetur temporibus nemo, fugit reprehenderit! Similique atque ipsam mollitia, quas in eveniet sunt. Voluptatem ducimus perspiciatis ea laborum commodi, repudiandae dolore ut sint cupiditate aliquid, nisi debitis unde impedit! Fuga, quo vero?</p>
                </div>
                <div className="privacy mt-8">
                    <h3 className="text-xl font-semibold">DATA USAGE</h3>
                    <p>Your data is used solely for the purpose of improving our services. We do not sell or share your information without consent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, distinctio totam. Totam sunt iure quos, est excepturi eos maxime temporibus vitae veritatis esse earum natus adipisci optio eaque sequi saepe non blanditiis ullam eius ratione vel tempora error? Repudiandae neque aspernatur corporis nisi unde eaque, impedit, ab non vel maxime nemo, id sint corrupti consequuntur porro! Nobis vitae impedit nemo quia magni. Obcaecati accusantium eum soluta nostrum veniam, illum excepturi adipisci a, ad reiciendis porro voluptate ipsam, similique doloribus cupiditate exercitationem est dolorem quis! Soluta illo incidunt ducimus et laudantium! Hic sequi delectus fuga amet? Distinctio rerum quas ad. Sint!</p>
                </div>
                <div className="privacy mt-8">
                    <h3 className="text-xl font-semibold">SECURITY MEASURES</h3>
                    <p>We implement strong security measures to protect your data from unauthorized access. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi eaque voluptas debitis? Excepturi minima ab, cumque in neque laborum omnis fugit quaerat nihil dignissimos provident voluptates maiores modi accusamus delectus, tempora possimus est incidunt corporis hic veritatis quos. Repudiandae accusantium quibusdam sapiente fuga sunt quia earum, dolor illo aperiam laudantium ex reiciendis consequatur rerum omnis labore nobis. Non, incidunt!</p>
                </div>
            </div>



            {/* Legal Disclaimers Section */}
            <div className="legal-disclaimers mt-20">
            <h2 className="text-4xl font-semibold text-center">Legal Disclaimers</h2>
            <span className="horizontal-line m-4"></span>
                <div className="privacy mt-10">
                    <h3 className="text-xl font-semibold">SECURITY MEASURES</h3>
                    <p>We implement strong security measures to protect your data from unauthorized access. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero ad minus ut debitis reiciendis impedit facilis reprehenderit pariatur corrupti. Necessitatibus aliquid voluptate omnis cupiditate. Magni facilis optio libero quibusdam minima quasi sed ea omnis molestiae delectus. Sunt reprehenderit cum veniam. Eaque sit numquam, odio nobis quibusdam animi. Consectetur laboriosam beatae soluta explicabo perferendis illum ipsa impedit asperiores alias inventore.</p>
                </div>
            </div>

            <div className="legal-disclaimer my-20">
                <p>📌 <b>Our website provides general information and does not constitute legal advice.</b></p>
                <p>🔒 <b>Your data is protected in accordance with industry standards.</b></p>
                <p>📅 <b>Last updated: March 2025</b></p>
            </div>

            <h2 className="text-2xl font-semibold mt-10">Have questions about our terms or privacy policy? Contact us today.</h2>
            <form className="contactForm m-8">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                    <textarea id="message" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
        </>
    );
}

export default TermsAndPrivacy;
