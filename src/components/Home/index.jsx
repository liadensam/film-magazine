import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {

const navigate = useNavigate();

const handleClick = () => {

  navigate('/reviews')

  //second parameter is for replacing the history, just the last step (we cannot return back by arrow)
  // navigate('/reviews', {replace=true})
}

	return (
		<>
			<h2>Home</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempora rem recusandae qui atque nobis, voluptatum vitae iure veritatis nulla exercitationem quas quam culpa obcaecati. Voluptas aliquam, quibusdam impedit quaerat alias veniam sequi magnam inventore nesciunt facere reprehenderit ad incidunt eaque libero animi nobis illum. Accusamus tempore necessitatibus quae quis?</p>

      <button onClick={handleClick}>Navigate to reviews</button>
		</>
	);
}

export default Home;