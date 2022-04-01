package main

import (
	"os"
	"server/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "8000"
	}

	router := gin.New()
	router.Use(gin.Logger())

	router.Use(cors.Default())

	router.POST("/customer/create", routes.AddCustomer)
	router.POST("/product/create", routes.AddProduct)

	router.DELETE("/customer/delete/:id", routes.DeleteCustomer)
	router.DELETE("/product/delete/:id", routes.DeleteProduct)

	router.PUT("/customer/update/:id", routes.UpdateCustomer)
	router.PUT("/product/update/:id", routes.UpdateProduct)

	router.GET("/customers", routes.GetCustomers)
	router.GET("/products", routes.GetProducts)

	router.Run(":" + port)
}