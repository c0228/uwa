-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2023 at 08:14 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `rw`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts_info`
--

CREATE TABLE IF NOT EXISTS `user_accounts_info` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `surName` varchar(35) NOT NULL,
  `name` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(6) NOT NULL,
  `email` varchar(55) NOT NULL,
  `emailVal` varchar(1) NOT NULL,
  `accPwd` varchar(250) NOT NULL,
  `mcountrycode` varchar(6) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `mobileVal` varchar(1) NOT NULL,
  `dp` varchar(500) NOT NULL,
  `userTz` varchar(35) NOT NULL,
  `accactive` varchar(1) NOT NULL,
  `userRole` varchar(15) NOT NULL, /* FOREIGN RELATIONSHIP WITH THE TABLE "user_accounts_roles" */
  `createdOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastUpdatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`),
  KEY `userRole` (`userRole`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_accounts_info`
--
ALTER TABLE `user_accounts_info`
  ADD CONSTRAINT `user_accounts_info_ibfk_1` FOREIGN KEY (`userRole`) REFERENCES `user_accounts_roles` (`userRole`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
