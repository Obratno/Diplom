import React from "react";
import { styles } from "../index.css";
import photo1 from "../img/rest1.jpg";
import photo2 from "../img/rest2.jpeg";
import photo3 from "../img/rest3.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Main() {
	const [formData, setFormData] = useState({
		fullName: "",
		visitDate: "",
		peopleCount: 1,
		childrenCount: 0,
	});

	const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

	const handleChange = (e) => {
		const { name, value, type } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "number" ? Number(value) : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.fullName.trim() || !formData.visitDate) {
			alert("Пожалуйста, заполните обязательные поля.");
			return;
		}

		setStatus("loading");

		try {
			const response = await fetch("https://formspree.io/f/xkgrybvr", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Ошибка отправки");
			}

			setStatus("success");
			setFormData({
				fullName: "",
				visitDate: "",
				peopleCount: 1,
				childrenCount: 0,
			});
		} catch (error) {
			console.error(error);
			setStatus("error");
		}
	};

	return (
		<>
			<div className="prewie-container">
				<h1 className="prewie">COOKER В САМАРЕ</h1>
				<div className="text-prewie">
					Новый уютный ресторан в центре Самары Насладитесь приятной
					атмосферой и вкусной едой
				</div>
			</div>
			<div className="content">
				<div className="aboutRestoran">
					<div className="textAboutRestoran">
						<h3 className="headAbout">О РЕСТОРАНЕ</h3>
						<p>
							Ресторан «COOKER» - это современное гастрономическое
							пространство, где сочетаются уютная атмосфера и
							разнообразие блюд на любой вкус. Мы уделяем особое
							внимание качеству ингредиентов и оригинальности
							рецептов, предлагая гостям как классические, так и
							авторские блюда, приготовленные с любовью и
							вниманием к деталям.
						</p>
						<p>
							В меню «COOKER» вы найдете широкий выбор блюд,
							включая позиции для вегетарианцев и тех, кто
							придерживается здорового образа жизни. Интерьер
							ресторана выполнен в стильном и комфортном дизайне,
							создающем атмосферу уюта и расслабления - идеальное
							место для семейных ужинов, деловых встреч и
							дружеских посиделок.
						</p>
						<p>
							Наши гости могут воспользоваться удобной системой
							онлайн-бронирования столиков, а также заказать
							доставку любимых блюд прямо на дом. «COOKER» - это
							место, где каждый найдет что-то по душе и
							почувствует себя как дома.
						</p>
					</div>
					<div className="pictureRest">
						<img className="pic1" src={photo1} />
						<div className="smallPics">
							<img className="pic2" src={photo2} />
							<img className="pic3" src={photo3} />
						</div>
					</div>
				</div>
				<div className="aboutMenu">
					<div className="menuWrapper">
						<div className="leftColumn">
							<div className="owrMenu">
								<div className="info1">
									<h1 className="Zag1">НАШЕ МЕНЮ</h1>
									<p>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry's standard
										dummy text ever since the 1500s, when an
										unknown printer took a galley of type
										and scrambled it to make a type specimen
										book.
									</p>
								</div>
							</div>
							<div className="pastaMenu">
								<h1 className="Zag1">ПАСТЫ</h1>
								<div className="pastaItem">
									<span>Карбонара</span>
									<span>390 р</span>
								</div>
								<div className="pastaItem">
									<span>Паста с лососем и шпинатом</span>
									<span>640 р</span>
								</div>
								<div className="pastaItem">
									<span>Паста Песто</span>
									<span>700 р</span>
								</div>
								<div className="pastaItem">
									<span>Болоньезе</span>
									<span>540 р</span>
								</div>
							</div>
							<Link to="/menu" className="btnViewMenu">
								Посмотреть всё меню
							</Link>
						</div>
						<div className="rightColumn">
							<div className="special">
								<div className="info2">
									<h1 className="Zag1">
										Специальное предложение
									</h1>
									<p>
										Каждую пятницу бесплатный безалкогольный
										напиток!
									</p>
									<p>
										Семейный день! Каждую среду скидка 10%
										при заказе от 3000 рублей для семей!
									</p>
									<p>
										Новое блюдо месяца! Жаренный гребешки в
										сливочном соусе с фирменной подачей!
									</p>
									<p>
										Скидка на весь счёт в день рождения
										ровняется возрасту гостя
									</p>
								</div>
							</div>
							<div className="saladsMenu">
								<h1 className="Zag1">САЛАТЫ</h1>
								<div className="saladItem">
									<span>Цезарь с тигровыми креветками</span>
									<span>690 р</span>
								</div>
								<div className="saladItem">
									<span>Салат с тунцом</span>
									<span>620 р</span>
								</div>
								<div className="saladItem">
									<span>Свекольный салат с орехами</span>
									<span>500 р</span>
								</div>
								<div className="saladItem">
									<span>Греческий</span>
									<span>540 р</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="reservTable" id="reservTable">
					<h1>Забронировать столик</h1>
					<div className="reservForm">
						<form onSubmit={handleSubmit}>
							<div className="formRow">
								<div className="leftColumn">
									<div className="formField">
										<label htmlFor="fullName">
											Фамилия имя
										</label>
										<input
											type="text"
											id="fullName"
											name="fullName"
											value={formData.fullName}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="formField">
										<label htmlFor="visitDate">
											Дата визита
										</label>
										<input
											type="date"
											id="visitDate"
											name="visitDate"
											value={formData.visitDate}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="rightColumn">
									<div className="formField">
										<label htmlFor="peopleCount">
											Количество людей
										</label>
										<input
											type="number"
											id="peopleCount"
											name="peopleCount"
											min="1"
											max="20"
											value={formData.peopleCount}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="formField">
										<label htmlFor="childrenCount">
											Дети
										</label>
										<input
											type="number"
											id="childrenCount"
											name="childrenCount"
											min="0"
											max="10"
											value={formData.childrenCount}
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>
							<button
								type="submit"
								className="btnReserve"
								disabled={status === "loading"}
							>
								{status === "loading"
									? "Отправка..."
									: "Забронировать!"}
							</button>
						</form>
						{status === "success" && (
							<p style={{ color: "green", marginTop: 10 }}>
								Спасибо! Ваша бронь принята.
							</p>
						)}
						{status === "error" && (
							<p style={{ color: "red", marginTop: 10 }}>
								Ошибка при отправке. Попробуйте позже.
							</p>
						)}
					</div>
				</div>
				<div className="contactsSection">
					<h2 className="contactsTitle">Контакты</h2>
					<div className="contactsWrapper">
						<div className="contactsInfo">
							<div className="contactsRow">
								<span>Будни</span>
								<span>10:00 - 23:00</span>
							</div>
							<div className="contactsRow">
								<span>Выходные</span>
								<span>11:00 - 00:00</span>
							</div>
							<hr className="contactsDivider" />
							<div className="contactsAddress">
								<div>Московское шоссе, 122</div>
								<div>КС ПГУТИ</div>
							</div>
						</div>
						<iframe
							src="https://yandex.ru/map-widget/v1/?um=constructor%3A5c81b8d81e0cb66c3d5de88d5c2e77dd9d04862d6dbabd9ec77cdf13f747768e&amp;source=constructor"
							title="Карта"
							width="330px"
							height="240px"
							frameBorder="0"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
}
