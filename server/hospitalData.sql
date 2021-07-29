create table staff(
    staffId varchar2(50) not null,
    password varchar2(50) not null,
    firstName varchar2(50) not null,
    lastName varchar2(50) not null,
    email varchar2(50) not null,
    dob varchar2(50) not null,
    position varchar2(50) not null,
    departmentId varchar2(50) not null,
    primary key(staffId),
    foreign key(departmentId) references department(departmentId) on delete set null
);

insert into staff values('S10001','12345','John','Newton','John.Newton@hospital.com','1977-8-1','Attending','D110');
insert into staff values('S10002','12345','Mike','Smith','Mike.Smith@hospital.com','1987-1-12','Fellow','D110');
insert into staff values('S10003','12345','Tom','Taylor','Tom.Taylor@hospital.com','1967-2-21','Head of Department','D110');
insert into staff values('S10004','12345','David','Brown','David.Brown@hospital.com','1990-3-13','Chief Resident','D110');
insert into staff values('S10005','12345','Jack','Miller','Jack.Miller@hospital.com','1992-12-31','Senior Resident','D110');
insert into staff values('S10006','12345','Steve','Davis','Steve.Davis@hospital.com','1993-10-11','Junior Resident','D110');


create table staffHasPatient(
    staffId varchar2(50) not null,
    patientId varchar2(50) not null,
    foreign key(staffId) references staff(staffId) on delete set null,
    foreign key(patientId) references patient(patientId) on delete set null
);

insert into staffHasPatient values('S10001','P10001');
insert into staffHasPatient values('S10001','P10002');
insert into staffHasPatient values('S10001','P10003');
insert into staffHasPatient values('S10001','P10004');
insert into staffHasPatient values('S10001','P10005');
insert into staffHasPatient values('S10001','P10006');
insert into staffHasPatient values('S10001','P10007');
insert into staffHasPatient values('S10001','P10008');

create table department(
    departmentId varchar2(50) not null,
    name varchar2(50) not null,
    description varchar2(1000) not null,
    primary key(departmentId)
);

insert into department values('D101','General Surgery','Covers a wide range of types of surgery and procedures on patients.');
insert into department values('D102','Gynecology','Investigates and treats problems relating to the female urinary tract and reproductive organs, such as Endometriosis, infertility and incontinence.');
insert into department values('D103','Gastroenterology','Investigates and treats digestive and upper and lower gastrointestinal diseases.');
insert into department values('D104','Cardiology','Provides medical care to patients who have problems with their heart or circulation.');
insert into department values('D105','Oncology','Provides treatments, including radiotherapy and chemotherapy, for cancerous tumors and blood disorders.');
insert into department values('D106','Ophthalmology','Provides a range of ophthalmic eye related services for both in and outpatients.');
insert into department values('D107','Orthopaedics','Treats conditions related to the musculoskeletal system, including joints, ligaments, bones, muscles, tendons and nerves.');
insert into department values('D108','Otolaryngology','Provides comprehensive and specialized care covering both Medical and Surgical conditions related not just specifically to the Ear, Nose and Throat');
insert into department values('D109','Rheumatology','Treats patients for musculoskeletal disorders such as: bones, joints, ligaments, tendons, muscles and nerves.');
insert into department values('D110','Intensive Care Unit','Provides intensive treatment medicine and caters to patients with severe and life-threatening illnesses and injuries');

create table patient(
    patientId varchar2(50) not null,
    firstName varchar2(50) not null,
    lastName varchar2(50) not null,
    dob varchar2(50) not null,
    gender varchar2(50) not null,
    diagnosis varchar2(50) not null,
    hosptializedDate varchar2(50) not null,
    dischargedDate varchar2(50) not null,
    billId varchar2(50) not null,
    primary key(patientId),
    foreign key(billId) references bill(billId) on delete set null,
);

insert into patient values('P10001', 'Mike','Newton','1978-2-3','M','COVID-19','W1','B1','2020-12-8','2021-2-2','I101','B10001');
insert into patient values('P10002', 'David','Taylor','1959-10-11','M','COVID-19','W2','B1','2020-12-8','2021-2-2','I102','B10002');
insert into patient values('P10003', 'John','Smith','1987-8-21','M','COVID-19','W2','B1','2020-12-8','2021-2-2','I103','B10003');
insert into patient values('P10004', 'Jack','Davis','1975-4-23','M','COVID-19','W2','B2','2020-12-8','2021-2-2','I104','B10004');
insert into patient values('P10005', 'Steve','Miller','1967-12-3','M','COVID-19','W3','B12','2020-12-8','2021-2-2','I105','B10005');
insert into patient values('P10006', 'John','Smith','1987-8-21','M','COVID-19','W2','B1','2020-12-8','2021-2-2','I103','B10003');
insert into patient values('P10007', 'Jack','Davis','1975-4-23','M','COVID-19','W2','B2','2020-12-8','2021-2-2','I104','B10004');
insert into patient values('P10008', 'Steve','Miller','1967-12-3','M','COVID-19','W3','B12','2020-12-8','2021-2-2','I105','B10005');

