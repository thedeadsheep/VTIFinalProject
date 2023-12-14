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
  `ngay_ghi` varchar(255) NOT NULL,
  `chiso_dien` int DEFAULT NULL,
  `ghi_nhan` bit(1) DEFAULT NULL,
  `chiso_nuoc` int DEFAULT NULL,
  PRIMARY KEY (`ngay_ghi`,`ma_phong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chiso_phong`
--

LOCK TABLES `chiso_phong` WRITE;
/*!40000 ALTER TABLE `chiso_phong` DISABLE KEYS */;
INSERT INTO `chiso_phong` VALUES ('1','20231124105533',10,_binary '',10),('1','20231124111922',20,_binary '',10),('1','20231204110846',30,_binary '',20),('1','20231204111019',300,_binary '',200),('2','20231207211412',30,_binary '',10),('3','20231207211427',50,_binary '',2),('4','20231207211438',800,_binary '',10),('5','20231207211447',10,_binary '',20),('5','20231208093503',100,_binary '\0',20);
/*!40000 ALTER TABLE `chiso_phong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gia_dv`
--

DROP TABLE IF EXISTS `gia_dv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gia_dv` (
  `DV_id` int NOT NULL AUTO_INCREMENT,
  `thoi_gian_ap_dung` varchar(255) DEFAULT NULL,
  `gia_dien` varchar(255) DEFAULT NULL,
  `thoi_gian_ket_thuc` varchar(255) DEFAULT NULL,
  `gia_nuoc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`DV_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gia_dv`
--

LOCK TABLES `gia_dv` WRITE;
/*!40000 ALTER TABLE `gia_dv` DISABLE KEYS */;
INSERT INTO `gia_dv` VALUES (1,'20231124094613','3500',NULL,'12000');
/*!40000 ALTER TABLE `gia_dv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoa_don`
--

DROP TABLE IF EXISTS `hoa_don`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoa_don` (
  `id` varchar(255) NOT NULL,
  `ngay_tao_hd` varchar(255) DEFAULT NULL,
  `ngay_thanh_toan_hd` varchar(255) DEFAULT NULL,
  `gia_dien` varchar(255) DEFAULT NULL,
  `da_thanh_toan` bit(1) DEFAULT NULL,
  `so_nuoc` int DEFAULT NULL,
  `so_dien` int DEFAULT NULL,
  `so_nuoc_cu` int DEFAULT NULL,
  `so_dien_cu` int DEFAULT NULL,
  `gia_phong` varchar(255) DEFAULT NULL,
  `phong_id` varchar(255) DEFAULT NULL,
  `tong_tien` int DEFAULT NULL,
  `gia_nuoc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoa_don`
--

LOCK TABLES `hoa_don` WRITE;
/*!40000 ALTER TABLE `hoa_don` DISABLE KEYS */;
INSERT INTO `hoa_don` VALUES ('198bd279-d9c3-4f75-9600-115053308a62','20231204104730','20231207120421','3500',_binary '',10,10,0,0,'1200000','1',1355000,'12000'),('304145b7-6aec-491f-903f-94dbfc4045cb','20231204114947',NULL,'3500',_binary '\0',300,200,30,20,'1200000','1',4305000,'12000'),('6283d74b-1400-475f-a4b4-0a4ea8380f70','20231204105934',NULL,'3500',_binary '\0',10,10,0,0,'1200000','1',1355000,'12000'),('6fb9490f-cb3e-4940-918c-8a3c8d15cc2f','20231207215622',NULL,'3500',_binary '\0',30,10,0,0,'1200000','2',1425000,'12000'),('7b37da44-1f42-489a-b281-64fe79e165bf','20231207215625',NULL,'3500',_binary '\0',50,2,0,0,'1200000','3',1399000,'12000'),('8dea08ba-2911-4c5c-96f1-9d95d38df913','20231207215631',NULL,'3500',_binary '\0',10,20,0,0,'1200000','5',1475000,'12000'),('99db4848-3e8c-4d40-a560-2b8b6f0dfb61','20231204110939','20231208091513','3500',_binary '',30,20,10,10,'1200000','1',1390000,'12000'),('f58d69e2-feb1-4a0d-b81c-25bedbab38b7','20231207215628',NULL,'3500',_binary '\0',800,10,0,0,'1200000','4',4120000,'12000');
/*!40000 ALTER TABLE `hoa_don` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `khach`
--

LOCK TABLES `khach` WRITE;
/*!40000 ALTER TABLE `khach` DISABLE KEYS */;
INSERT INTO `khach` VALUES ('1b9eec44-1235-4337-90ad-d3f9f30e1c1e','123456789',_binary '','Mỹ Tho Tiền Giang','Lê','7a3841d0-561f-48a2-8993-dd48470fa57e',NULL,'2023-11-28 15:43:07.105000','2015-01-01 00:00:00.000000','con','Tiền Giang','','Minh'),('2fc92c31-0fbd-49fd-96b0-31b4ebc457af','838224577',_binary '','51 đường 6 TDC, Di An Binh Duong','Trần Quốc','',NULL,'2023-11-24 09:32:35.285000','2000-03-15 00:00:00.000000',NULL,'An Giang','352538853','Việt'),('40f377dc-7c93-47bb-bd0c-6f97eb18ea08','123456789',_binary '','Lâm Đồng','Hoàng','4aec882a-58e6-497f-bf7a-e0896d2b0431',NULL,'2023-11-28 15:40:40.853000','2020-01-01 00:00:00.000000','Con','Bình Dương','','Bình'),('4aec882a-58e6-497f-bf7a-e0896d2b0431','123456789',_binary '','Nha Trang Khánh Hòa','Trần Thị','',NULL,'2023-11-28 15:35:41.666000','1990-01-01 00:00:00.000000',NULL,'Khánh Hòa','987654321000','Hồng'),('7a3841d0-561f-48a2-8993-dd48470fa57e','987654321',_binary '','Mỹ Tho Tiền Giang','Lê Văn ','',NULL,'2023-11-28 15:37:15.454000','1994-01-01 00:00:00.000000',NULL,'Tiền Giang','123456780009','Hùng'),('cfddea93-f4df-468b-8212-4d216fdb7331','123456789',_binary '','Lâm Đồng','Hoàng Văn','',NULL,'2023-11-28 15:30:45.533000','1992-01-01 00:00:00.000000',NULL,'Lâm Đồng','123456789101','Nam'),('d7bf6e17-f16e-47d5-8c8c-3c2a13bbdaa2','123456789',_binary '','Mỹ Tho Tiền Giang','Lê Thị Ngọc','7a3841d0-561f-48a2-8993-dd48470fa57e',NULL,'2023-11-28 15:41:59.807000','1996-01-01 00:00:00.000000','Vợ','Tiền Giang','192837465','Dung'),('dc3f3fce-5046-417a-9c42-fc3e28ac9b45','123456789',_binary '','Biên Hòa Đồng Nai','Nguyên Văn','',NULL,'2023-11-28 15:29:52.133000','1990-01-01 07:00:00.000000',NULL,'Đồng Nai','123456789105','Khang');
/*!40000 ALTER TABLE `khach` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `khach_phong`
--

LOCK TABLES `khach_phong` WRITE;
/*!40000 ALTER TABLE `khach_phong` DISABLE KEYS */;
INSERT INTO `khach_phong` VALUES ('5','1b9eec44-1235-4337-90ad-d3f9f30e1c1e',_binary ''),('1','2fc92c31-0fbd-49fd-96b0-31b4ebc457af',_binary ''),('4','40f377dc-7c93-47bb-bd0c-6f97eb18ea08',_binary ''),('4','4aec882a-58e6-497f-bf7a-e0896d2b0431',_binary ''),('5','7a3841d0-561f-48a2-8993-dd48470fa57e',_binary ''),('3','cfddea93-f4df-468b-8212-4d216fdb7331',_binary ''),('5','d7bf6e17-f16e-47d5-8c8c-3c2a13bbdaa2',_binary ''),('2','dc3f3fce-5046-417a-9c42-fc3e28ac9b45',_binary '');
/*!40000 ALTER TABLE `khach_phong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phong`
--

DROP TABLE IF EXISTS `phong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phong` (
  `phong_id` int NOT NULL,
  `dia_chi` varchar(255) DEFAULT NULL,
  `ten_phong` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `_status` int DEFAULT NULL,
  PRIMARY KEY (`phong_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phong`
--

LOCK TABLES `phong` WRITE;
/*!40000 ALTER TABLE `phong` DISABLE KEYS */;
INSERT INTO `phong` VALUES (1,NULL,'Phòng 1','1200000',1),(2,NULL,'Phòng 2','1200000',1),(3,NULL,'Phòng 3','1200000',1),(4,NULL,'Phòng 4','1200000',1),(5,NULL,'Phòng 5','1200000',1),(6,NULL,'Phòng 6','900000',2),(7,NULL,'Phòng 7','900000',0),(8,NULL,'Phòng 8','900000',0),(9,NULL,'Phòng 9','900000',0),(10,NULL,'Phòng 10','900000',0);
/*!40000 ALTER TABLE `phong` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Dumping data for table `phong_seq`
--

LOCK TABLES `phong_seq` WRITE;
/*!40000 ALTER TABLE `phong_seq` DISABLE KEYS */;
INSERT INTO `phong_seq` VALUES (101);
/*!40000 ALTER TABLE `phong_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-08 10:36:47
