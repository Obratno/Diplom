import React from "react";
import "./stylesMenuPage.css";
import photoCaesar from "../img/rest2.jpeg";
import photoTuna from "../img/tuna.jpg";
import photoBeet from "../img/beet.jpg";
import photoGreek from "../img/greek.jpg";
import photoCaprese from "../img/caprese.jpeg";
import photoKarbonara from "../img/karbonara.jpg";
import photoBoloniese from "../img/boloniese.jpg";
import photoLososem from "../img/shpinatom.jpg";
import photoPesto from "../img/pesto.jpg";
import photoGribami from "../img/gribami.jpeg";
import photoTikveniy from "../img/soupTikva.jpeg";
import photoLapsha from "../img/lapsha.jpg";
import photoMinestrone from "../img/ministrone.jpg";
import photoGribloy from "../img/gribnoi.jpg";
import photoTomatniy from "../img/tomatniy.jpeg";

const salads = [
	{
		title: "Цезарь с тигровыми креветками",
		desc: "Романо, тигровые креветки гриль, пармезан, крутоны, соус Цезарь",
		price: "690 р",
		img: photoCaesar,
		alt: "Цезарь с тигровыми креветками",
	},
	{
		title: "Салат с тунцом",
		desc: "Листья салата, тунец консервированный, яйцо, помидоры черри, оливки.",
		price: "620 р",
		img: photoTuna,
		alt: "Салат с тунцом",
	},
	{
		title: "Свекольный салат с орехами",
		desc: "Варёная свекла, грецкие орехи, сыр фета, зелень, оливковое масло.",
		price: "500 р",
		img: photoBeet,
		alt: "Свекольный салат с орехами",
	},
	{
		title: "Греческий",
		desc: "Помидоры, огурцы, красный лук, маслины, фета, оливковое масло.",
		price: "540 р",
		img: photoGreek,
		alt: "Греческий",
	},
	{
		title: "Капрезе",
		desc: "Помидоры, моцарелла, базилик, бальзамический соус.",
		price: "600 р",
		img: photoCaprese,
		alt: "Капрезе",
	},
];
const pastas = [
	{
		title: "Паста Карбонара",
		desc: "Спагетти, бекон, сливки, яйцо, пармезан, черный перец.",
		price: "390 р",
		img: photoKarbonara,
		alt: "Паста Карбонара",
	},
	{
		title: "Паста болоньезе",
		desc: "Тальятелле, мясной соус из говядины, томаты, базилик, пармезан.",
		price: "640 р",
		img: photoBoloniese,
		alt: "Паста болоньезе",
	},
	{
		title: "Паста с лососем и шпинатом",
		desc: "Пенне, копчёный лосось, шпинат, сливочный соус, чеснок.",
		price: "700 р",
		img: photoLososem,
		alt: "Паста с лососем и шпинатом",
	},
	{
		title: "Паста Песто",
		desc: "Фузилли, соус песто из базилика и кедровых орешков, пармезан.",
		price: "540 р",
		img: photoPesto,
		alt: "Паста Песто",
	},
	{
		title: "Паста с грибами и сливками",
		desc: "Тальятелле, шампиньоны, сливки, чеснок, зелень.",
		price: "630 р",
		img: photoGribami,
		alt: "Паста с грибами и сливками",
	},
];

const soups = [
	{
		title: "Крем-суп из тыквы",
		desc: "Тыква, сливки, лук, чеснок, специи.",
		price: "400 р",
		img: photoTikveniy,
		alt: "Крем-суп из тыквы",
	},
	{
		title: "Куриный бульон с лапшой",
		desc: "Куриный бульон, домашняя лапша, морковь, зелень.",
		price: "340 р",
		img: photoLapsha,
		alt: "Куриный бульон с лапшой",
	},
	{
		title: "Суп минестроне",
		desc: "Овощной бульон, фасоль, кабачки, морковь, томаты, паста.",
		price: "600 р",
		img: photoMinestrone,
		alt: "Суп минестроне",
	},
	{
		title: "Грибной суп-пюре",
		desc: "Шампиньоны, сливки, лук, чеснок, зелень.",
		price: "390 р",
		img: photoGribloy,
		alt: "Грибной суп-пюре",
	},
	{
		title: "Томатный суп с базиликом",
		desc: "Томаты, базилик, чеснок, оливковое масло.",
		price: "530 р",
		img: photoTomatniy,
		alt: "Томатный суп с базиликом",
	},
];

export function MenuPage() {
	return (
		<div className="menu-container">
			<div className="menu-title">МЕНЮ COOKER</div>
			<div className="menu-section-title">Салаты</div>
			{salads.map((salad, idx) => (
				<div className="menu-item" key={idx}>
					<div className="menu-item-info">
						<div className="menu-item-title">{salad.title}</div>
						<div className="menu-item-desc">{salad.desc}</div>
						<div className="menu-item-price">{salad.price}</div>
					</div>
					<img
						className="menu-item-img"
						src={salad.img}
						alt={salad.alt}
					/>
				</div>
			))}
			<div className="menu-section-title">Пасты</div>
			{pastas.map((paste, idx) => (
				<div className="menu-item" key={idx}>
					<div className="menu-item-info">
						<div className="menu-item-title">{paste.title}</div>
						<div className="menu-item-desc">{paste.desc}</div>
						<div className="menu-item-price">{paste.price}</div>
					</div>
					<img
						className="menu-item-img"
						src={paste.img}
						alt={paste.alt}
					/>
				</div>
			))}
			<div className="menu-section-title">Супы</div>
			{soups.map((soup, idx) => (
				<div className="menu-item" key={idx}>
					<div className="menu-item-info">
						<div className="menu-item-title">{soup.title}</div>
						<div className="menu-item-desc">{soup.desc}</div>
						<div className="menu-item-price">{soup.price}</div>
					</div>
					<img
						className="menu-item-img"
						src={soup.img}
						alt={soup.alt}
					/>
				</div>
			))}
		</div>
	);
}
