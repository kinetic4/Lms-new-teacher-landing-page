import React from 'react';
import { motion } from 'framer-motion';
import {
  MDBContainer,
  MDBBtnGroup,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBTypography,
  MDBIcon,
  MDBCardTitle,
} from "mdb-react-ui-kit";

const FranchiseSubscriptionCard = ({ title, subtitle, price, features = [], highlight }) => {
  return (
    <MDBContainer style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
      <div className="text-center mb-4">
        <h4><strong>Pricing</strong></h4>

        <MDBBtnGroup className="mb-4" aria-label="Basic example">
          <MDBBtn href="#" color="dark" active>
            Monthly billing
          </MDBBtn>
          <MDBBtn color="light">
            Annual billing <small>(2 months FREE)</small>
          </MDBBtn>
        </MDBBtnGroup>
      </div>

      <MDBRow>
        {[
          { title: 'Hobby', price: 12, features: ['Lorem Ipsum', 'Lorem Ipsum'] },
          { title: 'Freelancer', price: 20, features: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'] },
          { title: 'Startup', price: 40, features: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'] },
          { title: 'Enterprise', price: 55, features: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'] },
        ].map((plan, index) => (
          <MDBCol key={index} md="3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MDBCard>
                <MDBCardBody className="mx-2">
                  <MDBCardTitle className="my-2">{plan.title}</MDBCardTitle>
                  <p className="text-muted">All the essentials for starting a business</p>
                  <p className="h2 fw-bold">
                    ${plan.price}
                    <small className="text-muted" style={{ fontSize: "18px" }}>/mo</small>
                  </p>
                  <MDBBtn href="#" color="dark" className="d-block mb-2 mt-3 text-capitalize">
                    Buy {plan.title}
                  </MDBBtn>
                </MDBCardBody>

                <MDBCardFooter>
                  <p className="text-uppercase fw-bold" style={{ fontSize: "12px" }}>What's included</p>
                  <MDBTypography listUnStyled className="mb-0 px-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-3">
                        <MDBIcon fas icon="check" className="text-success me-3" />
                        <small>{feature}</small>
                      </li>
                    ))}
                  </MDBTypography>
                </MDBCardFooter>
              </MDBCard>
            </motion.div>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default FranchiseSubscriptionCard;
