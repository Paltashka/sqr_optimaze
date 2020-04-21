import React, {Component, Fragment} from "react";
import MenuStart from '../MenuStart';
import Category from '../Category';
import FlippingPages from 'flipping-pages'
import FlipBook from '../FlipBook'
/* IMPORTANT */
import 'flipping-pages/FlippingPages.css'

import MenuNavigator from '../Menu-navigator';
import Products from '../Products';
import mood from '../../images/mood.png';

class Flipper extends Component {

	constructor(props) {
			super(props)
			this.totalPages = 4
			this.state = {
					selected: 0,
			}
			this.handleSelectedChange = this.handleSelectedChange.bind(this)
			this.previous = this.previous.bind(this)
			this.next = this.next.bind(this)
	}

	handleSelectedChange(selected) {
			this.setState({selected})
	}

	previous() {
			this.setState(state => ({
					selected: state.selected - 1
			}))
	}

	next(index) {
			this.setState(state => ({
					selected: state.selected + index
			}))
	}

	render() {
		const { info, banner, lang, categories, products } = this.props;

		const getSortIndex = id=>{
			for (let i=0;i<categories.length;i++){
					if(categories[i].id===id){
							return i;
					}
			}
			return 0;
	}

	let items = products.reduce((a,c)=>{
			const {categories} = c;
			if(!categories||Array.isArray(categories)===false||categories.length===0){
					return a;
			}
			const {id, name} = categories[0];
			if(!a[id]){
					a[id]={id,name:name[lang],pr:[]}
			}
			a[id].pr.push(c);
			return a;
	},{});
	items = Object.values(items);
	items = items
			.map(m=>({...m,sort_index:getSortIndex(m.id)}))
			.sort((a,b)=>a.sort_index-b.sort_index);

			return (
					<div className="App">
						 <FlipBook>
						 		<div className="page" style={{ backgroundColor: 'white' }}>
									<div className="front-side" style={{ overflow: 'hidden' }}>
										<MenuStart lang={lang} next={this.next} info={info} banner={banner} categories={categories} /> 
									</div>
									{/* <div className="back-side" style={{ overflow: 'hidden' }}>
											<div></div>
									</div> */}
								</div>
								{items.map((item, index, arr) => { 
									return (
										<div className="page" key={item.id} >
											<div className="front-side" style={{ overflow: 'hidden' }}>
												<img src={mood} alt="banner" />
												<MenuNavigator 
													prev={index === 0 ? 'Home' : arr[index-1].name}
													name={item.name}
													next={index === arr.length - 1 ? '' : arr[index+1].name} />
												<Products
													info={info}
													products={products}
													categories={categories}
													lang={lang}
													item={item}
												/>
											</div>
											{/* <div className="back-side" style={{ overflow: 'hidden' }}>
												<div></div>
											</div> */}
										</div>
									)									
								})}
							</FlipBook>
					</div>
			)
	}
}

export default Flipper;