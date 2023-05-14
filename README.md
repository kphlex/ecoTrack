# ecoTrack

## Project Description

ecoTrack is a behavior-based safety tracker that allows users/employees to turn in safety cards. The content of the safety cards goes into the database, enabling the management team to focus on areas that require more training or awareness based on what has been submitted by personnel.

The Admin dashboard allows for more functionality in editing/deleting tables or graphs that show up on the platform, as well as creating weekly safety topics.

### Phase 1

- User/Admin permissions and functionality
- Safety Card creation and tracking

### Phase 2

- Reporting
- Permits
- JSAs
- Certification Tracking

### Undetermined

- Employees?

### Tech Stack

- Frontend: React / Tailwind CSS?
- Backend: Django
- Database: MySQL
- DevOps: Docker

## Project Setup

Notes: MySQL, npm/yarn, and Docker will be needed to run the project. Install MySQL, npm/yarn, and Docker + Docker Compose as needed. These commands are based on Mac OS; if you are using Windows, you will need to run the appropriate commands for Windows.

React/Frontend runs on localhost:3000
Django/Backend runs on localhost:8000

### Step 1

Clone the git repository.

### Step 2

Setup .env file (in backend directory) with your MySQL database username and password.
Setup .d-env file (in root directory) with your MySQL database username and password.

### Step 3

Open a terminal and run the following commands. Make sure you are in the ecoTrack directory.
```python3 -m venv venv```
```source venv/bin/activate```


### Step 4

Install Python/Django dependencies.
```cd backend```
```pip install -r requirements.txt```

### Step 5

Install React/JS dependencies. Open a second terminal and run the following command:
```cd frontend```
```npm install```


### Step 6

Compose Docker containers. From the root directory (ecoTrack), run the following commands:
```set -a```
```source .d-env```
```docker-compose up -d```


### Step 7

Before starting the Django server, run the following commands:
```python manage.py makemigrations```
```python manage.py migrate```

### Step 8

In the frontend terminal, run:
```npm start```

In the backend terminal, run:
```python manage.py runserver```


## Contributing

1. Fork it (<https://github.com/kphlex/ecoTrack/fork>)
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -am 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a new Pull Request

