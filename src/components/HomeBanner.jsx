import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const HomeBanner = () => {
    const slides = [
        {
            title: "Explore Visa Options Worldwide",
            description: "Find the right visa for your destination with our comprehensive visa database.",
            background: "https://cdn.pixabay.com/photo/2022/11/02/10/05/passport-7564502_1280.jpg",
        },
        {
            title: "Track Your Visa Application",
            description: "Stay informed with real-time updates on your visa application status.",
            background: "https://plus.unsplash.com/premium_photo-1663100543409-061876b76b0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Hassle-Free Visa Applications",
            description: "Easily apply for visas online with step-by-step guidance tailored to your needs.",
            background: "https://images.pexels.com/photos/7009468/pexels-photo-7009468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Personalized Visa Support",
            description: "Our dedicated team provides expert guidance to simplify your visa process.",
            background: "https://images.pexels.com/photos/4922356/pexels-photo-4922356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        },
        {
            title: "Your Trusted Visa Companion",
            description: "Navigate visa requirements and applications with ease using our platform.",
            background: "https://images.pexels.com/photos/8372634/pexels-photo-8372634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="relative px-4 md:px-10">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-[400px] md:h-[600px]">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                                backgroundImage: `url(${slide.background})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "brightness(0.6)",
                            }}
                        ></div>
                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 text-white">
                            <h1 className="text-2xl md:text-4xl font-bold">{slide.title}</h1>
                            <p className="mt-4 text-lg md:text-xl max-w-3xl">{slide.description}</p>
                            <Link to="/about" className="mt-6 px-6 py-2 btn btn-accent text-lg font-bold rounded-lg">
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeBanner;
