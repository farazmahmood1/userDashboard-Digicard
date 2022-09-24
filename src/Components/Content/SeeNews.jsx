import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Baseurl from '../SourceFiles/Baseurl'

const SeeNews = () => {

  const [userData, setUserData] = useState([])

  const recieveData = () => {
    axios.get(`${Baseurl}fetchNews`)
      .then((res) => {
        setUserData(res.data)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => { recieveData() }, [])

  return (
    <div className='main-panel'>
      <div className='content-wrapper'>
        <div className='mt-3 mb-4'>
          <h3 className='ms-3'><b> WHAT'S NEW</b></h3>
        </div>

        {
          userData.map((items) => {
            return (
              <>
                <div id="faq" className='w-100 accordion'>
                  <div className=''>
                    <ul className='mt-2 mb-3'>
                      <li>
                        <input type="checkbox" defaultChecked />
                        <i className="fa-sharp fa-solid fa-arrow-down" />
                        <div class="ribbon"><span class="ribbon__content">new</span></div>
                        <i />
                        <h2 className='accordion-header' style={{ color: "#4169e1" }}>{items.title}</h2>
                        <p><td dangerouslySetInnerHTML={{ __html: items.body }} /></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default SeeNews