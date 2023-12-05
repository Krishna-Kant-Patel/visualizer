import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import './style.css';

const Dashboard = ({data}) => {
  const [orgdata, setData] = useState();
  const [indata, setinData] = useState('');
  const [topic, setTopic] = useState();
  const [countrydata, setCountry] = useState();
  const [sectordata, setSector] = useState();
  const [sourcedata, setSource] = useState();
  const [pestledata, setPestle] = useState();
  const [regiondata, setRegon] = useState();

  useEffect(() => {
   setData(data)
    setinData(data)
  }, []);


  useEffect(() => {
    const uniqueDataByKey = [];
    const countryArr = [];
    const sectorArr = [];
    const sourceArr = [];
    const pestleArr = [];
    const regionArr = [];


    const keys = new Set();

    if (orgdata) {
      orgdata.forEach(item => {
        const key = item.topic;
        const countryKey = item.country;
        const sectorKey = item.sector;
        const sourceKey = item.source;
        const pestleKey = item.pestle;
        const regionKey = item.region;

        if (!keys.has(key)) {
          keys.add(key);
          uniqueDataByKey.push(item.topic);
        }

        if (!keys.has(countryKey)) {
          keys.add(countryKey);
          countryArr.push(item.country)

        }
        if (!keys.has(sectorKey)) {
          keys.add(sectorKey);
          sectorArr.push(item.sector)

        }

        if (!keys.has(sourceKey)) {
          keys.add(sourceKey);
          sourceArr.push(item.source)

        }

        if (!keys.has(pestleKey)) {
          keys.add(pestleKey);
          pestleArr.push(item.pestle)

        }

        if (!keys.has(regionKey)) {
          keys.add(regionKey);
          regionArr.push(item.region)

        }
      });
    }
    setTopic(uniqueDataByKey);
    setCountry(countryArr);
    setSector(sectorArr);
    setSource(sourceArr);
    setPestle(pestleArr);
    setRegon(regionArr);
    // console.log(countrydata);
  }, [orgdata]);


  function countryFilter(e) {
    if (e.target.value === "All") {
      setinData(orgdata);
    }
    else {
      const cFilter = orgdata.filter((item) => item.country === e.target.value);
      setinData(cFilter);
    }
  }


  function topicFilter(e) {
    
    if (e.target.value === "All") {
      setinData(orgdata);
    }
    else {
      const fTopic = orgdata.filter((item) => item.topic === e.target.value);
      setinData(fTopic);
    }


  }
  function sector(e) {
    if (e.target.value === "All") {
      setinData(orgdata);
    }
    else {
      const fSector = orgdata.filter((item) => item.sector === e.target.value);
      setinData(fSector);
    }
  }

  function source(e) {
    if (e.target.value === "All") {
      setinData(orgdata);
    }
    else {
      const fSource = orgdata.filter((item) => item.source === e.target.value);
      setinData(fSource);
    }
  }


  function pestle(e) {
    if (e.target.value === "All") {
      setinData(orgdata);
    }
    else {
      const fpestle = orgdata.filter((item) => item.pestle === e.target.value);
      setinData(fpestle);
    }
  }
  function region(e) {
    if (e.target.value === "All") {
      setinData(orgdata);
    }
    else {
      const fRegion = orgdata.filter((item) => item.region === e.target.value);
      setinData(fRegion);
    }
  }

  return (
    <>
      <div className="filtter">
        <select name="topic" id="" onChange={topicFilter}  >
          <option value=""  >Select Topic</option>
          <option name="topic" value="All"  >All</option>
          {topic &&
            topic.map((ele) => {
              return (
                <option name="topic" value={ele} >{ele}</option>
              )
            })
          }


        </select>


        <select name="country" id="" onChange={countryFilter}  >
          <option value="" >Select Country</option>
          <option value="All"  >All</option>
          {countrydata &&
            countrydata.map((ele) => {
              return (
                <option value={ele} >{ele}</option>
              )
            })
          }
        </select>

        <select name="Sector" id="" onChange={sector}  >
          <option value=""  >Select Sector</option>
          <option value="All"  >All</option>
          {sectordata &&
            sectordata.map((ele) => {
              return (
                <option value={ele} >{ele}</option>
              )
            })
          }
        </select>
        <select name="Source" id="" onChange={source}  >
          <option value=""  >Select Sector</option>
          <option value="All"  >All</option>
          {sourcedata &&
            sourcedata.map((ele) => {
              return (
                <option value={ele} >{ele}</option>
              )
            })
          }
        </select>

        <select name="pestle" id="" onChange={pestle}  >
          <option value=""  >Select Pestle</option>
          <option value="All"  >All</option>
          {pestledata &&
            pestledata.map((ele) => {
              return (
                <option value={ele} >{ele}</option>
              )
            })
          }
        </select>
        <select name="Region" id="" onChange={region}  >
          <option value=""  >Select Region</option>
          <option value="All"  >All</option>
          {regiondata &&
            regiondata.map((ele) => {
              return (
                <option value={ele} >{ele}</option>
              )
            })
          }
        </select>


      </div>
      <ResponsiveContainer width="100%" height={500} >
        <LineChart
          width={200}
          height={100}
          data={indata}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="intensity" stroke="#8884d8" activeDot={{ r: 5 }} />
          {/* <Line type="monotone" dataKey="relevance" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Dashboard;