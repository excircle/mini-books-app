CREATE TABLE `books` (
	`id` 		INT AUTO_INCREMENT NOT NULL,
	`title` 	VARCHAR(100) NOT NULL,
	`author` 	VARCHAR(100) NOT NULL,
	`year` 		INT NOT NULL,
	PRIMARY KEY(`id`),
	KEY(`title`),
	KEY(`author`)
) ENGINE=InnoDB;
