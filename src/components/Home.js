import React from 'react';
import { Link } from 'react-router-dom';
import { homeFiles } from '../files/homefiles';

function Home() {
    return(
        <div className="home container">
            {homeFiles.map((file) => {
                return(
                    <Link key={file.id} className="links" to={'/shop/'+file.name}>
                        <div className="home-image-holder">
                            <div className="home-card" style={
                                {backgroundImage:`url(${file.image})`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'cover',
                                backgroundPosition:'center'}}>
                            </div>
                            <div className="home-center">
                                    <p>{file.name}</p>
                                    <p>Shop Now</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Home;