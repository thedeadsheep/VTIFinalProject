-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: db_phongtro
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chiso_phong`
--

DROP TABLE IF EXISTS `chiso_phong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chiso_phong` (
  `ma_phong` varchar(255) NOT NULL,
  `ngay_ghi` datetime(6) NOT NULL,
  `chiso_dien` int DEFAULT NULL,
  `ghi_nhan` bit(1) DEFAULT NULL,
  `chiso_nuoc` int DEFAULT NULL,
  PRIMARY KEY (`ngay_ghi`,`ma_phong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `gia_dv`
--

DROP TABLE IF EXISTS `gia_dv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gia_dv` (
  `DV_id` int NOT NULL AUTO_INCREMENT,
  `ten_dv` varchar(255) DEFAULT NULL,
  `gia_dv` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`DV_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `khach`
--

DROP TABLE IF EXISTS `khach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khach` (
  `kh_id` varchar(255) NOT NULL,
  `SDT` varchar(255) DEFAULT NULL,
  `con_o` bit(1) DEFAULT NULL,
  `dia_chi_TT` varchar(255) DEFAULT NULL,
  `ho_lot` varchar(255) DEFAULT NULL,
  `link_with` varchar(255) DEFAULT NULL,
  `ngay_chuyen_di` datetime(6) DEFAULT NULL,
  `ngay_chuyen_vao` datetime(6) DEFAULT NULL,
  `ngay_sinh` datetime(6) DEFAULT NULL,
  `ten_qh` varchar(255) DEFAULT NULL,
  `que_quan` varchar(255) DEFAULT NULL,
  `so_CCCD` varchar(255) DEFAULT NULL,
  `ten` varchar(255) NOT NULL,
  PRIMARY KEY (`kh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `khach_phong`
--

DROP TABLE IF EXISTS `khach_phong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khach_phong` (
  `ma_phong` varchar(255) NOT NULL,
  `ma_kh` varchar(255) NOT NULL,
  `trang_thai` bit(1) DEFAULT NULL,
  PRIMARY KEY (`ma_kh`,`ma_phong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `phong`
--

DROP TABLE IF EXISTS `phong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phong` (
  `phong_id` int NOT NULL,
  `ten_phong` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `_status` int DEFAULT NULL,
  PRIMARY KEY (`phong_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `phong_seq`
--

DROP TABLE IF EXISTS `phong_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phong_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-16 20:11:18
