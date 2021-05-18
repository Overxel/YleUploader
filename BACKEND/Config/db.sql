-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-05-2021 a las 16:06:34
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `yleuploader`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campaign`
--

CREATE TABLE `campaign` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `message` longtext NOT NULL,
  `created` date NOT NULL DEFAULT current_timestamp(),
  `released` tinyint(1) NOT NULL DEFAULT 0,
  `updated` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `campaign`
--

INSERT INTO `campaign` (`id`, `name`, `message`, `created`, `released`, `updated`) VALUES
(1, 'aa', 'asdasd', '0000-00-00', 0, '0000-00-00'),
(2, 'MyTest', 'MyTest Message', '0000-00-00', 0, '0000-00-00'),
(3, 'MyTest 6', 'MyTest Message 6', '0000-00-00', 0, '0000-00-00'),
(4, 'MyTest 6', 'MyTest Message 6', '0000-00-00', 0, '0000-00-00'),
(5, 'MyTest 6', 'MyTest Message 6', '0000-00-00', 0, '0000-00-00'),
(6, 'MyTest 6', 'MyTest Message 6', '0000-00-00', 0, '0000-00-00'),
(7, 'MyTest 6', 'MyTest Message 6', '0000-00-00', 0, '0000-00-00'),
(8, 'MyTest 6', 'MyTest Message 6', '0000-00-00', 0, '0000-00-00'),
(9, 'MyTest 6', 'MyTest Message 6', '0000-00-00', 0, '0000-00-00'),
(10, 'MyTest 6', 'MyTest Message 6', '0000-00-00', 0, '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campaing_customer`
--

CREATE TABLE `campaing_customer` (
  `customerid` int(11) NOT NULL,
  `campaingid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `photoshoot`
--

CREATE TABLE `photoshoot` (
  `id` int(11) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `place` varchar(500) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `customerid` int(11) NOT NULL,
  `created` date NOT NULL DEFAULT current_timestamp(),
  `updated` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `photoshoot_image`
--

CREATE TABLE `photoshoot_image` (
  `id` int(11) NOT NULL,
  `photoshootid` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `customerSelected` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `surname` varchar(500) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `phone` int(11) NOT NULL,
  `created` date NOT NULL DEFAULT current_timestamp(),
  `updated` date NOT NULL DEFAULT current_timestamp(),
  `role` enum('admin','customer','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `email`, `password`, `phone`, `created`, `updated`, `role`) VALUES
(1, 'toni', 'vega', 'toni', 'toni', 648269348, '0000-00-00', '0000-00-00', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `campaign`
--
ALTER TABLE `campaign`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `campaing_customer`
--
ALTER TABLE `campaing_customer`
  ADD KEY `customerid` (`customerid`,`campaingid`),
  ADD KEY `campaingid` (`campaingid`);

--
-- Indices de la tabla `photoshoot`
--
ALTER TABLE `photoshoot`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerid` (`customerid`),
  ADD KEY `customerid_2` (`customerid`);

--
-- Indices de la tabla `photoshoot_image`
--
ALTER TABLE `photoshoot_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photoshootid` (`photoshootid`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `campaign`
--
ALTER TABLE `campaign`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `photoshoot`
--
ALTER TABLE `photoshoot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `photoshoot_image`
--
ALTER TABLE `photoshoot_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `campaing_customer`
--
ALTER TABLE `campaing_customer`
  ADD CONSTRAINT `campaing_customer_ibfk_1` FOREIGN KEY (`customerid`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `campaing_customer_ibfk_2` FOREIGN KEY (`campaingid`) REFERENCES `campaign` (`id`);

--
-- Filtros para la tabla `photoshoot`
--
ALTER TABLE `photoshoot`
  ADD CONSTRAINT `photoshoot_ibfk_1` FOREIGN KEY (`customerid`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `photoshoot_image`
--
ALTER TABLE `photoshoot_image`
  ADD CONSTRAINT `photoshoot_image_ibfk_1` FOREIGN KEY (`photoshootid`) REFERENCES `photoshoot` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
