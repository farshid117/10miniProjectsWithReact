import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

import Features from '../../features/Features';
import HomeModal from '../../components/HomeModal';
import HomeChart from '../../components/HomeChart';
import { data, NewJoinMember, LastTransaction } from "../../components"
import { Button } from '@mui/material';
import { Modal } from 'react-bootstrap';

export default function Home() {
  let matches = useMediaQuery('(min-width:768px)') //MUI
  const [features] = useState(
    [
      { title: "Average", variant: "Light",   textColor: "dark", arrow: "down", telotance: "-10.4" },
      { title: "Sales",   variant: "warning", textColor: "dark", arrow: "up",   telotance: "+5.3" },
      { title: "Cost",    variant: "info",    textColor: "dark", arrow: "down", telotance: "-3.2" },
    ])
  const [showMemberModal, setShowMemberModal]   = useState(false)
  const [showTransacModal, setShowTransacModal] = useState(false)

  return (
    <>
      <section className="cardReport">
        <div className="card m-3 p-3" style={{ background: "rgba(255,255,255,.7)" }}>
          <div className="container">
            <div className="row justify-content-evenly align-items-center mt-3">
            
              {
                matches ? (
                  features.map((feature) => (
                    <div className=" col-sm-8 col-md-5 col-lg-3">
                      <Features key={feature.title} {...feature} />
                    </div>
                  ))
                ):(
                    <div className='col-12'>
                      <HomeModal features={features} />
                    </div>
                )
               
              }
             
            </div>
          </div>
        </div>
      </section>

      <section id='chartReport' dir='ltr'>
        <div className="container">
          <div className="row mt-4 justify-content-center">
            <div className="col-12">
              <HomeChart
                data={data}
                title="Chart Reports :"
                datakeyX="month"
                datakeyY="Price"
              />
            </div>
          </div>
        </div>

      </section>

      <section id='newJoinMember'>

        <div className="container">
          <div className="row  justify-content-between ">
            {/* todo display Lg-Xl */}
            <div className='col-12 col-md-6 mb-lg-3 d-none d-lg-block'>
              <h3 className="widgetTitle" style={{ direction: "ltr" }}>Transaction Reports:</h3>
              <div className="card m-2 p-3" style={{ background: "rgba(255,255,255,.9)" }}>
                <LastTransaction />
              </div>
            </div>
            <div className='col-12 col-md-6 d-none d-lg-block'>
              <h3 className="widgetTitle" style={{ direction: "ltr" }}>Recently member :</h3>
              <div className="card m-2 p-3" style={{ background: "rgba(255,255,255,.9)" }}>
                <NewJoinMember />
              </div>
            </div>

            {/* todo display Xs-Sm-Md */}
            {/* todo: Buttons */}
              <div className='d-flex justify-content-center d-lg-none '>
              <Button variant='contained'
                color='secondary'
                className='me-2'
                onClick={() => setShowMemberModal((prev) => !prev)}
              >
                Recently Member
              </Button>
              <Button variant='contained'
                color='secondary'
                onClick={() => setShowTransacModal((prev) => !prev)}
              >
                Transaction Report
              </Button>
            </div>
            {/* todo: Modals */}
            <div className='d-block d-lg-none'>
              <Modal show={showMemberModal}
                fullscreen="lg-down"
                onHide={() => setShowMemberModal(false)}
                className='d-block d-lg-none'
                style={{ direction: "ltr" }}
              >
                <Modal.Header className='bg-primary-subtle' closeButton>
                  <Modal.Title className='text-primary fw-bold'>Recently Members</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NewJoinMember />
                </Modal.Body>
              </Modal>
            </div>
            <div className='d-block d-lg-none'>
              <Modal show={showTransacModal}
                fullscreen="lg-down"
                onHide={() => setShowTransacModal(false)}
                className='d-block d-lg-none '
                style={{ direction: "ltr" }}
              >
                <Modal.Header className='bg-primary-subtle' closeButton>
                  <Modal.Title className='text-primary fw-bold '>Transaction Reports</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <LastTransaction />
                </Modal.Body>
              </Modal>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}
