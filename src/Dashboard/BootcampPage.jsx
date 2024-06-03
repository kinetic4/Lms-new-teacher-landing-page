import React from 'react'
import { Link } from 'react-router-dom';
import Rating from "../component/sidebar/rating";

const courseList = [
    {
        imgUrl: 'assets/images/course/01.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Child 1 - 4HHJGY4 - Data Science',
        totalLeson: 'Starts 11 Jan 2024 00:00',
        schdule: 'Live Class',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'William Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/02.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Child 2 - 4HHJGY4 - Web Devlopment',
        totalLeson: 'Starts 11 Jan 2024 00:00',
        schdule: 'Live Class',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Lora Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/03.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Child 3 - 4HHJGY4 - Data Science',
        totalLeson: 'Starts 11 Jan 2024 00:00',
        schdule: 'Live Class',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Robot Smith',
        btnText: 'Read More',
    },

]

const BootcampPage = () => {
    return (
        <div className="section-wrapper" style={{ marginTop: '46px' }}>
            <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1" style={{ margin: '3px' }}>
                {courseList.map((val, i) => (
                    <div className="col" key={i}>
                        <div className="course-item">
                            <div className="course-inner" style={{ borderRadius: "13px" }}>
                                <div className="course-thumb">
                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                </div>
                                <div className="course-content">
                                    {/* <div className="course-price">{val.price}</div> */}
                                    <div className="course-category">
                                            {/* <div className="course-cate">
                                                <a href="#">{val.cate}</a>
                                            </div>
                                                <div className="course-reiew">
                                                    <Rating />
                                                    <span className="ratting-count"> {val.reviewCount}</span>
                                                </div> */}
                                      </div>
                                    <Link to="/course-single"><h4>{val.title}</h4></Link>
                                    <div className="course-details">
                                        <div className="couse-count"><i className="icofont-video-alt"></i> {val.totalLeson}</div>
                                        <div className="couse-topic"><i className="icofont-signal"></i> {val.schdule}</div>
                                    </div>
                                    {/* <div className="course-footer">
                                          <div className="course-author">
                                              <img src={`${val.authorImgUrl}`} alt={`${val.authorImgAlt}`} />
                                              <Link to="/team-single" className="ca-name">{val.authorName}</Link>
                                          </div>
                                          <div className="course-btn">
                                              <Link to="/course-single" className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                          </div>
                                      </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BootcampPage