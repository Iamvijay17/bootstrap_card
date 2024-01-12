import React from 'react'
import 'animate.css';
const NavBarTop = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a href="/" className='animate__animated animate__bounce animate__delay-4s'><img src="https://picsxtra.com/images/2024/01/12/logodd43443b8854b350.png" alt="Bootstrap" width="90" /></a>
                    <div clamss="" id="">

                        <div class="d-flex " role="search">
                            {/* <i class="fa-solid fa-cart-shopping"></i>
                            <i class="fa-solid fa-user"></i> */}
                            <button type="button" class="btn fa-solid fa-cart-shopping position-relative me-4">
                                <span class="position-absolute  top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor:"#FF8C00"}}>
                                    02
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBarTop