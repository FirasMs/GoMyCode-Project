import axios from "axios";
import React from "react";
import Card from "./Card";

const Grandpacare = () => {
    const [condidats, setCondidats] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const _getCondidats = async () => {
        const res = await axios.get("http://localhost:5001/api/condidat/getCondidat");;
        console.log(res.data.condidats);
        setCondidats(res.data.condidats);
        setLoading(true);
    }
    React.useEffect(() => {
        _getCondidats()
    }, [loading]);
    return (<div >
        {condidats && condidats?.map((condidat) => (

            <Card condidat={condidat} />
        )
        )}
    </div>
    );
};

export default Grandpacare;
