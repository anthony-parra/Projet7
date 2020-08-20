-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  jeu. 20 août 2020 à 10:12
-- Version du serveur :  5.7.26
-- Version de PHP :  7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `Groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `Article`
--

CREATE TABLE `Article` (
  `article` mediumtext NOT NULL,
  `id` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Article`
--

INSERT INTO `Article` (`article`, `id`) VALUES
('Coucou, je suis le test d\'Anthony :)', 3);

-- --------------------------------------------------------

--
-- Structure de la table `Image`
--

CREATE TABLE `Image` (
  `gif` binary(50) NOT NULL,
  `id` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Image`
--

INSERT INTO `Image` (`gif`, `id`) VALUES
(0x436f75636f752c206a652073756973206c652074657374206427416e74686f6e79203a290000000000000000000000000000, 1);

-- --------------------------------------------------------

--
-- Structure de la table `Inscription`
--

CREATE TABLE `Inscription` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Inscription`
--

INSERT INTO `Inscription` (`id`, `email`, `password`) VALUES
(29, 'anthonyparra@gmail.com', '$2b$10$CJb0IdpaQ3XD3O/3X2X6AuY2Rmo03IOpDB379/ij1ftRb0RcpL9bS'),
(30, 'elodie.reze@gmail.com', '$2b$10$3UN7bYDD6ZOn3Y.bKceYWuOPZXwn7EGHfIeRe1/oHxE1GTzN9GGi6'),
(32, 'anthony@gmail.com', '$2b$10$fcuaA91v.WDnAMhr7IdXpeTySQmF8EZh6ajIOg66bcq1SQLIio5UK');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Article`
--
ALTER TABLE `Article`
  ADD UNIQUE KEY `ind_uni_id` (`id`);
ALTER TABLE `Article` ADD FULLTEXT KEY `ind_full_art` (`article`);

--
-- Index pour la table `Image`
--
ALTER TABLE `Image`
  ADD UNIQUE KEY `ind_uni_id` (`id`);

--
-- Index pour la table `Inscription`
--
ALTER TABLE `Inscription`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ind_uni_email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Article`
--
ALTER TABLE `Article`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Image`
--
ALTER TABLE `Image`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `Inscription`
--
ALTER TABLE `Inscription`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;