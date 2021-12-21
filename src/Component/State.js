import React from 'react'
import './stat.css';
import {useEffect,useState} from 'react'
function State() {
    const [data, setdata] = useState({})
    

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
        
.then(res=>res.json()).then(res=>{setdata(res);}



    )}, [])
console.log(data)
    return (
        <>
            <h1>WORLD COVID-19 Dashboard</h1>

            <div>
                <div style={{paddingTop:"60px"}}>
                    <table>
                        <tr>
                            <th>
                                Total cases
                            </th>
                            <th>
                                Today cases
                            </th>
                            <th>
                                Active
                            </th>
                            <th>
                                Recovered
                            </th>
                        </tr>
                        <tr>
                            <th>
                                {data.cases}
                            </th>
                            <th>
                                {data.todayCases}
                            </th>
                            <th>
                                {data.active}
                            </th>
                            <th>
                                {data.recovered}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Critical
                            </th>
                            <th>
                                Deaths
                            </th>
                            <th>
                                Total Deaths
                            </th>
                            <th>
                                Population
                            </th>
                        </tr>
                        <tr>
                            <th>
                                {data.critical}
                            </th>
                            <th>
                                {data.deaths}
                            </th>
                            <th>
                                {data.todayDeaths}
                            </th>
                            <th>
                                {data.population}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Today Recovered
                            </th>
                            <th>
                                Test
                            </th>
                            <th>
                            TestsPerOneMillion
                            </th>
                            <th>
                            CasesPerOneMillion
                            </th>
                        </tr>
                        <tr>
                            <th>
                            {data.todayRecovered}
                            </th>
                            <th>
                                {data.tests}
                            </th>
                            <th>
                            {data.testsPerOneMillion}
                            </th>
                            <th>
                            {data.casesPerOneMillion}
                            </th>
                        </tr>
                        <tr>
                            <th>
                            ActivePerOneMillion
                            </th>
                            <th>
                            RecoveredPerOneMillion 
                            </th>
                            <th>
                            CriticalPerOneMillion
                            </th>
                            <th>
                            AffectedCountries
                            </th>
                        </tr>
                        <tr>
                            <th>
                            {data.activePerOneMillion}
                            </th>
                            <th>
                            {data.recoveredPerOneMillion} 
                            </th>
                            <th>
                            {data.criticalPerOneMillion}
                            </th>
                            <th>
                            {data.affectedCountries}
                            </th>
                        </tr>
                    </table>
                </div>
                </div>
            
        </>
    )
}

export default State
