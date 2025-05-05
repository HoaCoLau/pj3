-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 05, 2025 at 07:28 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pj3`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `genre_id` int DEFAULT NULL,
  `image` text NOT NULL,
  `decription` text NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `price`, `genre_id`, `image`, `decription`, `user_id`) VALUES
(11, 'aghjkyfjhdtgfrdfgdhg443h', 20000, 2, '1746415004190-541212967.jpg', 'sdhfjhgkjhgfdsfghjkllkjkmfgdfvgbhnmj,kjmhngbfvdcvfbgnh', 1),
(12, 'dfghmgnbfsdvcbngbfd', 2100000, 3, '1746415004190-541212967.jpg', 'mjnhbgfvdfghjkmhngbfvdsdfghjhgfdghjghfgdghjbvcbn', 2),
(53, 'The Silent Patient', 150000, 2, '1746427794255-329468232.jpg', 'A psychological thriller.', 1),
(54, 'Atomic Habits', 180000, 2, '1746427969759-756275282.jpg', 'Build good habits and break bad ones.', 2),
(55, 'Becoming', 200000, 2, '1746428002254-85015118.jpg', 'Memoir of the former first lady.', 2),
(56, '1984', 130000, 2, '1746428036139-17650225.jpg', 'Dystopian novel about totalitarianism.', 2),
(57, 'To Kill a Mockingbird', 140000, 2, '1746428107736-621012993.jpg', 'Classic of modern American literature.', 1),
(58, 'Sapiens', 190000, 2, '1746428415663-971701191.jpg', 'A brief history of humankind.', 1),
(59, 'The Alchemist', 120000, 2, '1746428449837-568097945.jpg', 'A story about finding your destiny.', 1),
(60, 'Think and Grow Rich', 160000, 2, '1746428543813-408858657.jpg', 'A classic on success and mindset.', 2),
(61, 'The Power of Now', 170000, 2, '1746428563349-879227173.jpg', 'Spiritual guide to enlightenment.', 2),
(62, 'The Hobbit', 150000, 2, '1746428594655-597927459.jpg', 'Fantasy adventure before Lord of the Rings.', 1),
(63, 'Educated', 180000, 2, '1746428616253-438032392.jpg', 'Memoir of a girl who leaves survivalist roots.', 1),
(64, 'Rich Dad Poor Dad', 140000, 2, '1746428780433-50675261.jpg', 'Personal finance classic.', 1),
(65, 'The Catcher in the Rye', 130000, 2, '1746428969722-607263943.jpg', 'Coming-of-age classic.', 2),
(66, 'Dune', 200000, 2, '1746428801677-463136082.jpg', 'Sci-fi epic about politics and power.', 1),
(67, 'The Subtle Art of Not Giving a F*ck', 170000, 2, '1746429094052-682555116.jpg', 'Self-help with a twist.', 2),
(68, 'A Game of Thrones', 210000, 2, '1746428824006-788780415.jpg', 'Fantasy novel of power and betrayal.', 1),
(69, 'The Road', 140000, 2, '1746428865421-57680213.jpg', 'Post-apocalyptic survival tale.', 1),
(70, 'Gone Girl', 160000, 2, '1746428989153-483820816.jpg', 'Thriller about a mysterious disappearance.', 2),
(71, 'The Book Thief', 150000, 2, '1746428890709-481566398.jpg', 'Story of a girl in Nazi Germany.', 1),
(72, 'The Four Agreements', 130000, 2, '1746428913727-793159335.jpg', 'Practical guide to personal freedom.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(2, 'kinh dị'),
(3, 'hành động'),
(4, 'adada3');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `userId` int DEFAULT NULL,
  `bookId` int DEFAULT NULL,
  `quantity` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `role` enum('admin','user') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `image`, `role`) VALUES
(1, 't@gmail.com', '$2b$10$3a/YOxm9f.A3BrBhlwU34ulBVoqqqZy3gpQfUsgUyCyyWhl4kCJg.', 'NGUYEN TIEN THUAN', '1746417647304-594058205.jpg', 'user'),
(2, 'b@gmail.com', '$2b$10$EjwCM0p3I5BnrdSsOxet.e2TTKZ0FdKHkXj7maLlJgdS6oXdRqbRS', 'Nguyễn Tiến Thuận', '1746429126386-840530873.jpg', 'user'),
(5, 'z@gmail.com', '$2b$10$ADG7hxOq5cgNbZ59MRrqROBGFdMCg1ovLKixbd5ZG8ELw01U51fWm', 'thuana', NULL, 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_books_genre` (`genre_id`),
  ADD KEY `fk_books_user` (`user_id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `fk_books_genre` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fk_books_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
