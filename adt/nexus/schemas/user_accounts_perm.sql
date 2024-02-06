-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 20, 2023 at 12:42 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rkv`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts_perm`
--

DROP TABLE IF EXISTS `user_accounts_perm`;
CREATE TABLE IF NOT EXISTS `user_accounts_perm` (
  `userRole` varchar(15) NOT NULL,
  `route` varchar(50) NOT NULL,
  `component` varchar(255) DEFAULT NULL,
  `c` varchar(1) DEFAULT NULL,
  `r` varchar(1) DEFAULT NULL,
  `u` varchar(1) DEFAULT NULL,
  `d` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`userRole`,`route`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
