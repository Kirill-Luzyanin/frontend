import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function Formin(): JSX.Element {

    const [value, setValue] = useState("");

    const navigate = useNavigate();

    const handleChange = (e : React.FormEvent<HTMLInputElement>)=> setValue(e.currentTarget.value);

    const hadleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{e.preventDefault();
        console.log(`/page/${value}`);
     navigate(`/page/${value}`);
     setValue("");
    }   

    return (
        <>
            <form onSubmit={hadleSubmit}>
                <label>
                    Page:
                    <input 
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Перейти" />
            </form>
        </>
    );

}

export default Formin;