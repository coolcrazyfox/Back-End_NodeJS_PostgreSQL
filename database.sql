create DATABASE testdata;

create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);
create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);
create TABLE teacher(
    id SERIAL PRIMARY KEY,
    surname VARCHAR(255)
);
create TABLE lesson(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    teacher_id INTEGER NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES teacher(id)
);

-- INSERT INTO teacher (surname) values ('Ivanov');
-- INSERT INTO teacher (surname) values ('Itak');
-- INSERT INTO teacher (surname) values ('Gorch');
-- INSERT INTO teacher (surname) values ('Test');
-- INSERT INTO lesson (name, teacher_id) values ('English', 1);
-- INSERT INTO lesson (name, teacher_id) values ('French', 2);
-- INSERT INTO lesson (name, teacher_id) values ('Italic', 3);
-- INSERT INTO lesson (name, teacher_id) values ('Italic', 4);
-- INSERT INTO lesson (name, teacher_id) values ('Italic', 1), ('French', 3), ('French', 1);
-- select teacher.surname, lesson.name from teacher inner join lesson on teacher.id=lesson.teacher_id;
-- -- method inner join
-- select categories.name, website.brand, website.model, website.device, website.oem, website.price from categories inner join website on categories.id=website.categories_id;
-- -- analog join method from
-- select categories.name, website.brand, website.model, website.device, website.oem, website.price from  website, categories where website.categories_id=categories.id;
-- -- by OEM sort
SELECT categories.name, website.brand, website.model, website.device, website.oem, website.price from website, categories where categories.id = website.categories_id order by website.oem;

create TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
create TABLE website(
    id SERIAL PRIMARY KEY,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    device VARCHAR(255) NOT NULL,
    oem VARCHAR(255) NOT NULL,
    price VARCHAR(25) NOT NULL,
    link TEXT ,
    img  TEXT ,
    data VARCHAR(25) ,
    categories_id INTEGER NOT NULL,
    FOREIGN KEY (categories_id) REFERENCES categories(id)
);
-- INSERT INTO categories (name) values ('ebay');
-- INSERT INTO categories (name) values ('avita');
-- INSERT INTO categories (name) values ('alegro');
-- INSERT INTO categories (name) values ('bamper');
-- INSERT INTO categories (name) values ('drom');
-- INSERT INTO categories (name) values ('finndel');
-- INSERT INTO categories (name) values ('RRR');
--
-- INSERT INTO website (brand, model, device, oem, price, link, img, data, categories_id) values ('BMW','X5 E70', 'BYD', '8510838', '479','', '','2022-10-29', 1) , ('BMW','X5 E70', 'BYD','8510838', '225','', '','2022-10-29', 2), ('BMW','X5 E70', 'BYD','8510838', '706','', '','2022-10-29', 3), ('BMW','X5 E70', 'BYD','8510838', '400','', '','2022-10-29', 7), ('BMW','X5 E70', 'BYD','8510838', '225','', '','2022-10-29', 5);
-- INSERT INTO website (brand, model, device, oem, price, link, img, data, categories_id) values ('JEEP','Liberty', 'Shleif rulia', '56010619AE', '149','', '','2022-10-29', 1) , ('JEEP','Liberty', 'Shleif rulia', '56010619AE', '59','', '','2022-10-29', 7), ('JEEP','Liberty', 'Shleif rulia', '56010619AE', '23','', '','2022-10-29', 4), ('JEEP','Liberty', 'Shleif rulia', '56010619AE', '21','', '','2022-10-29', 5);
-- INSERT INTO website (brand, model, device, oem, price, link, img, data, categories_id) values ('MERCEDES','S-class W140', 'Rele povorotov', 'A1408207126', '139','', '','2022-10-29', 1) , ('MERCEDES','S-class W140', 'Rele povorotov', 'A1408207126', '48','', '','2022-10-29', 3), ('MERCEDES','S-class W140', 'Rele povorotov', 'A1408207126', '51','', '','2022-10-29', 7), ('MERCEDES','S-class W140', 'Rele povorotov', 'A1408207126', '33','', '','2022-10-29', 4), ('MERCEDES','S-class W140', 'Rele povorotov', 'A1408207126', '26','', '','2022-10-29', 2), ('MERCEDES','S-class W140', 'Rele povorotov', 'A1408207126', '9','', '','2022-10-29', 5);
