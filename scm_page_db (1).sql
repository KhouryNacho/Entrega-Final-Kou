-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 02-09-2023 a las 02:52:25
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `scm_page_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `project_description` varchar(1000) COLLATE utf8mb3_unicode_ci NOT NULL,
  `project_img_id` varchar(300) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `project_members` varchar(400) COLLATE utf8mb3_unicode_ci NOT NULL,
  `project_status` varchar(150) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`project_id`, `project_description`, `project_img_id`, `project_members`, `project_status`) VALUES
(1, 'Seadrake Exiles Faction', NULL, 'Kou: Project Lead (DB work and Assets creation)\r\n\r\nJangry: Campaign Designer (Script work, mechanics design)\r\n\r\nLeon: 2D Artist (2d art designer and Voice acting)\r\n\r\nMaclinger: UI Artist (Interface and UI art design)', 'Currently WIP. Some assets ready, most still under development. Campaign WIP. Voice acting in pre-production.'),
(2, 'Laurelorn Overhaul', NULL, 'Kou: Project Lead (For now all the work)', 'Some units finished. Animations mostly done. DB still not started. Some art still in pre-production.'),
(33, 'Variants Mods By Kou and Flor', '', 'Kou and Ikarous', 'Almost finished almooooooooooost'),
(35, 'Created', '', 'Kou and no one', 'Hello'),
(36, 'Another creation to test Data Base', '', 'holi', 'holi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(250) COLLATE utf8mb3_unicode_ci NOT NULL,
  `user_password` varchar(250) COLLATE utf8mb3_unicode_ci NOT NULL,
  `user_steampage` varchar(250) COLLATE utf8mb3_unicode_ci NOT NULL,
  `user_discord` varchar(150) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_password`, `user_steampage`, `user_discord`) VALUES
(1, 'Kou', '46d045ff5190f6ea93739da6c0aa19bc', 'https://steamcommunity.com/profiles/76561198137449605', 'Kou#6180'),
(2, 'Ikarus', '01cfcd4f6b8770febfb40cb906715822', 'https://steamcommunity.com/profiles/76561198136430372', '\r\nflor1996'),
(4, 'jose', '81dc9bdb52d04dc20036dbd8313ed055', '', ''),
(5, 'khoury', '202cb962ac59075b964b07152d234b70', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
