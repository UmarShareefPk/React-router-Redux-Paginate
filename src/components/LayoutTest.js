import {React, useEffect, useState, useLayoutEffect, useRef} from 'react'

export default function LayoutTest() {

    const [name, setName] = useState('');

     const nameRef =  useRef();
    
     useEffect(() => {
        
        nameRef.current.value = "Umar Shareef";

         return () => {
             
         }
     }, [])

    return (
        <div>
            <h1>
                <input readOnly ref={nameRef} type="text" />
            </h1>
        </div>
    )
}
