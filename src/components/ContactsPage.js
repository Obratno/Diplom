import React, { useState } from "react";
import "./ContactsPage.css";
import axios from "axios";

export default function ContactsPage() {
	const [feedback, setFeedback] = useState("");
	const [status, setStatus] = useState(null);

	const handleChange = (e) => {
		setFeedback(e.target.value);
	};

	const handleSubmit = async () => {
		if (!feedback.trim()) {
			alert("Пожалуйста, напишите отзыв перед отправкой.");
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
				body: JSON.stringify({ message: feedback }),
			});

			if (!response.ok) {
				throw new Error("Ошибка сети");
			}

			setStatus("success");
			setFeedback("");
		} catch (error) {
			console.error(error);
			setStatus("error");
		}
	};

	return (
		<div className="contacts-page">
			<h1 className="contacts-title">КОНТАКТЫ</h1>
			<div className="contacts-block">
				<div className="contacts-info">
					<div className="contacts-row">
						<span>Будни</span>
						<span>10:00 - 23:00</span>
					</div>
					<div className="contacts-row">
						<span>Выходные</span>
						<span>11:00 - 00:00</span>
					</div>
					<hr />
					<div>
						Московское шоссе, 122
						<br />
						КС ПГУТИ
					</div>
					<hr />
					<div>
						<a href="mailto:RestoranCooker@gmail.com">
							RestoranCooker@gmail.com
						</a>
					</div>
					<div>Контактный номер: +7 (937) 662-45-48</div>
				</div>
				<div className="contacts-map">
					<iframe
						src="https://yandex.ru/map-widget/v1/?um=constructor%3A5c81b8d81e0cb66c3d5de88d5c2e77dd9d04862d6dbabd9ec77cdf13f747768e&amp;source=constructor"
						title="Карта"
						width="100%"
						height="100%"
						frameBorder="0"
						allowFullScreen
					></iframe>
				</div>
			</div>
			<textarea
				className="contacts-feedback"
				placeholder="Написать отзыв..."
				value={feedback}
				onChange={handleChange}
				rows={5}
			/>
			<button
				className="contacts-submit"
				onClick={handleSubmit}
				disabled={status === "loading"}
			>
				{status === "loading" ? "Отправка..." : "Отправить"}
			</button>

			{status === "success" && (
				<p style={{ color: "green", marginTop: "10px" }}>
					Спасибо за ваш отзыв!
				</p>
			)}
			{status === "error" && (
				<p style={{ color: "red", marginTop: "10px" }}>
					Ошибка при отправке. Попробуйте позже.
				</p>
			)}
		</div>
	);
}
