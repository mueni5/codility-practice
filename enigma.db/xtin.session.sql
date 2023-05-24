-- CREATE TABLE user (
--     username VARCHAR(255) NOT NULL,
--     password NOT NULL, email VARCHAR(255) NOT NULL
-- );

-- INSERT INTO user (username, password, email) 
-- VALUES ('xtin', 2004, 'xtin@mbuvi.com');

SELECT email  FROM  user
WHERE username IN ('xtin', 'admin');

