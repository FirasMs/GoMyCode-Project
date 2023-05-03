import React, { useEffect } from "react";
import axios from "axios"

import Card from "./Card";
const Babysitter = ({userDecode}) => {
    const [condidats, setCondidats] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const _getCondidats = async () => {
        const res = await axios.get("http://localhost:5001/api/condidat/getCondidat");
        console.log(res.data.condidats);
        setCondidats(res.data.condidats);
        setLoading(true);
    }
    useEffect(() => {
        _getCondidats()
    }, [loading]);
    return (<div >
        {condidats && condidats?.map((condidat) => (

            <Card condidat={condidat} userDecode={userDecode} />
        )
        )}
    </div>
    );
};

export default Babysitter;
