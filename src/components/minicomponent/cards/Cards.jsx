import { Button, Card, ListGroup, Tab, Tabs, } from 'react-bootstrap';

//todo: CardBasic
export function CardBasic() {

  return (
    <div className="">
      <Card >
        <Card.Img variant="top" src="./img/104.jpg" className='img-fluid' style={{ height: 200 }} />
        <Card.Body>
          <Card.Title>لورم ایپسوم متن</Card.Title>
          <Card.Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </Card.Text>
          <Button variant="primary">مطلب بیشتر</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

//todo: Card Details 
export function CardBodyDetails() {
  return (
    <Card >
      <Card.Body>
        <Card.Title>لورم ایپسوم متن ساختگی</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">لورم ایپسوم</Card.Subtitle>
        <Card.Text>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        </Card.Text>
        <Card.Link as="button" href="#" className='btn btn-primary' >لینک اول</Card.Link>
        <Card.Link as="button" href="#" className='btn btn-danger me-3'>لینک دوم</Card.Link>
      </Card.Body>
    </Card>
  );
}

//todo: Card ListGroup
export function CardListGroup() {
  return (
    <Card >
      <Card.Header className='fw-bold text-white bg-primary'>سرفصل‌ها</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>لورم ایپسوم</ListGroup.Item>
        <ListGroup.Item>لورم ایپسوم متن</ListGroup.Item>
        <ListGroup.Item>لورم ایپسوم متن ساختگی</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

//todo: CardWithBackgroundColor
export const CardWithBackgroundColor = ({ variant }) => {

  return (
    <>
    
        <Card
          bg={variant}
          text={variant === "warning" ? "dark" : "white"}
          className="mb-2"
        >
          <Card.Header>لورم ایپسوم</Card.Header>

          <Card.Body>
            <Card.Title>لورم ایپسوم متن</Card.Title>
            <Card.Text>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </Card.Text>
          </Card.Body>
        </Card>
      
    </>
  )
}

//todo: Card Image Overlay
export function CardImgOverlay() {
  return (
    <Card className="bg-dark text-dark fw-bold text-end " >
      <Card.Img src="./img/105.jpg" className='img-fluid' />
      <Card.ImgOverlay>
        <Card.Title >Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

//todo: CardTabs
export function CardTabs() {
  return (
    <Card className='text-bg-white '>
      <Card.Body>
        <Tabs
          defaultActiveKey="thirdParty"
          className="mb-3"
        >

          <Tab eventKey="thirdParty" title="شخص ثالث">
            طبق قانون بیمه بیمه شخص ثالث یک بیمه اجباری میباشد
          </Tab>
          <Tab eventKey="Badane" title="بیمه بدنه">
            با توجه به موضوع خودرو غیر تعارف در شرایط فعلی با توجه به افزایش بی سابق قیمت خودرو بیمه بدنه از اهم واجبات است

          </Tab>
          <Tab eventKey="masuliyat" title="بیمه مسئولیت" >
            بیمه مسئولیت بیه ای است که کارفرمایان از دریافت آن اهمال میکنند و در مواقع خسارت کارگرانشان به اهمیت موضوع بیمه مسئولیت پی میبرند که دیگر کار از کار گذشته است

          </Tab>
        </Tabs>

      </Card.Body>
    </Card>
  );
}

