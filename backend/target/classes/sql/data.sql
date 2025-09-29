delete from REVIEW_ENTITY;
delete from BOOK_ENTITY_AUTHORS;
delete from AUTHOR_ENTITY;
delete from BOOK_ENTITY;
delete from EDITORIAL_ENTITY;
delete from ORGANIZATION_ENTITY;
delete from PRIZE_ENTITY;

insert into EDITORIAL_ENTITY (id, name) values (1000,'BLOOMSBURY');
insert into EDITORIAL_ENTITY (id, name) values (1001,'ANCHOR');
insert into EDITORIAL_ENTITY (id, name) values (1002,'W. W. Norton & Company');
insert into EDITORIAL_ENTITY (id, name) values (1003,'Wordsworth Editions Ltd');
insert into EDITORIAL_ENTITY (id, name) values (1004,'NCROL');
insert into EDITORIAL_ENTITY (id, name) values (1005,'Harper Voyager');
insert into EDITORIAL_ENTITY (id, name) values (1006,'Pottermore Publishing');
insert into EDITORIAL_ENTITY (id, name) values (1007,'Bantam');
insert into EDITORIAL_ENTITY (id, name) values (1008,'Crown');
insert into EDITORIAL_ENTITY (id, name) values (1009,'Scribner');
insert into EDITORIAL_ENTITY (id, name) values (1010,'Fantastic Books');
insert into EDITORIAL_ENTITY (id, name) values (1011,'Bloomsbury Publishing');
insert into EDITORIAL_ENTITY (id, name) values (1012,'Lake Union Publishing');
insert into EDITORIAL_ENTITY (id, name) values (1013,'Doubleday');

insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1000, 'Harry Potter and the Philosophers stone', '9786073193894', 'https://images-na.ssl-images-amazon.com/images/I/81-Q4oeHicL.jpg', 'Harry Potter has been orphaned and lives at home with his abominable aunt and uncle and his unbearable cousin Dudley.', '1997-06-26', 1000);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1001, 'The Shinning', '9789588789774', 'https://highclass.com.py/wp-content/uploads/2020/09/the-shining-cover.jpg', 'REDRUM. That was the word Danny had seen in the mirror. And even though he couldnt read, he understood that it was a message of horror.', '1977-01-28',1001);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1002, 'A clockwork orange', '9789584259554', 'https://i.pinimg.com/originals/e4/96/38/e49638392935ca19180160886c99dc42.jpg', 'A Clockwork Orange, published in 1962, sets the action in the near future of the 1970s. Burgess tells the story of four teenagers, or nadsats, as they are called in the slang created by the author.', '1962-02-09',1002);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1003, '20000 leagues under the sea', '9786287514454', 'https://i.pinimg.com/originals/63/90/98/6390985af0985a3f2af5d41225971cea.jpg', 'Combine with giant squids, survive a terrible whirlpool, sail under the ice of the Antarctic.', '1870-06-01',1003);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1004, 'A sentimental journey', '9788412064414', 'https://pictures.abebooks.com/isbn/9780801492914-us.jpg', 'Sentimental Journey describes the travels of a bewildered intellectual through Russia, Persia, Ukraine, and the Caucasus during the period of the Russian Revolution.', '1972-01-01',1004);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1005, 'The swerve', '9789584299109', 'https://images-na.ssl-images-amazon.com/images/I/61xZcJgkejL.jpg', 'Nearly six hundred years ago, in 1417, an Italian humanist set out on a journey to visit German convents in search of ancient manuscripts.', '2011-09-19',1003);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1006, 'A Storm of Swords', '9780007447848', 'https://images-na.ssl-images-amazon.com/images/I/51XJUf1j6XL._SX324_BO1,204,203,200_.jpg', 'The third volume, part one of A Song of Ice and Fire, the greatest fantasy epic of the modern age.', '2011-01-01',1005);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1007, 'The Stand', '9783741619991', 'https://m.media-amazon.com/images/I/41M5nekhDNL.jpg', 'The plot centers on a deadly pandemic of weaponized influenza and its aftermath, in which the few surviving humans gather into factions that are each led by a personification of either good or evil and seem fated to clash with each other.', '2008-06-24',1005);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1008, 'Harry Potter and the Cursed Child', '9781338216660', 'https://m.media-amazon.com/images/I/51G+WN7UghL.jpg', 'While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted.', '2017-07-25',1006);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1009, 'Dreamsongs: Volume I', '0553385682', 'https://images-na.ssl-images-amazon.com/images/I/51jrygJ0coL._SX330_BO1,204,203,200_.jpg', 'Even before A Game of Thrones, George R. R. Martin had already established himself as a giant in the field of fantasy literature.', '2012-10-16',1007);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1010, 'Napoleon Symphony: A Novel in Four Movements', '1846689163', 'https://m.media-amazon.com/images/I/51Dc9FnPvyL.jpg', 'A grand and affectionate tragicomic symphony to Napoleon Bonaparte.', '2012-01-01',1002);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1011, 'The Spy and the Traitor: The Greatest Espionage Story of the Cold War', '1101904216', 'https://m.media-amazon.com/images/I/51aXfsEDF4L.jpg', 'Unfolding the delicious three-way gamesmanship between America, Britain, and the Soviet Union, and culminating in the gripping cinematic beat-by-beat of Gordievskys nail-biting escape from Moscow in 1985, Ben Macintyres latest may be his best yet.', '2019-08-06',1008);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1012, 'Billy Summers', '1982173610', 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982173616/billy-summers-9781982173616_hr.jpg', 'Billy Summers is a man in a room with a gun. He’s a killer for hire and the best in the business. But he’ll do the job only if the target is a truly bad guy. And now Billy wants out.', '2021-08-03',1009);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1013, 'A Journey to the Centre of the Earth', '1515420183', 'https://images-na.ssl-images-amazon.com/images/I/911A8d8aCYL.jpg', 'It all began when Professor Otto Liedenbrock discovered a coded message in an old runic manuscript, but it was his nephew, Axel, who deciphered the messages meaning.', '2018-04-03',1010);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1014, 'House of Sky and Breath', '1635574072', 'https://images-na.ssl-images-amazon.com/images/I/51sMvVvUL2L._SX324_BO1,204,203,200_.jpg', 'Bryce Quinlan and Hunt Athalar are trying to get back to normal―they may have saved Crescent City, but with so much upheaval in their lives lately, they mostly want a chance to relax.', '2022-02-15',1011);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1015, 'A Court of Silver Flames', '168119628', 'https://images-na.ssl-images-amazon.com/images/I/51jbLXlw5kL._SX320_BO1,204,203,200_.jpg', 'Nesta Archeron has always been prickly-proud, swift to anger, and slow to forgive.', '2021-02-16',1011);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1016, 'Agent Sonya: Moscows Most Daring Wartime Spy', '0593136306', 'https://images-na.ssl-images-amazon.com/images/I/51J1+9BOxjL._SX327_BO1,204,203,200_.jpg', 'In 1942, in a quiet village in the leafy English Cotswolds, a thin, elegant woman lived in a small cottage with her three children and her husband, who worked as a machinist nearby.', '2020-09-15',1008);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1017, 'A Train to Moscow', '154203387', 'https://images-na.ssl-images-amazon.com/images/I/51fl3OkYyeL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg', 'In a small, provincial town behind the Iron Curtain, Sasha lives in a house full of secrets, one of which is her own dream of becoming an actress.', '2022-03-01',1012);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1018, 'The Rise and Fall of Adam and Eve', '9780393240801', 'https://images-na.ssl-images-amazon.com/images/I/51bq0cD0JAL._SX327_BO1,204,203,200_.jpg', 'Bolder, even, than the ambitious books for which Stephen Greenblatt is already renowned, The Rise and Fall of Adam and Eve explores the enduring story of humanity’s first parents.', '2017-09-12',1002);
insert into BOOK_ENTITY (id, name, isbn, image, description, publishing_date, editorial_id) values (1019, 'Salems Lot', '0385007515', 'https://images-na.ssl-images-amazon.com/images/I/51z4y3+L6VL._SX329_BO1,204,203,200_.jpg', 'Salems Lot is a small New England town with white clapboard houses, tree-lined streets, and solid church steeples.', '1990-04-01',1013);


