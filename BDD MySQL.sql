-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 27, 2020 at 02:17 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `Groupomania`
--

-- --------------------------------------------------------

--
-- Table structure for table `Article`
--

CREATE TABLE `Article` (
  `id` int(11) UNSIGNED NOT NULL,
  `titre` text NOT NULL,
  `article` longtext NOT NULL,
  `date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `user_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Article`
--

INSERT INTO `Article` (`id`, `titre`, `article`, `date`, `user_id`) VALUES
(49, 'Mon premier article par Anthony !', 'Bonjour, je suis le premier article d\'Anthony.\nQu\'en pensez-vous ?', '2020-09-27 08:43:32.347840', 31),
(50, 'J\'écris aussi mon premier article !', 'Et vous, Anthony ? Que pensez-vous de mon article ? \n\nLe mot article, du latin artus : « articulation », indique un élément cohérent d\'une décomposition. Il possède les significations suivantes : En grammaire, un article est un déterminant placé devant le nom, précisant le degré de définition de ce nom.', '2020-09-27 08:45:53.173083', 32);

-- --------------------------------------------------------

--
-- Table structure for table `Commentaires`
--

CREATE TABLE `Commentaires` (
  `id` int(11) UNSIGNED NOT NULL,
  `commentaire` text NOT NULL,
  `post_id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Commentaires`
--

INSERT INTO `Commentaires` (`id`, `commentaire`, `post_id`, `user_id`, `date`, `email`) VALUES
(55, 'Bonjour Anthony ! Je trouve votre réseau social vraiment intéressant ! :)', 49, 32, '2020-09-27 08:44:35', 'elodie.reze@groupomania.com'),
(56, 'Je trouve ça passionnant !', 50, 31, '2020-09-27 08:46:24', 'anthony.parra@groupomania.com'),
(57, 'Vous avez essayé de partager un article ? C\'est très simple :) ', 50, 31, '2020-09-27 08:47:09', 'anthony.parra@groupomania.com');

-- --------------------------------------------------------

--
-- Table structure for table `Inscription`
--

CREATE TABLE `Inscription` (
  `id` int(11) UNSIGNED NOT NULL,
  `email` varchar(40) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `password` varchar(70) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Inscription`
--

INSERT INTO `Inscription` (`id`, `email`, `nom`, `prenom`, `password`, `isAdmin`) VALUES
(31, 'anthony.parra@groupomania.com', 'Parra', 'Anthony', '$2b$10$gYZ6.HcfAgPb8vl7HwuyF.Kb0SszSIAJskOkspWne8IG8SnkHq21C', 1),
(32, 'elodie.reze@groupomania.com', 'Rezé', 'Elodie', '$2b$10$zZPTl5LZP/9BRvc4WYRqgO2ZpKyJO2/52q2BVoAJCqM4gvfhI4sGG', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Article`
--
ALTER TABLE `Article`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ind_uni_id` (`id`),
  ADD KEY `user_id` (`user_id`);
ALTER TABLE `Article` ADD FULLTEXT KEY `ind_full_art` (`article`);

--
-- Indexes for table `Commentaires`
--
ALTER TABLE `Commentaires`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ind_uni_id` (`id`) USING BTREE,
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `Inscription`
--
ALTER TABLE `Inscription`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ind_uni_email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Article`
--
ALTER TABLE `Article`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `Commentaires`
--
ALTER TABLE `Commentaires`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `Inscription`
--
ALTER TABLE `Inscription`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Article`
--
ALTER TABLE `Article`
  ADD CONSTRAINT `FK_article_user_id` FOREIGN KEY (`user_id`) REFERENCES `Inscription` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `Commentaires`
--
ALTER TABLE `Commentaires`
  ADD CONSTRAINT `FK_commentaire_article` FOREIGN KEY (`post_id`) REFERENCES `Article` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_commentaire_user` FOREIGN KEY (`user_id`) REFERENCES `Inscription` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;