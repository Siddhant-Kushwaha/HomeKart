import React, { useState } from "react"
import "./Product.css"
import pro1 from "../../Images/pro1.png"
import pro2 from "../../Images/pro2.png"
import pro3 from "../../Images/pro3.png"
import pro4 from "../../Images/pro4.png"
import pro5 from "../../Images/pro5.png"
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion, AnimatePresence } from "framer-motion"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper"
import { useParams } from "react-router-dom"
SwiperCore.use([Autoplay, Pagination, Navigation])

const proVariants = {
    initial: {
        x: 1000,
    },
    visible: {
        x: 0,
        transition: {
            ease: "easeInOut",
        },
    },
    exit: {
        x: -1000,
        // transition: {
        //     duration: 0.3,
        // },
    },
}

export const Product = () => {
    const { id } = useParams()
    console.log(id)
    const images = [pro1, pro2, pro3, pro4, pro5]
    const [cur, setCur] = useState(0)

    function LoadRazorpay() {
        const script = document.createElement("script")
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        script.onerror = () => {
            alert("Razorpay SDK failed to load. Are you online?")
        }
        script.onload = async () => {
            try {
                // setLoading(true)
                const result = await axios.post(
                    "http://localhost:3000/api/payments/create-order",
                    {
                        amount: "500" + "00",
                    }
                )
                console.log(result)
                const { amount, id: order_id, currency } = result.data
                const {
                    data: { key: razorpayKey },
                } = await axios.get(
                    "http://localhost:3000/api/payments/get-razorpay-key"
                )

                const options = {
                    key: razorpayKey,
                    amount: amount.toString(),
                    currency: currency,
                    name: "example name",
                    description: "example transaction",
                    order_id: order_id,
                    handler: async function (response) {
                        const result = await axios.post(
                            "http://localhost:3000/api/payments/pay-order",
                            {
                                amount: amount,
                                razorpayPaymentId: response.razorpay_payment_id,
                                razorpayOrderId: response.razorpay_order_id,
                                razorpaySignature: response.razorpay_signature,
                            }
                        )
                        alert(result.data.msg)
                        // fetchOrders()
                    },
                    prefill: {
                        name: "example name",
                        email: "email@example.com",
                        contact: "111111",
                    },
                    notes: {
                        address: "example address",
                    },
                    theme: {
                        color: "#80c0f0",
                    },
                }

                // setLoading(false)
                const paymentObject = new window.Razorpay(options)
                paymentObject.open()
            } catch (err) {
                alert(err)
                // setLoading(false)
            }
        }
        document.body.appendChild(script)
    }

    const handleClick = (state) => {
        setCur(state)
    }

    return (
        <div className="product">
            <div className="left">
                {/* <div className="info-color"> */}
                {/* <div className="color-head">Colors</div> */}
                {/* <div className="color-opt">
                        <div className=" color red"></div>
                        <div className="color blue"></div>
                        <div className="color green"></div>
                    </div> */}
                {/* <div className="circle"></div> */}
                {/* </div> */}
                <div className="left-wrapper">
                    <div className="main-image">
                        <div className="orange-stripe"></div>
                        <div className="black-stripe"></div>
                        <AnimatePresence exitBeforeEnter>
                            <motion.img
                                key={images[cur]}
                                variants={proVariants}
                                initial="initial"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.1 }}
                                src={images[cur]}
                                alt=""
                            />
                        </AnimatePresence>
                    </div>

                    <div className="side-image">
                        <Swiper
                            spaceBetween={0}
                            loop={true}
                            navigation={true}
                            modules={{ Navigation }}
                            breakpoints={{
                                390: {
                                    slidesPerView: 3,
                                },
                                450: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                991: {
                                    slidesPerView: 4,
                                },

                                1200: {
                                    slidesPerView: 5,
                                },
                            }}
                            // autoplay={{
                            //     delay: 2500,
                            //     disableOnInteraction: false,
                            // }}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {images &&
                                images.map((img, idx) => {
                                    return (
                                        <SwiperSlide key={img}>
                                            <div
                                                className="swiper-images"
                                                onClick={() => handleClick(idx)}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`bene-product-${img}`}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="info-box">
                    <div className="info-heading">Jordan Air 12x</div>
                    <div className="hr-line"></div>
                    <div className="info-desc">
                        <h2>Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusamus saepe qui odio officia quas et.
                            Nulla corrupti, ad hic accusamus facere laboriosam,
                            officiis exercitationem, illo culpa aspernatur
                        </p>
                    </div>
                    <div className="hr-line"></div>
                    <div className="info-price"> $255-$270</div>

                    <div className="info-button" onClick={() => LoadRazorpay()}>
                        <h3>Add To Cart</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
