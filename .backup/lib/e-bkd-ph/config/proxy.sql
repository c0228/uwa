-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 09, 2022 at 06:29 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `proxy`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_static_config`
--

CREATE TABLE IF NOT EXISTS `app_static_config` (
  `configKey` varchar(35) NOT NULL,
  `configValue` varchar(250) NOT NULL,
  PRIMARY KEY (`configKey`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `app_static_config`
--

INSERT INTO `app_static_config` (`configKey`, `configValue`) VALUES
('FB_APIKEY', 'AIzaSyChsvstzk-jLTmM7uY8LClK7VX6glMavhM'),
('FB_APP_ID', '1:1090042511603:web:b3b713229cc0a11f723786'),
('FB_AUTHDOMAIN', 'locum-me.firebaseapp.com'),
('FB_MEASURE_ID', 'G-5NZVPQ5XKK'),
('FB_MSG_SENDERID', '1090042511603'),
('FB_PROJECT_ID', 'locum-me'),
('FB_STORAGE_BUCKET', 'locum-me.appspot.com');

-- --------------------------------------------------------

--
-- Table structure for table `platform_info`
--

CREATE TABLE IF NOT EXISTS `platform_info` (
  `platformName` varchar(45) NOT NULL,
  `platformDesc` varchar(1000) NOT NULL,
  PRIMARY KEY (`platformName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `platform_info`
--

INSERT INTO `platform_info` (`platformName`, `platformDesc`) VALUES
('BACKEND TECHNOLOGIES', ''),
('CLOUD COMPUTING', ''),
('DEVOPS', ''),
('FRONTEND TECHNOLOGIES', 'Test Description'),
('MESSAGING QUEUES', ''),
('SQL / NOSQL DATABSES', ''),
('WEB SERVER AND WEB BROWSER', '');

-- --------------------------------------------------------

--
-- Table structure for table `platform_qa`
--

CREATE TABLE IF NOT EXISTS `platform_qa` (
  `questionId` int(11) NOT NULL AUTO_INCREMENT,
  `syllabusName` varchar(45) NOT NULL,
  `question` varchar(300) NOT NULL,
  `questionType` varchar(15) NOT NULL,
  `answer` varchar(50000) NOT NULL,
  PRIMARY KEY (`questionId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `platform_subject`
--

CREATE TABLE IF NOT EXISTS `platform_subject` (
  `subjectName` varchar(45) NOT NULL,
  `platformName` varchar(45) NOT NULL,
  `subjectDesc` varchar(1000) NOT NULL,
  PRIMARY KEY (`subjectName`),
  KEY `platformName` (`platformName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `platform_syllabus`
--

CREATE TABLE IF NOT EXISTS `platform_syllabus` (
  `syllabusName` varchar(45) NOT NULL,
  `subjectName` varchar(45) NOT NULL,
  `syllabusDesc` varchar(1000) NOT NULL,
  PRIMARY KEY (`syllabusName`),
  KEY `subjectName` (`subjectName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_account_info`
--

CREATE TABLE IF NOT EXISTS `user_account_info` (
  `accountId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(35) NOT NULL,
  `email` varchar(35) NOT NULL,
  `accPwd` varchar(250) NOT NULL,
  `accActive` varchar(1) NOT NULL,
  `availableTime` varchar(8) NOT NULL,
  PRIMARY KEY (`accountId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_account_lobby`
--

CREATE TABLE IF NOT EXISTS `user_account_lobby` (
  `lobby_Id` int(11) NOT NULL,
  `accountId` int(11) NOT NULL,
  `lobbyName` varchar(35) NOT NULL,
  `spentTime` varchar(8) NOT NULL,
  `fsDocUrl` varchar(250) NOT NULL COMMENT 'FirestoreDocumentURL',
  PRIMARY KEY (`lobby_Id`),
  KEY `accountId` (`accountId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `platform_subject`
--
ALTER TABLE `platform_subject`
  ADD CONSTRAINT `platform_subject_ibfk_1` FOREIGN KEY (`platformName`) REFERENCES `platform_info` (`platformName`);

--
-- Constraints for table `platform_syllabus`
--
ALTER TABLE `platform_syllabus`
  ADD CONSTRAINT `platform_syllabus_ibfk_1` FOREIGN KEY (`subjectName`) REFERENCES `platform_subject` (`subjectName`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
