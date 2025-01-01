import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/myContext'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import Loader from '../../components/loader/Loader'

const CategoryPage = () => {
  const { categoryname } = useParams()
  const navigate = useNavigate()
  const context = useContext(myContext)
  const { loading, getAllProduct } = context
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  // Simulating the getAllProduct data
  context.getAllProduct = [
    { id: 1, title: "Backpacks/School Bags", price: 39, productImageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60", category: "School Supplies" },
    { id: 2, title: "Lunch Boxes", price: 14, productImageUrl: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=800&auto=format&fit=crop&q=60", category: "School Supplies" },
    { id: 3, title: "Pencil Cases", price: 9, productImageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop&q=60", category: "School Supplies" },
    { id: 4, title: "Notebooks", price: 4, productImageUrl: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&auto=format&fit=crop&q=60", category: "School Supplies" },
    { id: 5, title: "Folders/Binders", price: 7, productImageUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=60", category: "School Supplies" },
    { id: 6, title: "Pens and Pencils", price: 3, productImageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=60", category: "School Supplies" },
    { id: 7, title: "Markers and Highlighters", price: 5, productImageUrl: "https://images.unsplash.com/photo-1596265371388-43edbaadab94?w=800&auto=format&fit=crop&q=60", category: "School Supplies" },
    { id: 8, title: "Colored Pencils or Crayons", price: 6, productImageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=60", category: "School Supplies" },
    { id: 9, title: "School Uniforms", price: 29, productImageUrl: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=800&auto=format&fit=crop&q=60", category: "Clothing" },
    { id: 10, title: "Physical Education (PE) Kits", price: 24, productImageUrl: "https://images.unsplash.com/photo-1515191107209-c28698631303?w=800&auto=format&fit=crop&q=60", category: "Clothing" },
    { id: 11, title: "Cardigans or Sweaters", price: 34, productImageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=60", category: "Clothing" },
    { id: 12, title: "Jackets", price: 49, productImageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=60", category: "Clothing" },
    { id: 13, title: "Shoes (Sports, Formal)", price: 59, productImageUrl: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop&q=60", category: "Clothing" },
    { id: 14, title: "Socks", price: 7, productImageUrl: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&auto=format&fit=crop&q=60", category: "Clothing" },
    { id: 15, title: "Laptops or Tablets", price: 399, productImageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60", category: "Electronics" },
    { id: 16, title: "Calculators", price: 19, productImageUrl: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=800&auto=format&fit=crop&q=60", category: "Electronics" },
    { id: 17, title: "Headphones", price: 29, productImageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60", category: "Electronics" },
    { id: 18, title: "Chargers and Cables", price: 14, productImageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=60", category: "Electronics" },
    { id: 19, title: "Water Bottles", price: 9, productImageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=60", category: "Health and Safety" },
    { id: 20, title: "Hand Sanitizers", price: 3, productImageUrl: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=800&auto=format&fit=crop&q=60", category: "Health and Safety" },
    { id: 21, title: "Face Masks", price: 5, productImageUrl: "https://images.unsplash.com/photo-1586942593568-29361efcd571?w=800&auto=format&fit=crop&q=60", category: "Health and Safety" },
    { id: 22, title: "Art Supplies", price: 24, productImageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60", category: "Art and Science" },
    { id: 23, title: "Science Kits or Supplies", price: 39, productImageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=60", category: "Art and Science" },
    { id: 24, title: "Books (Textbooks, Reading)", price: 29, productImageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60", category: "Books and Games" },
    { id: 25, title: "Board Games or Educational Games", price: 19, productImageUrl: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=800&auto=format&fit=crop&q=60", category: "Books and Games" },
    { id: 26, title: "Sports Equipment", price: 34, productImageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60", category: "Sports and Music" },
    { id: 27, title: "Instruments for Music Classes", price: 99, productImageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&auto=format&fit=crop&q=60", category: "Sports and Music" },
  ]

  const filterProduct = getAllProduct.filter((obj) => obj.category.toLowerCase() === categoryname.toLowerCase())

  const addCart = (item) => {
    dispatch(addToCart(item))
    toast.success("Add to cart")
  }

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
    toast.success("Delete cart")
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <Layout>
      <div className="mt-10">
        {/* Heading  */}
        <div className="">
          <h1 className="text-center mb-5 text-2xl font-semibold first-letter:uppercase">{categoryname}</h1>
        </div>

        {/* main  */}
        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto ">
              <div className="flex flex-wrap -m-4 justify-center">
                {filterProduct.length > 0 ? (
                  filterProduct.map((item, index) => {
                    const { id, title, price, productImageUrl } = item
                    return (
                      <div key={index} className="p-4 w-full md:w-1/4">
                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                          <img
                            onClick={() => navigate(`/productinfo/${id}`)}
                            className="lg:h-80 h-96 w-full object-cover"
                            src={productImageUrl}
                            alt={title}
                          />
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              SRC-Mart
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              {title.substring(0, 25)}
                            </h1>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              ₹{price}
                            </h1>

                            <div className="flex justify-center ">
                              {cartItems.some((p) => p.id === item.id) ? (
                                <button
                                  onClick={() => deleteCart(item)}
                                  className="bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                >
                                  Delete From Cart
                                </button>
                              ) : (
                                <button
                                  onClick={() => addCart(item)}
                                  className="bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                >
                                  Add To Cart
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <div>
                    <div className="flex justify-center">
                      <img
                        className="mb-2"
                        src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                        alt="No products found"
                      />
                    </div>
                    <h1 className="text-black text-xl">No {categoryname} product found</h1>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  )
}

export default CategoryPage