insert into patient values('P10001', 'Mike','Newton','1978-2-3','M','COVID-19','2020-12-8','2021-2-2','B10001');
insert into patient values('P10002', 'David','Taylor','1959-10-11','M','COVID-19','2020-12-8','2021-2-2','B10002');
insert into patient values('P10003', 'John','Smith','1987-8-21','M','COVID-19','2020-12-8','2021-2-2','B10003');
insert into patient values('P10004', 'Jack','Davis','1975-4-23','M','COVID-19','2020-12-8','2021-2-2','B10004');
insert into patient values('P10005', 'Steve','Miller','1967-12-3','M','COVID-19','2020-12-8','2021-2-2','B10005');
insert into patient values('P10006', 'John','Smith','1987-8-21','M','COVID-19','2020-12-8','2021-2-2','B10003');
insert into patient values('P10007', 'Jack','Davis','1975-4-23','M','COVID-19','2020-12-8','2021-2-2','B10004');
insert into patient values('P10008', 'Steve','Miller','1967-12-3','M','COVID-19','2020-12-8','2021-2-2','B10005');


create table ward(
    wardId varchar2(50) not null,
    bedId varchar2(50) not null,
    patientId varchar2(50),
    primary key(wardId,bedId),
    foreign key(patientId) references patient(patientId) on delete set null
);

insert into ward values('W1','B1','P10001');
insert into ward values('W1','B2','');
insert into ward values('W2','B1','P10002');
insert into ward values('W2','B2','P10003');
insert into ward values('W3','B1','P10004');
insert into ward values('W3','B2','P10005');
insert into ward values('W4','B1','P10006');
insert into ward values('W4','B2','P10007');
insert into ward values('W5','B1','P10008');
insert into ward values('W5','B2','');
insert into ward values('W6','B1','');

create table departmentHasWard(
    departmentId varchar2(50) not null,
    wardId varchar2(50) not null,
    bedId varchar2(50) not null,
    foreign key(departmentId) references department(departmentId) on delete set null,
    foreign key(wardId,bedId) references ward(wardId,bedId) on delete set null
);

insert into departmentHasWard values('D110','W1','B1');
insert into departmentHasWard values('D110','W2','B1');
insert into departmentHasWard values('D110','W3','B1');
insert into departmentHasWard values('D110','W4','B1');
insert into departmentHasWard values('D110','W5','B1');
insert into departmentHasWard values('D110','W6','B1');
insert into departmentHasWard values('D110','W1','B2');
insert into departmentHasWard values('D110','W2','B2');
insert into departmentHasWard values('D110','W3','B2');
insert into departmentHasWard values('D110','W4','B2');
insert into departmentHasWard values('D110','W5','B2');

create table pharmacy(
    pharmacyId varchar2(50) not null,
    name varchar2(50) not null,
    operationHour varchar2(50) not null,
    primary key(pharmacyId)
);

insert into pharmacy values('P101','Family Pharmacy','9:00-18:00 Mon-Fri');
insert into pharmacy values('P102','Good Neighbor Pharmacy','9:00-18:00 Mon-Fri');
insert into pharmacy values('P103','Rite Aid','9:00-18:00 Mon-Fri');
insert into pharmacy values('P104','Walgreens','9:00-18:00 Mon-Fri');
insert into pharmacy values('P105','CVS Pharmacy','9:00-18:00 Mon-Fri');
insert into pharmacy values('P106','Bartell Drugs','9:00-18:00 Mon-Fri');
insert into pharmacy values('P107','Medicine Shoppe Pharmacy','9:00-18:00 Mon-Fri');
insert into pharmacy values('P108','Health Mart','9:00-18:00 Mon-Fri');
insert into pharmacy values('P109','Discount Drug Mart','9:00-18:00 Mon-Fri');
insert into pharmacy values('P110','Valu-Rite','9:00-18:00 Mon-Fri');

create table insurance(
    insuranceId varchar2(50) not null,
    name varchar2(50) not null,
    phoneNum varchar2(50) not null,
    address varchar2(50) not null,
    primary key(insuranceId)
);

