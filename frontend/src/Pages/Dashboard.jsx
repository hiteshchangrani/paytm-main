import axios from "axios";
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react";



export const Dashboard = () => {
    const [bal,setBal] = useState(0)
    async function getBalance() {
        const res = await axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                'authorization': 'Bearer '+localStorage.getItem("token")
              }
        });
        if(res.data)setBal(Math.floor(res.data.balance))
    }
    useEffect(() => {
        getBalance()
    }, [bal]);
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={bal} />
            <Users />
        </div>
    </div>
}