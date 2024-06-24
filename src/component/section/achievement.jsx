
import CountUp from 'react-countup';
import FranchiseSubscriptionCard from '../../page/Franchise-SubscriptionCard';

const subTitle = "START TO SUCCESS";
const title = "Achieve Your Goals With Star Gleam Education ";





const Achievement = () => {
    return (
        <div className="achievement-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="counter-part mb-4">
                        <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
                           
                        </div>
                    </div>
                    <div className="achieve-part">
                        <div className="">
                            <FranchiseSubscriptionCard />   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Achievement;