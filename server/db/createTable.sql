create table department(
    departmentId varchar2(50) not null,
    name varchar2(50) not null,
    description varchar2(1000) not null,
    primary key(departmentId)
);

create table bill(
    billId varchar2(50) not null,
    amount number not null,
    primary key(billId)
);

create table staff(
    username varchar2(50) not null,
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

create table patient(
    patientId varchar2(50) not null,
    firstName varchar2(50) not null,
    lastName varchar2(50) not null,
    dob varchar2(50) not null,
    gender varchar2(50) not null,
    diagnosis varchar2(50) not null,
    hospitalizedDate varchar2(50) not null,
    dischargedDate varchar2(50) not null,
    billId varchar2(50) not null,
    primary key(patientId),
    foreign key(billId) references bill(billId) on delete set null,
);

create table staffHasPatient(
    staffId varchar2(50) not null,
    patientId varchar2(50) not null,
    foreign key(staffId) references staff(staffId) on delete set null,
    foreign key(patientId) references patient(patientId) on delete set null
);

create table ward(
    id varchar2(50) not null,
    wardId varchar2(50) not null,
    bedId varchar2(50) not null,
    patientId varchar2(50),
    primary key(wardId,bedId),
    foreign key(patientId) references patient(patientId) on delete set null
);

create table departmentHasWard(
    departmentId varchar2(50) not null,
    wardId varchar2(50) not null,
    bedId varchar2(50) not null,
    foreign key(departmentId) references department(departmentId) on delete set null,
    foreign key(wardId,bedId) references ward(wardId,bedId) on delete set null
);

create table pharmacy(
    pharmacyId varchar2(50) not null,
    name varchar2(50) not null,
    operationHour varchar2(50) not null,
    primary key(pharmacyId)
);

create table insurance(
    insuranceId varchar2(50) not null,
    name varchar2(50) not null,
    phoneNum varchar2(50) not null,
    address varchar2(50) not null,
    primary key(insuranceId)
);

create table patientHasInsurance(
    patientId varchar2(50) not null,
    insuranceId varchar2(50) not null,
    insuranceNum varchar2(50) not null,
    foreign key(patientId) references patient(patientId) on delete set null,
    foreign key(insuranceId) references insurance(insuranceId) on delete set null
);

create table medicine(
    medicineId varchar2(50) not null,
    name varchar2(50) not null,
    primary key(medicineId)
);

create table pharmacyHasMedicine(
    pharmacyId varchar2(50) not null,
    medicineId varchar2(50) not null,
    foreign key(pharmacyId) references pharmacy(pharmacyId) on delete set null,
    foreign key(medicineId) references medicine(medicineId) on delete set null
);