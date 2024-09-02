// import React, { useState, useEffect } from 'react';
// import './styles/ImageSlider.css';

// export default function ImageSlider() {
//     const [currentImage, setCurrentImage] = useState(0);
//     const images = [
//         '/src/images/index1.png', // Image 1 path
//         '/src/images/index2.png', // Image 2 path
//         '/src/images/index3.png', // Image 3 path
//         '/src/images/index4.png'  // Image 4 path
//     ];

//     const nextImage = () => {
//         setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     };

//     const previousImage = () => {
//         setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
//     };

//     // Automatically slide the images every 5 seconds
//     useEffect(() => {
//         const interval = setInterval(nextImage, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="slider-container">
//             <h1 className="slider-topic">MediGuard</h1>
//             <img src={images[currentImage]} alt="Slider Image" className="slider-image" />
//         </div>
//     );
// }

import { useEffect } from "react";
import "./styles/ImageSlider.css";
import index1 from "/src/images/index1.png";
import index2 from "/src/images/index2.png";
import index3 from "/src/images/index3.png";
import index4 from "/src/images/index4.png";
import { InitializeCarousel } from "./styles/ImageSlider.js";
import AppBarGeneral from "./AppBarGeneral.jsx";

export default function IndexPage() {
    useEffect(() => {
        InitializeCarousel();
    }, []);

    return (
        <div className=".body">
            <AppBarGeneral/>
            <div className="carousel">
                <div className="list">
                    <div className="item">
                        <img src={index1} alt="Slide 1" />
                        <div className="content">
                            <div className="author">UNIVERSITY OF PERADENIYA</div>
                            <div className="title">CARE ABOUT YOUR HEART</div>
                            <div className="topic">MEDICARE</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                                officiis unde, eaque optio ratione aliquid assumenda facere ab
                                et quasi ducimus aut doloribus non numquam. Explicabo,
                                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                                exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>REGISTER</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={index2} alt="Slide 2" />
                        <div className="content">
                            <div className="author">UNIVERSITY OF PERADENIYA</div>
                            <div className="title">DON'T EAT CHINESE FOOD</div>
                            <div className="topic">MEDICARE</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                                officiis unde, eaque optio ratione aliquid assumenda facere ab
                                et quasi ducimus aut doloribus non numquam. Explicabo,
                                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                                exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>REGISTER</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={index3} alt="Slide 3" />
                        <div className="content">
                            <div className="author">UNIVERSITY OF PERADENIYA</div>
                            <div className="title">EAT HEALTHY FOOD</div>
                            <div className="topic">MEDICARE</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                                officiis unde, eaque optio ratione aliquid assumenda facere ab
                                et quasi ducimus aut doloribus non numquam. Explicabo,
                                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                                exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>REGISTER</button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={index4} alt="Slide 4" />
                        <div className="content">
                            <div className="author">UNIVERSITY OF PERADENIYA</div>
                            <div className="title">DON'T GET LIQUOR</div>
                            <div className="topic">MEDICARE</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                                officiis unde, eaque optio ratione aliquid assumenda facere ab
                                et quasi ducimus aut doloribus non numquam. Explicabo,
                                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                                exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>REGISTER</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="thumbnail">
                    <div className="item">
                        <img src={index1} alt="Thumbnail 1" />
                        <div className="content">
                            <div className="title">CARE ABOUT YOUR HEART</div>
                            <div className="description">MEDIGUARD</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={index2} alt="Thumbnail 2" />
                        <div className="content">
                            <div className="title">DON'T EAT CHINESE FOOD</div>
                            <div className="description">MEDIGUARD</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={index3} alt="Thumbnail 3" />
                        <div className="content">
                            <div className="title">EAT HEALTHY FOOD</div>
                            <div className="description">MEDIGUARD</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={index4} alt="Thumbnail 4" />
                        <div className="content">
                            <div className="title">DON'T GET LIQUOR</div>
                            <div className="description">MEDIGUARD</div>
                        </div>
                    </div>
                </div>

                <div className="arrows">
                    <button id="prev">f</button>
                    <button id="next">b</button>
                </div>
                <div className="time"></div>
            </div>
        </div>
    );
}