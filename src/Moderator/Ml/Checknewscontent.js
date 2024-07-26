import React, { useEffect, useState } from 'react';
import "./Checknewscontent.css";
import axiosInstance from '../../BaseUrl';
import { Link } from 'react-router-dom';

function Checknewscontent({ newsId }) {
    const [check, setCheck] = useState('');
    const [badword, setBadword] = useState('');

    useEffect(() => {
        if (newsId) {
            axiosInstance.post(`checkForBadWords/${newsId}`)
                .then((result) => {
                    console.log(result);
                    if (result.data.status === 200) {
                        setCheck(result.data.msg);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setBadword(err.response.data.msg);
                });
        }
    }, [newsId]);

    return (
        <div className='checknews-contentmain'>
            <div className='checknews-contentbox container'>
                <div>
                    <h3>Checking the News Contents</h3>
                </div>
                <hr />
                <p>
                    {check ? (typeof check === 'object' ? JSON.stringify(check) : check) : badword}
                </p>
                
                    <div className='checknews-button'>
                        <Link
                            to={`/moderator_singlerequest/${newsId}`}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <button type='button'>Proceed with Accept or Reject <span className='ri-arrow-right-s-line' /></button>
                        </Link>
                    </div>
                
            </div>
        </div>
    );
}

export default Checknewscontent;
