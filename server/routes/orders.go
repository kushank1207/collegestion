package routes

import (
	"context"
	"fmt"

	"net/http"
	"server/models"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var validate = validator.New()

var customerCollection *mongo.Collection = OpenCollection(Client, "customer")
var productCollection *mongo.Collection = OpenCollection(Client, "product")

//add a customer

func AddCustomer(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var customer models.Customer

	
	if err := c.BindJSON(&customer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println(err)
		return
	}
	fmt.Print(customer)

	validationErr := validate.Struct(customer)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		fmt.Println(validationErr)
		//
	}
	customer.Cust_ID = primitive.NewObjectID()
	fmt.Println(ctx)
	result, insertErr := customerCollection.InsertOne(ctx, customer)

	if insertErr != nil {
		msg := "customer item was not created"
		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		fmt.Println(insertErr)
		//
	}
	defer cancel()

	c.JSON(http.StatusOK, result)
}

//delete a customer
func DeleteCustomer(c *gin.Context) {

	Cust_ID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(Cust_ID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	result, err := customerCollection.DeleteOne(ctx, bson.M{"_id": docID})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		//
	}

	defer cancel()

	c.JSON(http.StatusOK, result.DeletedCount)

}

//update a customer
func UpdateCustomer(c *gin.Context) {

	orderID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(orderID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var customer models.Customer

	if err := c.BindJSON(&customer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println(err)
		//
	}

	validationErr := validate.Struct(customer)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		fmt.Println(validationErr)
		//
	}

	result, err := customerCollection.ReplaceOne(
		ctx,
		bson.M{"_id": docID},
		bson.M{
			"Cust_ID":    customer.Cust_ID,
			"First_name": customer.First_name,
			"Last_name":  customer.Last_name,
			"DOB":        customer.DOB,
			"Address":    customer.Address,
			"City":       customer.City,
			"Zip":        customer.Zip,
			"State":      customer.State,
		},
	)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
		//
	}

	defer cancel()

	c.JSON(http.StatusOK, result.ModifiedCount)
}
func GetProductsChart(c *gin.Context) {

	product := [][]interface{}{
		{"Country", "2021 Products", "2022 Products"},
		{"Canada", 8175000, 8008000},
		{"Germany", 3792000, 3694000},
		{"France", 2695000, 2896000},
		{"Italy", 2099000, 1953000},
		{"USA", 1526000, 1517000},
	}

	c.JSON(http.StatusOK, product)
}

func GetOrderChart(c *gin.Context) {

	product := [][]interface{}{
		{"Month", "Profit"},
		{"January", 12.2},
		{"February", 9.1},
		{"March", 12.2},
		{"April", 22.9},
		{"May", 0.9},
		{"June", 36.6},
		{"July", 9.1},
		{"August", 30.5},
		{"Sepetember", 6.1},
		{"October", 2.7},
		{"November", 0.9},
		{"December", 2.7},
	}

	c.JSON(http.StatusOK, product)
}
//retreive all customer
func GetCustomers(c *gin.Context) {

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var customer []bson.M

	cursor, err := customerCollection.Find(ctx, bson.M{})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
	}

	if err = cursor.All(ctx, &customer); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)
	}

	defer cancel()

	fmt.Println(customer)

	c.JSON(http.StatusOK, customer)
}

// add product

func AddProduct(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var product models.Product

	fmt.Print(product)
	if err := c.BindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println(err)
		//
	}

	validationErr := validate.Struct(product)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		fmt.Println(validationErr)
		//
	}
	product.Prod_ID = primitive.NewObjectID()
	fmt.Println(ctx)
	result, insertErr := productCollection.InsertOne(ctx, product)

	if insertErr != nil {
		msg := "customer item was not created"
		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		fmt.Println(insertErr)
		//
	}
	defer cancel()

	c.JSON(http.StatusOK, result)
}

// update a product
func UpdateProduct(c *gin.Context) {

	orderID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(orderID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var product models.Product

	if err := c.BindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		fmt.Println(err)

	}

	validationErr := validate.Struct(product)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		fmt.Println(validationErr)

	}

	result, err := productCollection.ReplaceOne(
		ctx,
		bson.M{"_id": docID},
		bson.M{
			"Name":  product.Name,
			"Price": product.Price,
		},
	)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)

	}

	defer cancel()

	c.JSON(http.StatusOK, result.ModifiedCount)
}

// delete a product
func DeleteProduct(c *gin.Context) {

	Prod_ID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(Prod_ID)

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	result, err := productCollection.DeleteOne(ctx, bson.M{"_id": docID})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)

	}

	defer cancel()

	c.JSON(http.StatusOK, result.DeletedCount)

}

//retreive all product
func GetProducts(c *gin.Context) {

	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	var product []bson.M

	cursor, err := productCollection.Find(ctx, bson.M{})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)

	}

	if err = cursor.All(ctx, &product); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		fmt.Println(err)

	}

	defer cancel()

	fmt.Println(product)

	c.JSON(http.StatusOK, product)
}