insert into AUTHOR_ENTITY (id, name,  image, birth_date, description) values (1000,'J.K. Rowling', 'https://static1.mujerhoy.com/www/multimedia/202007/20/media/cortadas/jk-rowling-polemica-transfobia-k0TB-U110849049600hyD-624x936@MujerHoy.jpg', '1965-07-31', 'Joanne Rowling, who writes under the pseudonyms J. K. Rowling and Robert Galbraith, is an English writer, film producer and screenwriter, best known as the author of the Harry Potter series of books.');
insert into AUTHOR_ENTITY (id, name,  image, birth_date, description) values (1001, 'Stephen King', 'https://imagessl.casadellibro.com/img/autores/292.jpg', '1947-09-21','Stephen Edwin King, better known as Stephen King and occasionally by his pen name Richard Bachman, is an American writer of horror novels, supernatural fiction, mystery, science fiction and fantasy literature.');
insert into AUTHOR_ENTITY (id, name,  image, birth_date, description) values (1002, 'Anthony Burgess','https://trabalibros.com/rs/12066/4886d523-1977-4fa1-ab24-df1b609c897c/7cf/filename/anthony-burgess.jpg','1917-02-25', 'John Anthony Burgess Wilson was an English writer and composer, who produced a prolific literary and musical oeuvre, being generally known for the 1962 novel A Clockwork Orange, which was made famous by Stanley Kubricks 1971 film of the same name.');
insert into AUTHOR_ENTITY (id, name,  image, birth_date, description) values (1003,'Jules Verne','https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne_%28restoration%29.jpg/1200px-F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne_%28restoration%29.jpg','1828-02-08','Jules Gabriel Verne was a French writer, poet and playwright famous for his adventure novels.');
insert into AUTHOR_ENTITY (id, name,  image, birth_date, description) values (1004,'Viktor Shklovsky','https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sklovsky.jpg/220px-Sklovsky.jpg','1893-01-24','Viktor Borisovich Shklovsky was a Russian and Soviet critic, writer and pamphleteer. He presented some basic concepts of the theory of formalism, works of art of traditional character and a set of techniques used on the same author.');
insert into AUTHOR_ENTITY (id, name,  image, birth_date, description) values (1005,'Stephen Greenblatt','https://images-na.ssl-images-amazon.com/images/I/A13mv+tt1mL._SX450_.jpg','1943-11-07','Stephen Jay Greenblatt is an American literary historian and author.');
insert into AUTHOR_ENTITY (id, name,  image, birth_date, description) values (1006,'George R. R. Martin','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/George_R.R._Martin_at_Archipelacon.jpg/800px-George_R.R._Martin_at_Archipelacon.jpg','1948-09-20','George Raymond Richard Martin is an American novelist, screenwriter, television producer and short story writer.');
insert into AUTHOR_ENTITY (id, name,  image, birth_date, description) values (1007,'Ben Macintyre','https://images-na.ssl-images-amazon.com/images/I/61egLZ6HeiL._SX450_.jpg','1963-12-25','British author, historian, reviewer and columnist for The Times newspaper. His columns range from current affairs to historical controversies.');
insert into AUTHOR_ENTITY (id, name,  image, birth_date, description) values (1008,'Sarah J. Maas','https://images.gr-assets.com/authors/1582137198p8/3433047.jpg','1986-03-05','American fantasy author, best known for her debut series Throne of Glass.');
insert into AUTHOR_ENTITY (id, name,  image, birth_date, description) values (1009,'Elena Gorokhova','https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/6ikvlvmfubu2pfb0abqsa1kf6._SX450_.jpg','1970-02-02','Elena Gorokhova grew up in St. Petersburg, Russia, although for most of her life it was known to her as Leningrad.');


insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1000,1000);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1001,1001); 
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1002,1002);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1003,1003); 
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1004,1004);   
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1005,1005);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1006,1006);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1007,1001);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1008,1000);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1009,1006);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1010,1002);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1011,1007);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1012,1001);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1013,1003);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1014,1008);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1015,1008);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1016,1007);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1017,1009);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1018,1005);
insert into BOOK_ENTITY_AUTHORS (books_id,authors_id ) values (1019,1001);

insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1000,' ', 'It is an adventure book that transports you and takes you out of reality. I am anxious to be able to purchase the next book in the saga.', ' ', 1000);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1001, ' ','It is a good book.', ' ', 1001);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1002,' ','It does not have a good argument.',' ', 1002);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1003,' ', 'The best book I have ever known.',' ', 1003);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1004,' ', 'A good book.',' ', 1004);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1005,' ', 'Good one.',' ', 1005);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1006,' ', 'Best book ever.',' ', 1006);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1007,' ', 'Interesting.',' ', 1008);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1008,' ', 'Great!',' ', 1009);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1009,' ', 'Not bad.',' ', 1010);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1010,' ', 'Good one.',' ', 1012);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1011,' ', 'Good book.',' ', 1014);
insert into REVIEW_ENTITY  (id, name,  description, source, book_id) values (1012,' ', 'Nice book.',' ', 1019);

insert into ORGANIZATION_ENTITY (id, name, tipo) values (1000, 'org1', 1);
insert into ORGANIZATION_ENTITY (id, name, tipo) values (1001, 'org2', 2);

insert into PRIZE_ENTITY (id, description, name, premiation_date, author_id, organization_id) values (1000, 'prize1 desc', 'prize1', '2010-01-01', 1000, 1000);
insert into PRIZE_ENTITY (id, description, name, premiation_date, author_id, organization_id) values (1001, 'prize2 desc', 'prize2', '2010-01-01', 1001, 1001);

