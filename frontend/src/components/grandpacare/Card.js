import React from 'react'

const Card = ({ condidat }) => {
    return (
        <>
            {condidat?.category === "grandpa" ? <div class="card mb-3" style={{ maxWidth: 540 }}>
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
                        </div>
                    </div>
                </div>
            </div> : null}
        </>
    )
}

export default Card