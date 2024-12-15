import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const HomeBanner = () => {
    const slides = [
        {
            title: "Explore Visa Options Worldwide",
            description: "Find the right visa for your destination with our comprehensive visa database.",
            background: "https://color-hex.org/colors/034833.png",
        },
        {
            title: "Track Your Visa Application",
            description: "Stay informed with real-time updates on your visa application status.",
            background: "https://i.pinimg.com/736x/fb/f0/ef/fbf0efd993d06415633881cd7b0c43de.jpg",
        },
        {
            title: "Hassle-Free Visa Applications",
            description: "Easily apply for visas online with step-by-step guidance tailored to your needs.",
            background: "https://wallpapers.com/images/hd/black-solid-background-2920-x-1642-jk98dr7udfcq3hqj.jpg",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="relative my-5 px-4 md:px-10">
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
                            <h1 className="text-3xl md:text-5xl font-bold">
                                <Typewriter
                                    words={[slide.title]}
                                    loop={false}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <p className="my-10 text-lg md:text-xl max-w-3xl">{slide.description}</p>
                            <Link to="/allvisa" className=" px-6 btn btn-accent text-lg font-bold rounded-lg">
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
