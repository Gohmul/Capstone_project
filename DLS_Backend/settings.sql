-- settings.sql
CREATE DATABASE dls;
CREATE USER dlsuser WITH PASSWORD 'dls';
GRANT ALL PRIVILEGES ON DATABASE dls TO dlsuser;