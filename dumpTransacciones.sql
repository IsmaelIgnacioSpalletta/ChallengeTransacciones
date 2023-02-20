-- MySQL dump 10.19  Distrib 10.3.37-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: CHALLENGE_TECNICO_TRANSACCIONES
-- ------------------------------------------------------
-- Server version	10.3.37-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cuenta`
--

DROP TABLE IF EXISTS `cuenta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuenta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `capital` float NOT NULL,
  `divisaid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_divisa` (`divisaid`),
  CONSTRAINT `cuenta_ibfk_1` FOREIGN KEY (`divisaid`) REFERENCES `divisa` (`id`),
  CONSTRAINT `fk_divisa` FOREIGN KEY (`divisaid`) REFERENCES `divisa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuenta`
--

LOCK TABLES `cuenta` WRITE;
/*!40000 ALTER TABLE `cuenta` DISABLE KEYS */;
INSERT INTO `cuenta` VALUES (1,27000000,1),(2,14000000,1),(3,62144,2),(4,1000000,4),(5,3000000,1),(6,1500000,2),(7,1800000,3),(8,4000000,1),(9,2500000,2),(10,1200000,3),(11,1000000,1),(12,2000000,2),(13,1500000,3),(14,2000000,1),(15,1500000,2),(16,1800000,3),(17,4000000,1),(18,1800000,2),(19,1900000,3);
/*!40000 ALTER TABLE `cuenta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `divisa`
--

DROP TABLE IF EXISTS `divisa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `divisa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `divisa`
--

LOCK TABLES `divisa` WRITE;
/*!40000 ALTER TABLE `divisa` DISABLE KEYS */;
INSERT INTO `divisa` VALUES (1,'Pesos Uruguayos'),(2,'Dólares Americanos'),(3,'Euros'),(4,'Pesos Argentinos');
/*!40000 ALTER TABLE `divisa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaccion_historico`
--

DROP TABLE IF EXISTS `transaccion_historico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaccion_historico` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cuentaOrigenId` int(11) NOT NULL,
  `cuentaDestinoId` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `monto` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cuenta_origen_id` (`cuentaOrigenId`),
  KEY `cuenta_destino_id` (`cuentaDestinoId`),
  CONSTRAINT `transaccion_historico_ibfk_1` FOREIGN KEY (`cuentaOrigenId`) REFERENCES `cuenta` (`id`),
  CONSTRAINT `transaccion_historico_ibfk_2` FOREIGN KEY (`cuentaDestinoId`) REFERENCES `cuenta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaccion_historico`
--

LOCK TABLES `transaccion_historico` WRITE;
/*!40000 ALTER TABLE `transaccion_historico` DISABLE KEYS */;
INSERT INTO `transaccion_historico` VALUES (70,2,1,'2020-01-01','Pago test 1',1000000),(71,14,1,'2020-01-06','Pago test 1',1000000),(72,2,1,'2020-04-01','Pago test 1',1000000),(73,2,1,'2020-04-01','Pago test 1',1000000),(74,2,1,'2020-04-01','Pago test 1',1000000),(75,4,3,'2020-04-01','Pago test 1',1000000),(76,4,3,'2020-04-01','Pago test 1',1000000),(77,4,3,'2020-04-01','Pago test 1',1000000),(78,4,3,'2020-04-01','Pago test 1',1000000),(79,4,3,'2020-04-01','Pago test 1',1000000),(80,4,3,'2020-04-01','Pago test 1',1000000),(81,4,3,'2020-04-01','Pago test 1',1000000),(82,4,3,'2020-04-01','Pago test 1',1000000),(83,4,3,'2020-04-01','Pago test 1',1000000),(84,4,3,'2020-04-01','Pago test 1',1000000);
/*!40000 ALTER TABLE `transaccion_historico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Ismael Spalletta'),(2,'Juan Pérez'),(3,'María García'),(4,'Pedro González'),(5,'Luis Fernández'),(6,'Ana Martínez'),(7,'Jorge Hernández'),(8,'Laura Díaz'),(9,'Diego Álvarez'),(10,'Carla Rojas');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_cuenta`
--

DROP TABLE IF EXISTS `usuario_cuenta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario_cuenta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) DEFAULT NULL,
  `cuentaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarioid` (`usuarioId`),
  KEY `cuentaid` (`cuentaId`),
  CONSTRAINT `usuario_cuenta_ibfk_1` FOREIGN KEY (`usuarioid`) REFERENCES `usuario` (`id`),
  CONSTRAINT `usuario_cuenta_ibfk_2` FOREIGN KEY (`cuentaid`) REFERENCES `cuenta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_cuenta`
--

LOCK TABLES `usuario_cuenta` WRITE;
/*!40000 ALTER TABLE `usuario_cuenta` DISABLE KEYS */;
INSERT INTO `usuario_cuenta` VALUES (1,1,1),(2,1,2),(3,3,3),(4,3,4),(5,4,5),(6,5,6),(7,5,7),(8,6,8),(9,7,9),(10,8,10),(11,9,11),(12,9,12),(13,1,13),(14,2,14),(15,3,15),(16,4,16),(17,5,17),(18,6,18),(19,7,19);
/*!40000 ALTER TABLE `usuario_cuenta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-20 15:53:22
