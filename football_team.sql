CREATE DATABASE IF NOT EXISTS football_team;
USE football_team;

CREATE TABLE `players` (
  `id` int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `players` (`id`, `first_name`, `last_name`, `position`, `number`, `user_name`) VALUES
(1, 'Sakdar', 'Sukkwan', 'Centre Back', 1, 'NewzyDev');