import { useState } from "react"
import { Alert, Button } from 'react-bootstrap';

//todo: Alert Basic
export function AlertBasic() {
    return (
        <>
            <div className="container mt-5">
                <Alert variant="success">
                    This is a Success alert—check it out!
                </Alert>
            </div>

        </>
    );
}
//todo: Alert with Link
export function AlertLinks() {
    return (
        <>
            <div className="container mt-5">
                <Alert variant="primary">
                    This is a  alert with{' '}
                    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                    you like.
                </Alert>
            </div>

        </>
    );
}
//todo: Alert with Additional Content
export function AlertAdditionalContent() {
    return (
        <>
            <div className="container mt-5">
                <Alert variant="warning">
                    <Alert.Heading>لورم ایپسوم متن ساختگی</Alert.Heading>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                    <hr />
                    <p className="mb-0">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.

                    </p>
                </Alert>
            </div>

        </>
    );
}

//todo: Alert with Dismissing
export function AlertDismissing() {
    const [show, setShow] = useState(true);
    return (
        <div className="container mt-5">
            {
                show ?(

                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>لورم ایپسوم متن ساختگی</Alert.Heading>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>
                    </Alert>
                )

                    :(
                        <Button variant="danger" onClick={() => setShow(true)} > show Alert </Button >
                    )
                    

            }
        </div>
    )
}