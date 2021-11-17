-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 07-11-2021 a las 13:02:42
-- Versión del servidor: 5.7.32
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `s022045b_CiudadI`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `IOT_PenalbaA`
--

CREATE TABLE `IOT_PenalbaA` (
  `Id` int(11) NOT NULL,
  `Tipo` varchar(20) NOT NULL,
  `Cantidad` float NOT NULL,
  `Hora` time NOT NULL,
  `Fecha` date NOT NULL,
  `Latitud` float NOT NULL,
  `Longitud` float NOT NULL,
  `Direccion` varchar(25) NOT NULL,
  `Descripcion` varchar(300) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `IOT_PenalbaA`
--

INSERT INTO `IOT_PenalbaA` (`Id`, `Tipo`, `Cantidad`, `Hora`, `Fecha`, `Latitud`, `Longitud`, `Direccion`) VALUES
(1, 'qqqqqqqqq', 'qqqqqqqqqqqq', 'Farola', '41.67087091685245', '-3.676887309193262', '1212-12-12', '1212-12-12'),
(2, 'ssssssss', 'ddddddddddddddd', 'Limpia', '41.670902973588994', '-3.6769409533735598', '2020-10-12', '2021-11-23'),
(3, 'Sala de departamento', 'Es unasala que ...', 'Farola', '41.67089896649779', '-3.676833036370226', '2021-01-23', '2022-10-15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `IOT_PenalbaA`
--
ALTER TABLE `IOT_PenalbaA`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `IOT_PenalbaA`
--
ALTER TABLE `IOT_PenalbaA`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
