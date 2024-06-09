import React from 'react'
import { Link } from 'react-router-dom';
import Rating from "../component/sidebar/rating";
import { Button } from 'react-bootstrap';

const SubscriptionCourseList = () => {

    const courseList = [
        {
            imgUrl: 'assets/images/course/01.jpg',
            imgAlt: 'course rajibraj91 rajibraj',
            price: '$30',
            cate: 'Adobe XD',
            reviewCount: '03 reviews',
            title: 'Fundamentals of Adobe XD Theory Learn New',
            totalLeson: '18x Lesson',
            schdule: 'Online Class',
            authorImgUrl: 'assets/images/course/author/01.jpg',
            authorImgAlt: 'course author rajibraj91 rajibraj',
            authorName: 'William Smith',
            btnText: 'Start Now',
        },
        {
            imgUrl: 'assets/images/course/02.jpg',
            imgAlt: 'course rajibraj91 rajibraj',
            price: '$30',
            cate: 'Adobe XD',
            reviewCount: '03 reviews',
            title: 'Certified Graphic Design with Free Project Course',
            totalLeson: '18x Lesson',
            schdule: 'Online Class',
            authorImgUrl: 'assets/images/course/author/02.jpg',
            authorImgAlt: 'course author rajibraj91 rajibraj',
            authorName: 'Lora Smith',
            btnText: 'Start Now',
        },
        {
            imgUrl: 'assets/images/course/03.jpg',
            imgAlt: 'course rajibraj91 rajibraj',
            price: '$30',
            cate: 'Adobe XD',
            reviewCount: '03 reviews',
            title: 'Theory Learn New Student And Fundamentals',
            totalLeson: '18x Lesson',
            schdule: 'Online Class',
            authorImgUrl: 'assets/images/course/author/03.jpg',
            authorImgAlt: 'course author rajibraj91 rajibraj',
            authorName: 'Robot Smith',
            btnText: 'Start Now',
        },
        {
            imgUrl: 'assets/images/course/04.jpg',
            imgAlt: 'course rajibraj91 rajibraj',
            price: '$30',
            cate: 'Adobe XD',
            reviewCount: '03 reviews',
            title: 'Computer Fundamentals Basic Startup Ultricies Vitae',
            totalLeson: '18x Lesson',
            schdule: 'Online Class',
            authorImgUrl: 'assets/images/course/author/04.jpg',
            authorImgAlt: 'course author rajibraj91 rajibraj',
            authorName: 'Zinat Zaara',
            btnText: 'Start Now',
        },
        {
            imgUrl: 'assets/images/course/05.jpg',
            imgAlt: 'course rajibraj91 rajibraj',
            price: '$30',
            cate: 'Adobe XD',
            reviewCount: '03 reviews',
            title: 'Boozy Halloween Drinks for the Grown Eleifend Kuismod',
            totalLeson: '18x Lesson',
            schdule: 'Online Class',
            authorImgUrl: 'assets/images/course/author/05.jpg',
            authorImgAlt: 'course author rajibraj91 rajibraj',
            authorName: 'Rajib Raj',
            btnText: 'Start Now',
        },
        {
            imgUrl: 'assets/images/course/06.jpg',
            imgAlt: 'course rajibraj91 rajibraj',
            price: '$30',
            cate: 'Adobe XD',
            reviewCount: '03 reviews',
            title: 'Student Want to Learn About Science And Arts',
            totalLeson: '18x Lesson',
            schdule: 'Online Class',
            authorImgUrl: 'assets/images/course/author/06.jpg',
            authorImgAlt: 'course author rajibraj91 rajibraj',
            authorName: 'Angel Mili',
            btnText: 'Start Now',
        },
    ]


    return (
        <div className="section-wrapper" style={{ marginTop: '46px' }}>
            <div className="row g-5 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1" style={{ margin: '3px' }}>
                {courseList.map((val, i) => (
                    <div className="col" key={i} style={{maxWidth: '100%', paddingRight: 'calc(var(3rem)* .5)', paddingLeft: 'calc(var(3rem)* .5)'}}>
                        <div className="course-item">
                            <div className="course-inner" style={{ borderRadius: "13px" , padding: '0px'}}>
                                {/* <div className="course-thumb">
                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                </div> */}
                                <div className="course-content">
                                    {/* <div className="course-price">{val.price}</div> */}
                                    <div className="course-category">
                                        <div className="course-cate">
                                            <a href="#">{val.cate}</a>
                                        </div>
                                        <div className="course-reiew">
                                            <Rating />
                                            <span className="ratting-count"> {val.reviewCount}</span>
                                        </div>
                                    </div>
                                    <Link to="/course-single"><h4>{val.title}</h4></Link>
                                    <div className="course-details">
                                        <div className="couse-count"><i className="icofont-video-alt"></i> {val.totalLeson}</div>
                                        <div className="couse-topic"><i className="icofont-signal"></i> {val.schdule}</div>
                                    </div>
                                    <div className="course-footer">

                                        <div className="course-btn">
                                            <Button style={{ background: '#ff542f', width: '18rem' }}><svg style={{ width: '30px', height: '20px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                            </svg>
                                                <Link to="/course-single" style={{ color: "white" }}>{val.btnText}</Link></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubscriptionCourseList


