/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-12">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-purple-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="Somesh.jpg" />
                                <p className="leading-relaxed">SRC-Mart - an innovative e-commerce platform designed specifically for school environments.</p>
                                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Somesh Raj</h2>
                                <p className="text-gray-500">Software Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="photo.jpg" />
                                <p className="leading-relaxed"> It allows students, teachers, and staff to buy and sell school-related items, such as uniforms, textbooks, stationery, and other educational resources.</p>
                                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Jayesh</h2>
                                <p className="text-gray-500">Web Develeoper</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1w1tXrsLCOhLgbUDjfbPp6PKoexlsDAcbg&s" />
                                <p className="leading-relaxed">The platform fosters a convenient, secure, and efficient way to handle school supplies while promoting a digital marketplace that can be accessed easily by the school community.</p>
                                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Abhilash Singh</h2>
                                <p className="text-gray-500">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;