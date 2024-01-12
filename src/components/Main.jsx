import React from 'react'
import Swal from "sweetalert2";
import './style.css'
import 'animate.css';
const Main = () => {

    const btnclr = {
        backgroundColor: "#FF8C00",
        color: "white"
    }


    Swal.fire({
        title: "Welcome",
        text: "©2024 V I J A Y Inc. All rights reserved.",
        imageUrl: "https://source.unsplash.com/random/?vegitables/",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        background: "#fff url(https://sweetalert2.github.io/#input-typesimages/trees.png)",
        confirmButtonColor: '#FF8C00',
        allowOutsideClick: false,
        allowEscapeKey: false,
        backdrop: '#fff',
        customClass: "shadow-lg",
        showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
        },
        hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
        }
    });
    return (
        <div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-12 col-lg-3 py-3">
                        <div class="card shadow-lg animate__animated animate__bounceInLeft animate__delay-3s" style={{ width: "18rem;" }}>
                            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">vegitables</h5>
                                <p class="card-text">Vegetables are parts of plants that are consumed by humans or other animals as food.</p>
                                <a href="bt" class="btn fw-semibold " style={btnclr}>Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 py-3">
                        <div class="card shadow-lg animate__animated animate__bounceInRight animate__delay-3s" style={{ width: "18rem;" }}>
                            <img src="https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">vegitables</h5>
                                <p class="card-text">Vegetables are parts of plants that are consumed by humans or other animals as food.</p>
                                <a href="bt" class="btn fw-semibold" style={btnclr}>Go somewhere</a>

                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 py-3">
                        <div class="card shadow-lg animate__animated animate__bounceInLeft animate__delay-3s" style={{ width: "18rem;" }}>
                            <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">vegitables</h5>
                                <p class="card-text">Vegetables are parts of plants that are consumed by humans or other animals as food.</p>
                                <a href="bt" class="btn fw-semibold" style={btnclr}>Go somewhere</a>

                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 py-3">
                        <div class="card shadow-lg animate__animated animate__bounceInRight animate__delay-3s" style={{ width: "18rem;" }}>
                            <img src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">vegitables</h5>
                                <p class="card-text">Vegetables are parts of plants that are consumed by humans or other animals as food.</p>
                                <a href="bt" class="btn fw-semibold" style={btnclr}>Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
