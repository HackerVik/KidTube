# KidTube  
  
This project is a microservice-based Youtube-like site for kids.  

<img src=/readme_files/kidtube.png>

# Project structure  
  
- Videoservice(Java)  
- Eureka(Spring)  
- Zuul(Spring)  
- Frontend(React)  
- Gopassword(Golang)  
- Pythonpassword(Python)  
- Javapassword(Java)  
  
## Videoservice  
  
This server is providing a JSON file at http://localhost:8081/video/all it has all the information from which the frontend can generate the layout.  
  
## Eureka  
  
Eureka as a client-side service discovery is registering all the services in this project.  

<img src=/readme_files/eureka.png>

## Zuul  
  
Zuul is handling the communication between the front-end application and the RES APIs that are deployed separately.  
  
## Frontend  
  
The front-end side of this project is realized by React.  
> Before firing this up you should set your inet in **.env** file.  
  
## Gopassword  
  
Just a simple REST API providing a suggested password at http://localhost:8083/gopassword.  

<img src=/readme_files/gopassword.png>  

## Pythonpassword  
  
Another simple REST API providing a suggested password at http://localhost:5000/pythonpassword.  

<img src=/readme_files/pythonpassword.png>

## Javapassword  
  
Third simple REST API providing a suggested password at http://localhost:8082/javapassword.

<img src=/readme_files/javapassword.png>