insert into insurance values('I101','UnitedHealth','(888) 835-9637','4699 Old Ironsides Dr, Santa Clara, CA 95054');
-- insert into insurance values('I102','Kaiser Foundation');
-- insert into insurance values('I103','Anthem Inc.');
-- insert into insurance values('I104','Humana');
-- insert into insurance values('I105','Centene Corp');
-- insert into insurance values('I106','Cigna Health');
-- insert into insurance values('I107','Guidewell Mut Holding');
-- insert into insurance values('I108','Blue Cross of California');
-- insert into insurance values('I109','Highmark Group');
-- insert into insurance values('I110','Independence Health Group Inc.');

create table patientHasInsurance(
    patientId varchar2(50) not null,
    insuranceId varchar2(50) not null,
    insuranceNum varchar2(50) not null,
    foreign key(patientId) references patient(patientId) on delete set null,
    foreign key(insuranceId) references insurance(insuranceId) on delete set null
);

insert into patientHasInsurance values('P10001','I101','1234567')


create table bill(
    billId varchar2(50) not null,
    amount number not null,
    primary key(billId)
);

insert into bill values('B10001',1111.11);
insert into bill values('B10002',2111.11);
insert into bill values('B10003',3111.11);
insert into bill values('B10004',4111.11);
insert into bill values('B10005',5111.11);
insert into bill values('B10006',6111.11);
insert into bill values('B10007',7111.11);
insert into bill values('B10008',8111.11);
insert into bill values('B10009',9111.11);
insert into bill values('B10010',10111.11);

create table medicine(
    medicineId varchar2(50) not null,
    name varchar2(50) not null,
    primary key(medicineId)
);

insert into medicine values('M10001','Amoxicillin');
insert into medicine values('M10002','Ampicillin');
insert into medicine values('M10003','Acetaminophen');
insert into medicine values('M10004','Aspirin');
insert into medicine values('M10005','Antihistamine');
insert into medicine values('M10006','Antacids');
insert into medicine values('M10007','Omeprazole');
insert into medicine values('M10008','Lisinopril');
insert into medicine values('M10009','Gabapentin');
insert into medicine values('M10010','Metformin');
insert into medicine values('M10011','Losartan');
insert into medicine values('M10012','Amlodipine');

create table pharmacyHasMedicine(
    pharmacyId varchar2(50) not null,
    medicineId varchar2(50) not null,
    foreign key(pharmacyId) references pharmacy(pharmacyId) on delete set null,
    foreign key(medicineId) references medicine(medicineId) on delete set null
);

insert into pharmacyHasMedicine values('P101','M10001');
insert into pharmacyHasMedicine values('P101','M10002');
insert into pharmacyHasMedicine values('P101','M10003');
insert into pharmacyHasMedicine values('P101','M10004');
insert into pharmacyHasMedicine values('P101','M10005');
insert into pharmacyHasMedicine values('P101','M10006');
insert into pharmacyHasMedicine values('P101','M10007');
insert into pharmacyHasMedicine values('P101','M10008');
insert into pharmacyHasMedicine values('P101','M10009');
insert into pharmacyHasMedicine values('P101','M100010');
insert into pharmacyHasMedicine values('P101','M100011');
insert into pharmacyHasMedicine values('P102','M10001');
insert into pharmacyHasMedicine values('P102','M10002');
insert into pharmacyHasMedicine values('P102','M10003');
insert into pharmacyHasMedicine values('P102','M10004');
insert into pharmacyHasMedicine values('P102','M10005');
insert into pharmacyHasMedicine values('P102','M10006');
insert into pharmacyHasMedicine values('P102','M10007');
insert into pharmacyHasMedicine values('P102','M10008');
insert into pharmacyHasMedicine values('P102','M10009');
insert into pharmacyHasMedicine values('P102','M100010');
insert into pharmacyHasMedicine values('P102','M100011');
insert into pharmacyHasMedicine values('P103','M10001');
insert into pharmacyHasMedicine values('P103','M10002');
insert into pharmacyHasMedicine values('P103','M10003');
insert into pharmacyHasMedicine values('P103','M10004');
insert into pharmacyHasMedicine values('P103','M10005');
insert into pharmacyHasMedicine values('P103','M10006');
insert into pharmacyHasMedicine values('P103','M10007');
insert into pharmacyHasMedicine values('P103','M10008');
insert into pharmacyHasMedicine values('P103','M10009');
insert into pharmacyHasMedicine values('P103','M100010');
insert into pharmacyHasMedicine values('P103','M100011');
