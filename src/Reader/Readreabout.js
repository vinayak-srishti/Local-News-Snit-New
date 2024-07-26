import React from 'react'
import "../Reader/Readerabout.css"

function Readreabout() {
  return (
    <div className='col-9'>
        <div className='container'>
            <div className='row'>
                <div className='col reader_about'>
                    <h2>About</h2>
                    <p>Welcome to LNG, your one-stop destination for the latest and most relevant news from around the world. <br/>LNG, 
                        we understand the importance of staying informed in today's fast-paced world. Our<br/> mission is to 
                        curate and deliver news that matters to you, all in one convenient place.</p>
                    <h3>What sets as Apart</h3>
                    <ul className='reader_about_list'>
                        <li>Comprehensive Coverage: We aggregate news from reputable sources, providing you with a comprehensive overview of current events.</li>
                        <li>Customized Experience: Tailor your news feed to your interests. Choose from a wide range of categories, ensuring you receive updates on topics that matter most to you.</li>
                        <li>Real-Time Updates: Stay ahead with real-time news updates, ensuring you never miss a crucial moment.</li>
                    </ul>
                    <h3>Explore Our Categories:</h3>
                    <ul className='reader_about_list'>
                        <li>Breaking News: Instant updates on major events shaping the world.</li>
                        <li>Business & Finance: Stay informed about market trends, financial news, and business insights.</li>
                        <li>Science & Technology: Explore the latest advancements and discoveries in the world of science and technology.</li>
                        <li>Entertainment: Get the scoop on celebrity news, movie releases, and entertainment buzz.</li>
                        <li>Health & Lifestyle: Stay healthy and informed with the latest in wellness, lifestyle, and health news.</li>
                        </ul>
                </div>
                
            </div>
            

        </div>
    </div>
  )
}

export default Readreabout