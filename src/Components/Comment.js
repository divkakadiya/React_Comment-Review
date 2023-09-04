import './Comment.css'
import React, { useState } from 'react'
import user from '../Components/user.png'

const Comment = () => {

    const [fetchData, setFetchData] = useState({
        userName: '',
        userReview: ''
    })

    const fetchInput = (e) => {
        setFetchData({ ...fetchData, [e.target.name]: e.target.value })
    }

    const [sdata, setSdata] = useState([])
    
    const submit = (e) => {
        e.preventDefault()
        let n = document.getElementById('name').value
        let r = document.getElementById('review').value

        if (!n || !r) {
            alert('You must write your review')
        }
        else {
            setSdata([
                ...sdata,
                {
                    time: new Date().toLocaleTimeString(),
                    date: new Date().toLocaleDateString(),
                    ...fetchData
                }])

            setFetchData({
                userName: '',
                userReview: ''
            })
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={submit}>
                <h1>Review <span>Form</span></h1>
                <label>Name</label><br />
                <input type='text' id='name' value={fetchData.userName} name='userName' onChange={fetchInput} placeholder='Your Name' /><br />

                <label>Review</label><br />
                <textarea name='userReview' value={fetchData.userReview} id='review' onChange={fetchInput} placeholder='Your Review'></textarea><br />

                <button>Submit</button>
            </form>
            {
                sdata.map((v, i) =>
                    <div className='post' key={i}>
                        <img src={user} style={{ width: '100px', height: '100px' }} />
                        <div className='postdata'>
                            <h6>Name : <span>{v.userName}</span></h6>
                            <h6>Time : <span>{v.time}</span></h6>
                            <h6>Date : <span>{v.date}</span></h6>
                            <h6>Review : <span>{v.userReview}</span></h6>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default Comment