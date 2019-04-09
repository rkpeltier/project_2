-- Use dreamboard_db --
USE dreamboard_db;

-- Creating TABLE for Google Maps to have florists local to Sacramento --
CREATE TABLE `map_florist` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `name` VARCHAR( 60 ) NOT NULL, -- name of the location --
  `address` VARCHAR( 80 ) NOT NULL, 
  `lat` FLOAT( 10, 6 ) NOT NULL, 
  `lng` FLOAT( 10, 6 ) NOT NULL,
)


-- 
INSERT INTO `map_florist` (`name`, `address`, `lat`, `lng`, `type`) 
VALUES ('G Rossi Florist', '1208 J St, Sacramento, CA 95814', '38.579170', '-121.490510', 'florist');
