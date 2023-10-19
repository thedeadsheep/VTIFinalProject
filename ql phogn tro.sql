/* --drop all database
 drop table hoa_don;
	drop table phong;
    
     drop table giay_to;
    drop table khach;
   
   
    drop table dich_vu;
*/

create table khach (
	kh_id varchar(255) not null primary key,
    ten nvarchar(64),
    ho_lot nvarchar(128),
    nam_sinh date,
    ngay_chuyen_vao date,
    ngay_chuyen_di date,
    so_CCCD varchar(11),
    con_o boolean,
    ten_ql varchar(32),
    link_with varchar(255),
    constraint FK_khach_khach foreign key (link_with) references khach(kh_id)
);

create table phong (
	phong_id varchar(255) not null primary key,
    ten_phong nvarchar(128),
	isEmty boolean not null,
    price int unsigned,
    ma_kh varchar(255),
    constraint FK_phong_khach foreign key (ma_kh) references khach(kh_id)
);


create table giay_to(
	ma_gt varchar(255) primary key,
    ma_kh varchar(255),
    ten_loai_giay nvarchar(128),
    noi_dung varchar(255),
    constraint FK_Giay_to_Khach foreign key (ma_kh) references khach(kh_id)
);

create table hoa_don(
	ma_hd varchar(255),
    thoi_gian_thu date,
    ma_phong varchar(255),
    so_dien int not null,
    so_nuoc int not null,
    ma_dich_vu bit(8),
    da_thanh_toan boolean,
	thoi_gian_thanh_toan date,
    primary key (ma_hd, thoi_gian_thu, ma_phong),
    constraint FK_hoa_don_phong foreign key (ma_phong) references phong(phong_id)
);
create table dich_vu(
	ma_dich_vu tinyint auto_increment primary key,
    ten_dich_vu nvarchar(64),
    gia_dich_vu int unsigned
)
