import { useState } from 'react';

import { useMediaQuery } from '@mui/material';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Modal } from 'react-bootstrap';

import Features from '../../features/Features';
import HomeModal from '../../components/HomeModal';
import HomeChart from '../../components/HomeChart';
import { data, NewJoinMember, LastTransaction } from "../../components"

export default function Home() {
  let matches = useMediaQuery('(min-width:768px)') //MUI Hook
  const [features] = useState(
    [
      { title: "Average", variant: "Light", textColor: "dark", arrow: "down", telotance: "-10.4" },
      { title: "Sales", variant: "warning", textColor: "dark", arrow: "up", telotance: "+5.3" },
      { title: "Cost", variant: "info", textColor: "dark", arrow: "down", telotance: "-3.2" },
    ])
  const [showMemberModal, setShowMemberModal] = useState(false)
  const [showTransacModal, setShowTransacModal] = useState(false)

  return (
    <>
      <section className="cardReport">
        <div className="card m-3 p-3" style={{ background: "rgba(255,255,255,.7)" }}>
          <Grid container spacing={4}>
            <Grid
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
              sx={{flexGrow:1}}
            >
              {
                matches ? (
                  features.map((feature) => (
                    <Grid sm={8} md={5} lg={3}>
                      <Features key={feature.title} {...feature} />
                    </Grid>
                  ))
                ) : (
                  <Grid xs>
                    <HomeModal features={features} />
                  </Grid>
                )

              }
            </Grid>
          </Grid>
        </div>
      </section>

      <section id='chartReport' dir='ltr'>
        <Grid container>
          <Grid display="flex" justifyContent="center" sx={{ flexGrow:1 , mt:1}} >
            <Grid xs>
              <HomeChart
                data={data}
                title="Chart Reports :"
                datakeyX="month"
                datakeyY="Price"
              />
            </Grid>
          </Grid>
        </Grid>
      </section>

      <section id='report-table mt-5'>
        <Grid container>
          <Grid display="flex" justifyContent="space-between" sx={{flexGrow:1}}>
            {
              matches ? (
                <>
                  {/* todo display Lg-Xl */}
                  <Grid xs lg={6}>
                    <h3 className="widgetTitle me-3" style={{ direction: "ltr" }}>Transaction Reports :</h3>
                    <div className="card m-2 p-3" style={{ background: "rgba(255,255,255,.9)" }}>
                      <LastTransaction />
                    </div>
                  </Grid>
                  <Grid xs lg={6}>
                    <h3 className="widgetTitle me-3" style={{ direction: "ltr" }}>Recently Member :</h3>
                    <div className="card m-2 p-3" style={{ background: "rgba(255,255,255,.9)" }}>
                      <NewJoinMember />
                    </div>
                  </Grid>
                </>
              ) : (
                <>
                  {/* todo display Xs-Sm-Md */}
                  <div className='d-flex justify-content-center w-100'>
                    <Button
                      variant='contained'
                      color='secondary'
                      className='me-2'
                      onClick={() => setShowMemberModal((prev) => !prev)}
                    >
                      Recently Member
                    </Button>
                    <Button
                      variant='contained'
                      color='secondary'
                      onClick={() => setShowTransacModal((prev) => !prev)}
                    >
                      Transaction Report
                    </Button>
                  </div>
                </>
              )

            }

            {/* todo: memberModal */}
            <div className='memberModal'>
              <Modal show={showMemberModal}
                fullscreen="lg-down"
                onHide={() => setShowMemberModal(false)}
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
            {/* todo: transactModal */}
            <div className='transactModal'>
              <Modal
                show={showTransacModal}
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

          </Grid>
        </Grid>
      </section>
    </>
  );
}
