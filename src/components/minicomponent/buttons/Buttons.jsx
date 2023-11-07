import React, { useEffect, useState } from 'react';
import { Button, ToggleButton } from 'react-bootstrap';


function simulateHttpRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

//todo: Loading Button
export function LoadingButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateHttpRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
     <div className="">
            <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'منتظر بمانید...' : 'لیست رستورانها'}
            </Button>
     </div>
    );
}

//todo: Toggle Button --> checkBox Button
export function ToggleButtonExample() {
    const [checked, setChecked] = useState(false);
    return (
        <div className='ms-3'>
            <ToggleButton
                className="mb-2"
                id="toggle-check"
                type="checkbox"
                variant="outline-success"
                checked={checked}
                value="1"
                onChange={(event) => setChecked(event.currentTarget.checked)}
            >
                بلایای طبیعی
            </ToggleButton>
        </div>
    )

}
