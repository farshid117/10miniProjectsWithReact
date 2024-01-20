import { useEffect, useRef, useState } from 'react';
/* //todo: در این مثال قصد داریم کاربرد دوم یوزرف را پیاده سازی کنیم .که بعنوان متغیری برای ذخیره اطلاعات استفاده میشود */
const UseRefEx2 = () => {

    const [title, setTitle] = useState("")
    //return object with with one member  current key => {current:null}
    let renderCounter = useRef(1)
    console.log("renderCounter: ", renderCounter.current);

    useEffect(() => {
        renderCounter.current = renderCounter.current+ 1
        console.log("renderCounter.current: ", renderCounter.current);
    })

    return (

        <div className='text-center'>
            <div className='w-50 m-auto'>
                <input
                    type="text"
                    className='form-control'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className='mt-5' dir='ltr'>
                    <h3>input value is: <span className='text-danger'> {title}</span> </h3>
                    <h3>Number of Re-Render is: {renderCounter.current}</h3>
                </div>


            </div>

        </div>

    );
}

export default UseRefEx2;
