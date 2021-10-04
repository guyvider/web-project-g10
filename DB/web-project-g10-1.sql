create table useres (usersId int, email varchar (20), name varchar(20),
BD date,phone int,
  CONSTRAINT usuers_pk PRIMARY KEY (usersId)
);

create table products (productId int,
  CONSTRAINT products_pk PRIMARY KEY (productId)
);

create table [Groups] (GroupId int, price int,
CONSTRAINT Groups_pk PRIMARY KEY (GroupId)
);

create table Orders (OrderId int, DT datetime,totalAmount int,
CONSTRAINT Orderss_pk PRIMARY KEY (OrderId)
);

create table Cards (cardNumber int, expDate date, cvv int,
CONSTRAINT Cards_pk PRIMARY KEY (cardNumber));


