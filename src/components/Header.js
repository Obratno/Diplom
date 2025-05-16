import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<div className="header-inner">
				<div className="logo">COOKER</div>
				<div className="nav">
					<Link to="/">Главное</Link>
					<Link to="/menu">Меню</Link>
					<Link to="/contacts">Контакты</Link>
				</div>
				<button
					className="btnOne"
					onClick={() => {
						// Если вы на главной странице, скроллим к форме
						if (window.location.pathname === "/") {
							const el = document.getElementById("reservTable");
							if (el) {
								el.scrollIntoView({ behavior: "smooth" });
							}
						} else {
							// Если не на главной, переходим на главную с якорем
							window.location.href = "/#reservTable";
						}
					}}
				>
					Забронировать столик
				</button>
			</div>
		</header>
	);
}
