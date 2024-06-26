
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';


import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import BlogPage from "./page/blog";
import BlogPageTwo from "./page/blog-2";
import BlogPageThree from "./page/blog-3";
import BlogSingle from "./page/blog-single";
import CartPage from "./page/cart-page";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import CourseSingle from "./page/course-single";
import CourseView from "./page/course-view";
import ForgetPass from "./page/forgetpass";
import Home from "./page/home";
import HomeTwo from "./page/home-2";
import HomeThree from "./page/home-3";
import HomeFour from "./page/home-4";
import HomeFive from "./page/home-5";
import HomeSix from "./page/home-6";
import HomeSeven from "./page/home-7";
import InstructorPage from "./page/instructor";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignupPage from "./page/signup";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";
import Subscription from "./Dashboard/SubscriptionLayout";
import MyEbook from "./Dashboard/MyEbookLayout";
import Wishlist from "./Dashboard/WishlistLayout";
import PurchaseHistory from "./Dashboard/PurchaseHistoryLayout";
import BookedTution from "./Dashboard/BookedTution";
import Bootcamp from "./Dashboard/BootcampLayout";
import MyCertificate from "./Dashboard/MyCertificateLayout";
import Profile from "./Dashboard/ProfileLayout";
import Account from "./Dashboard/AccountLayout";
import CourseBundle from "./Dashboard/CourseBundleLayout";


function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="index-2" element={<HomeTwo />} />
				<Route path="index-3" element={<HomeThree />} />
				<Route path="index-4" element={<HomeFour />} />
				<Route path="index-5" element={<HomeFive />} />
				<Route path="index-6" element={<HomeSix />} />
				<Route path="index-7" element={<HomeSeven />} />
				<Route path="course" element={<CoursePage />} />
				<Route path="course-single" element={<CourseSingle />} />
				<Route path="course-view" element={<CourseView />} />
				<Route path="blog" element={<BlogPage />} />
				<Route path="blog-2" element={<BlogPageTwo />} />
				<Route path="blog-3" element={<BlogPageThree />} />
				<Route path="blog-single" element={<BlogSingle />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="team" element={<TeamPage />} />
				<Route path="team-single" element={<TeamSingle />} />
				<Route path="instructor" element={<InstructorPage />} />
				<Route path="shop" element={<ShopPage />} />
				<Route path="shop-single" element={<ShopDetails />} />
				<Route path="cart-page" element={<CartPage />} />
				<Route path="search-page" element={<SearchPage />} />
				<Route path="search-none" element={<SearchNone />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="signup" element={<SignupPage />} />
				<Route path="forgetpass" element={<ForgetPass />} />
				<Route path="*" element={<ErrorPage />} />
				<Route path='/subscription' element={<Subscription />} />
				<Route path='/myEbook' element={<MyEbook />} />
<<<<<<< Updated upstream
				<Route path= '/wishlist' element={<Wishlist />} />
				<Route path="/purchase-history" element={<PurchaseHistory/>} />
				<Route path="/booked-tution" element={<BookedTution />} />
				<Route path="/bootcamp" element={<Bootcamp />} />
				<Route path="/my-certificate" element={<MyCertificate />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/account" element= {<Account />} />
				<Route path="/course-bundle" element= {<CourseBundle />} />
=======
				<Route path='/Assigned-student' element={<AssignedStudent />} />
				<Route path="/Student-details" element={<StudentDetail />} />
				<Route path="/Sheduled-classes" element={<SheduledClasses />} />
				<Route path="/My-tracker" element={<MyTracker />} />
				<Route path="/my-certificate" element={<MyCertificate />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/account" element={<Account />} />
				<Route path="/course-bundle" element={<CourseBundle />} />
				<Route path='/Dashboard' element={<DashboardLayout />} />
				<Route path='/BecomeFranchise' element={<FranchiseSubscription />} />
				<Route path="/ViewDetails" element={<MyTrackerViewDeatails />} />
>>>>>>> Stashed changes
			</Routes>
		</BrowserRouter>
	);
}

export default App;
