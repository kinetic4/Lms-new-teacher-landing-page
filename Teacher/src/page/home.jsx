import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import About from "../component/section/about";
import Banner from "../component/section/banner";
import Category from "../component/section/category";
import Course from "../component/section/course";
import Sponsor from "../component/section/sponsor";
import Books from "../component/section/books";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <Sponsor />
            <Category />
            <Course />
            <About />
            <Books />
            {/* <Student />
            <Blog />
            <Achievement /> */}
            <Footer />
        </Fragment>
    );
}
 
export default Home;