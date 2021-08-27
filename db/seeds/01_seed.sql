INSERT INTO users (first_name, last_name, email)
VALUES
('Mette', 'Gibson', 'metteg@gmail.com'),
('Ashlen', 'Bryant', 'abrayant@hotmail.com'),
('Daulton', 'Ellery', 'de@pm.me'),
('Clovis', 'Jordanna', 'clovisj@gmail.com'),
('Macy', 'Teddy', 'mt@gmail.com');

INSERT INTO events (owner_id, start_date, end_date, close_submission, title, detail, link)
VALUES
(1, '2021-05-11', '2021-06-01', '2021-05-30 11:00:00', 'product meeting', 'meeting with my team about some project', 'abcde'),
(2, '2021-01-10', '2021-01-20', '2021-01-18 13:00:00', 'movie night', 'friday @ 8:00pm', '1234'),
(2, '2021-09-01', '2021-09-11', '2021-09-05 11:00:00', 'fancy dinner', 'at a expensive restaurant', 'ab'),
(4, '2021-05-11', '2021-06-01', '2021-05-30 09:00:00', 'super secret party', 'not that secret', null),
(1, '2021-06-11', '2021-06-28', '2021-06-13 11:00:00', 'music feestival', 'through zoom because... COVID', null);

INSERT INTO time_slots (event_id, a_day, start_time, end_time)
VALUES
(1, '2021-05-11', NULL, NULL),
(1, '2021-05-13', '13:30', '15:00'),
(2, '2021-01-12', '09:15', '17:00'),
(2, '2021-01-15', NULL, NULL),
(3, '2021-09-05', NULL, NULL),
(3, '2021-09-03', '11:00', '11:30');

INSERT INTO user_votes (user_id, time_slot_id)
VALUES
(2, 1),
(3, 1),
(4, 2),
(5, 3);
