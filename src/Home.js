import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Welcome to Our Website</h1>
                    <p className="lead">Your one-stop solution for all your needs</p>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center">Features</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Feature One</h5>
                                    <p className="card-text">Description of feature one.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Feature Two</h5>
                                    <p className="card-text">Description of feature two.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Feature Three</h5>
                                    <p className="card-text">Description of feature three.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center">Our Services</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Service One</h5>
                                    <p className="card-text">Description of service one.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Service Two</h5>
                                    <p className="card-text">Description of service two.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Service Three</h5>
                                    <p className="card-text">Description of service three.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center">Gallery</h2>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-6 mb-4">
                            <img src="https://via.placeholder.com/150" className="img-fluid" alt="Gallery Image" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4">
                            <img src="https://via.placeholder.com/150" className="img-fluid" alt="Gallery Image" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4">
                            <img src="https://via.placeholder.com/150" className="img-fluid" alt="Gallery Image" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4">
                            <img src="https://via.placeholder.com/150" className="img-fluid" alt="Gallery Image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p className="m-0">© 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
