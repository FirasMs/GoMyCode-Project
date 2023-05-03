import React from 'react'
import axios from 'axios';



const Card = ({ condidat, userDecode }) => {

    const sendMail = async ({ email, sended }) => {
        const res = await axios.post("http://localhost:5001/api/user/sendMail", { emailUser: email, mailTo: sended })
        console.log(res);
    }



    return (
        <>
            <div class="card mb-3" style={{ maxWidth: 540 }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={condidat.image} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{condidat.name}</h5>
                            <p class="card-text">{condidat.country}</p>
                            <p class="card-text">{condidat.sex}</p>
                            <p class="card-text">{condidat.experence}</p>
                            <p className=''>{condidat.email}</p>
                        </div>
                    </div>

                    <button onClick={() => sendMail(condidat.email, userDecode.email)}>send Mail</button>
                </div>
            </div>
        </>
    )
}

export default Card