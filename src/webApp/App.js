import React from "react"
import faker from "faker"
import "./style.css"

const Jumbotron = ({title, desc}) => {
	return (
		<div className="jumbotron">
			<h3> {title} </h3>
			<p> {desc} </p>
		</div>
	)
}

const Link = ({name, icon}) => {
	return (
		<div className='link'>
			<span className={`fa fa-${icon} nav-icon`}></span>
			<a> {name} </a>
		</div>
	)
}

const NavigationBar = () => {
	return (
		<nav className="nav">
			<Link icon={'home'} name={'HOME'} />
			<Link icon={'question-circle-o'} name={'ABOUT'} />
			<Link icon={'product-hunt'} name={'PRODUCTS'} />
			<Link icon={'send-o'} name={'CONTACT'} />
		</nav>
	)
}

const Section = ({title, content, sectionStyle, children}) => {
	return (
		<div className={sectionStyle}>
			<h5> {title} </h5>
			<p> {content} </p>
			{children}
		</div>
	)
}

const ServicesCard = ({title, details}) => {
	return (
		<div className='service-card'>
			<div className='icon-circle'>
				<span className='fa fa-video-camera service-icon'> </span>
			</div>
			<h3> {title} </h3>
			<p> {details} </p>
			<a> Learn more! </a>
		</div>
	)
}

const ProductCard = ({product, price, img}) => {
	return (
		<div className='product-card'>
			<img src={img} />
			<h4> {price} / {product} </h4>
		</div>
	)
}

const App = () => {
	return (
		<div>
			<NavigationBar />
			<Jumbotron 
				title={faker.name.title()}
				desc={faker.lorem.sentences()}
			/>
			<Section 
				sectionStyle='about' 
				title={'About'} 
				content={'All about us'} 
			/>
			<Section 
				sectionStyle='services' 
				title={'Services'} 
				content={'Read about our services'} 
			>
				<div className='service-card-container'>
					<ServicesCard
						title={'Video Webinars'}
						details={'Ichiban Video Webinars'}
					/>

					<ServicesCard
						title={'Video Webinars'}
						details={'Ichiban Video Webinars'}
					/>

					<ServicesCard
						title={'Video Webinars'}
						details={'Ichiban Video Webinars'}
						/>

					<ServicesCard
						title={'Video Webinars'}
						details={'Ichiban Video Webinars'}
					/>
				</div>
			</Section>
			
			<Section 
				sectionStyle='products' 
				title={'Products'} 
				content={'Best selling products'} 
			>
				<ProductCard 
					product={faker.commerce.product()}
					price={faker.commerce.price()}
					img={faker.random.image()}
				/>
				<ProductCard 
					product={faker.commerce.product()}
					price={faker.commerce.price()}
					img={faker.random.image()}
				/>
				<ProductCard 
					product={faker.commerce.product()}
					price={faker.commerce.price()}
					img={faker.random.image()}
				/>
				<ProductCard 
					product={faker.commerce.product()}
					price={faker.commerce.price()}
					img={faker.random.image()}
				/>
				<ProductCard 
					product={faker.commerce.product()}
					price={faker.commerce.price()}
					img={faker.random.image()}
				/>
			</Section>
		</div>
	)
}

export default App