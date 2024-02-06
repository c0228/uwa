--
-- Table structure for table `static_config_info`
--

CREATE TABLE IF NOT EXISTS `static_config_info` (
  `paramKey` varchar(60) NOT NULL,
  `paramValue` varchar(500) NOT NULL,
  PRIMARY KEY (`paramKey`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1; 