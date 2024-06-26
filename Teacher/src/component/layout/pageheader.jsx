
import { Link } from "react-router-dom";
import './Font.css'


const PageHeader = ({ title, curPage, img }) => {
    const background = {
        backgroundImage: `url('./assets/images/pageheader/bg/02.jpg')`,
    }
    
    const heading = {
        fontFamily: 'Josefin Sans, sans-serif',
        fontOpticalSizing: 'auto',
    fontWeight: '700', // Replace <weight> with the desired font weight value
    fontStyle: 'normal',
    color: '#black'
    }
   

    return (
        <div className="pageheader-section" style={background}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pageheader-content text-center">
                            <h2 style={heading}>{title}</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link to="/" style={{color: 'black'}}>Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page" style={{color: 'black'}}>{curPage}</li>
                                </ol>
                            </nav>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default PageHeader;