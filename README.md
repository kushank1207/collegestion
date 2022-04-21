# Collegestion 

~ An effective managing system 

--------
--------

![image](https://user-images.githubusercontent.com/43453205/160801161-77202711-3dca-4b12-ad73-0a776a6b1788.png)

*Project initiated & developed for Grad course CEN5035 - Software Engineering*


### 🚀Problem Defintion
--------
Collegestion particularly gives rises to a self innovated CRM system, the modification giving way to both customers as well as inter-organisational members,which not only works out with the clients but the other way as well. Since this project is a collaborative CRM at roots, we will try it to be operational alongside as well. 

In this modern era it has become quite necessary that the interaction between an organization and it's substructure including the customers reflect itself in an efficient manner. Thus, with new advanced technologies, it becomes effective to raise up the barriers of distance. Hence to make it more effective, we will be dealing with the space complexity issues apart from getting our conventional eye over the time complexity since there is a tradeoff between them. Therefore in our present corporate project, we will try to balance both equally.

Exactly the roles of our system would include the primary role of managing interactivity between customers (or habitué) and most probably with the persistence of possibility, the secondary will be the inter-organizational employees giving it contrast from the conventional systems.

Our tool will be able to provide its usability and try to increase the productivity of multifarious parts such as development(business), marketing, customer services, etc. aid in tsk tracking, raising sales opportunities, and personalizing communication.


### 🚀Outcomes:
--------
The outcome expected would be a viable interface storing the data as well as reflecting it in a dual input to single outcome format. This in-turn will be beneficial in an organisation by enabling smooth working with apt storage techniques, whcih can further be developed in a pliable format by the period of expected completion.

# Run the project
--------
```
//Project clone
git clone https://github.com/kushank1207/collegestion.git

//install npm packages
cd client
npm install
npm start

//set up backend
cd ..
cd server
go mod tidy
go build main.go
go run main.go

//set up .env file in server folder
MONGODB_URL=""
```

# 🚀Testing
Testing videos and screenshots are available in the directory - /server/cypress/

# 🚀Rest API
![Project](https://user-images.githubusercontent.com/66404378/153310836-89ec67fe-f294-4038-8784-85d6bfd2b272.gif)

# 🚀API Docs

### API 1: Retreive all customers

GET Request
This API takes in the signup details of the users, stores them in the database, and returns back a tracking ID Unique for every user.

URL: http://localhost:5000/customers
Sample request Body and Response:
![image-20220420223157529](/Users/kushank/Library/Application Support/typora-user-images/image-20220420223157529.png)

### API 2: Fetching all products for a business

GET Request
This API takes in the tracking ID of a user and returns back the user details.

URL: http://localhost:8080/products
Sample request Body and Response:

![image-20220420223112651](/Users/kushank/Library/Application Support/typora-user-images/image-20220420223112651.png)



### API 3: Create new customer

POST Request
This API helps in creating a new customer from client.

URL: http://localhost:5000/customer/create
Sample request Body and Response:

![image-20220420223034495](/Users/kushank/Library/Application Support/typora-user-images/image-20220420223034495.png)

### API 4: Create new product

POST Request
This API helps in adding new product to the existing business from client.

URL: http://localhost:5000/product/create
Sample request Body and Response:

![image-20220420222957601](/Users/kushank/Library/Application Support/typora-user-images/image-20220420222957601.png)

### API 5: Updating information of existing customer

PUT Request
This API updates the information of the customer.

URL: http://localhost:5000/customer/update/61fde03595ed79aa95e0cc45
Sample request Body and Response:

![image-20220420222914486](/Users/kushank/Library/Application Support/typora-user-images/image-20220420222914486.png)

### API 6: Updating information of existing product

PUT Request
This API updates the information of the product.

URL: http://localhost:5000/product/update/61fdcdc6ddd3c75733a0b35b
Sample request Body and Response:

![image-20220420222807111](/Users/kushank/Library/Application Support/typora-user-images/image-20220420222807111.png)

### API 7: Delete existing customer 

DELETE Request
This API deletes the existing customer.

URL: http://localhost:5000/customer/delete/61fde03595ed79aa95e0cc45
Sample request Body and Response:

![image-20220420223426351](/Users/kushank/Library/Application Support/typora-user-images/image-20220420223426351.png)

### API 8: Delete existing product 

DELETE Request
This API deletes the existing product.

URL: http://localhost:5000/product/delete/61fdcdc6ddd3c75733a0b35b
Sample request Body and Response:

![image-20220420223526827](/Users/kushank/Library/Application Support/typora-user-images/image-20220420223526827.png)

# 🚀Technology Used

* ReactJS
* Golang
* MongoDB
* TailwindUI

# 🚀User Story Mapping
![20220204_225127](https://user-images.githubusercontent.com/43453205/152628375-e2d91300-0590-42d4-b191-273c69e23655.jpg)


The above mapping would be updated with progressive stages onward and thereby will be updated consecutively.

# 🚀Team Members

| Members                 | Github ID     | Roles |
| ----------------------- | ------------- |-------|
| Kushank Singh           | kushank1207   |Backend|
| Ishan(a.k.a Louis Paul) | louispaul2000 |Frontend|
| Kumar Vinayak           | mevinayak     |Frontend|
| Gurazeez Singh Sachdeva | gurazeez07    |Frontend|



# 🚀References
--------
For more detailed explanation :-

* [React](https://reactjs.org/)
* [Golang](https://go.dev/doc/)
* [MongoDB](https://docs.mongodb.com/)
* [Tailwind](https://tailwindui.com/documentation)

