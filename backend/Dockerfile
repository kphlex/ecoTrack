FROM python:3.8-alpine

# Install required packages
RUN apk add --virtual .build-deps --no-cache mariadb-connector-c-dev gcc musl-dev

# Set the working directory
WORKDIR /app/backend

# Copy the requirements file
COPY requirements.txt /app/backend/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . /app/backend/

# Set the entrypoint command
ENTRYPOINT ["python", "manage.py", "runserver", "0.0.0.0:8000"]
