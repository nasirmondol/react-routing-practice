import React from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Contact page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda fuga saepe qui reprehenderit officiis autem, explicabo tempora perspiciatis est, hic possimus molestias non voluptates dolores neque magnam libero inventore eum, quae nam animi rerum architecto. Reiciendis eum dolores voluptatibus inventore perferendis, id qui eligendi ipsam. Soluta at ad voluptatum!</p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, fugiat dicta! Perspiciatis id, incidunt expedita, facere velit obcaecati ratione consequatur veritatis ducimus officia, quis ipsum accusamus mollitia. Culpa, saepe impedit?</p>
            {/* <button onClick={() => {navigate("/")}}>Go to home page</button> */}
            <button onClick={() => navigate('/')}>Go to home page</button>
        </div>
    );
};

export default Contact;