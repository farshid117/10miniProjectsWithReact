import { LineChart, Line, ResponsiveContainer, Legend, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
const HomeChart = ({ title, data, datakeyX, datakeyY, grid }) => {

    return (
        <div >
            <h6 className='fw-bold' >{title}</h6>
            <div className="card m-3 py-5" style={{ background: "rgba(0,0,0,.5)" }}>
                <ResponsiveContainer width="" height={180} respect={""}  >
                    <LineChart width={""} height={300} data={data} style={{ color: "red" }}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <Line type="monotone" dataKey={datakeyY} stroke="#82ca9d" strokeWidth={2} />
                        <XAxis dataKey={datakeyX} />
                        <YAxis dataKey={datakeyY} />
                        {grid && <CartesianGrid stroke="#333" strokeDasharray="5 5" />}
                        <Legend />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default HomeChart;
